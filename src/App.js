import './App.css';
import data from './data';

function App() {
  return (
    <div className='container'>
      <div className="music">
                <h1>
                    Music Made For You
                </h1>
          <div className='cards'>
              <div className='card'>
              <img src= {data.album.images[0].url} alt="Image"/>
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
              <div className="add">
                  <input type="submit" value="Select"/>                
              </div>
          </div>
        </div>
      </div>  
    </div>  
  );
}

export default App;
