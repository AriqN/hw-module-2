import { Button } from "@mui/material";
const Song = ({data, selectedTracks, setSelectedTracks}) => {
    

    const handleTracksSelector=()=>{
        if (selectedTracks.includes(data.uri))
        setSelectedTracks((prev)=>prev.filter((uri)=> uri !== data.uri));
        else setSelectedTracks((prev)=>[...prev,data.uri]);
    }

    return (
    
        <>
            
                <div className='card' >                          
                    <img src= {data.album.images[1].url} alt={data.name}/>
                        <div className="text-tracks">
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
                        <Button variant="contained" color="secondary" onClick={handleTracksSelector}  sx={{fontWeight:700, paddingX:3}} >
                          {selectedTracks.includes(data.uri) ? "Deselect" : "Select"}
                        </Button>
                </div>
              
                 </>
                 )
    
};

export default Song;