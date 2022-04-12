import { useSelector } from "react-redux";


// import GIF from "../../component/gif";


 const clientId= process.env.REACT_APP_CLIENT_ID;
 
 

const Home = ()=>{
  const handleLogin = ()=>{
    const scope = 'playlist-modify-private user-read-private '
    window.location.replace(`https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&redirect_uri=http://localhost:3000/create-playlist&scope=${scope}`);

  }
   

        return (
          
            <>
            
              <div className="music">
                <div className="home-head">
                  <h1>
                    Music Made For You
                  </h1> 
                                
                <div className='container'>
                      <div className="cards">
                        <button onClick={handleLogin} className="select-btn">
                       Login
                        </button>
                      </div>
                         
                                               
                </div>
                </div> 
             </div> 
            
            
               
            </>
        )
    
}





export default Home;