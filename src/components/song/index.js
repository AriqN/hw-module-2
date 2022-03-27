

const Song = (song) => {
    return (
    
        <>
        <div className='card'>                          
            <img src= {song.album.images[1].url} alt="Image"/>
                 <div className="text">
                     <div className="song-title">
                         {song.name}
                     </div>
                     <div className="artist">
                         {song.artists[0].name}
                     </div>
                     <div className="album">
                         {song.album.name}
                     </div>
                 </div> 
                 <div className="add">
                  <input type="submit" value="Select"/>                
              </div>
        </div>    
                 </>
                 )
    
};

export default Song;