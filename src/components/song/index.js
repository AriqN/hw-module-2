import React from "react";
const Song = ({data, tracks, setTracks}) => {
    

    const handleTracksSelector=()=>{
        if (tracks.includes(data.uri))
        setTracks((prev)=>prev.filter((uri)=> uri !== data.uri));
        else setTracks((prev)=>[...prev,data.uri]);
    }

    return (
    
        <>
            <div className="cards">
                <div className='card' key={data.id}>                          
                    <img src= {data.album.images[1].url} alt="music"/>
                        <div className="text">
                            <div className="song-title">
                                {data.name}
                            </div>
                            <div className="artist">
                                {data.artists[0].name}
                            </div>
                            <div className="album">
                                {data.album.name}
                            </div>
                        </div> 
                        <button className="add select-btn"  onClick={handleTracksSelector}>
                            {tracks.includes(data.uri) ? "Desselect" : "Select"}             
                        </button>
                </div>
            </div>    
                 </>
                 )
    
};

export default Song;