

const Song = (song) => {
    return (    
        <>
        <div className='card'>                          
            <img src= {song.albums.item.album.images[1].url} alt="music"/>
                 <div className="text">
                     <div className="song-title">
                         {song.albums.item.name}
                     </div>
                     <div className="artist">
                         {song.albums.item.artists[0].name}
                     </div>
                     <div className="album">
                         {song.albums.item.album.name}
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