

const Song = ({data}) => {
    const song = data.album;
    return (
    
        <>
        <div className='card'>                          
            <img src= {song.images[1].url} alt="music"/>
                 <div className="text">
                     <div className="song-title">
                         {data.name}
                     </div>
                     <div className="artist">
                         {data.artists[0].name}
                     </div>
                     <div className="album">
                         {song.name}
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