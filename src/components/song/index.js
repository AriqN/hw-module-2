import React from "react";
const Song = ({data, selectedTracks, setSelectedTracks}) => {
    

    const handleTracksSelector=()=>{
        if (selectedTracks.includes(data.uri))
        setSelectedTracks((prev)=>prev.filter((uri)=> uri !== data.uri));
        else setSelectedTracks((prev)=>[...prev,data.uri]);
    }

    return (
    
        <>
            <div className="cards">
                <div className='card' >                          
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
                            {selectedTracks.includes(data.uri) ? "Desselect" : "Select"}             
                        </button>
                </div>
            </div>    
                 </>
                 )
    
};

export default Song;