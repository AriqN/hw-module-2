

const Song = (data) => {
    return (
    
        <>
        <img src= {data.album.images[1].url} alt="Image"/>
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
                 </>
                 )
    
};

export default Song;