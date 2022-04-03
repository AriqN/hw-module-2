import { useEffect, useState, useCallback } from "react";

import Music from '../../components/search';
// import GIF from "../../component/gif";


 const clientId= 'cb12837dbb574dc791a05c6411dd9453';

const Home = ()=>{
  const [accessToken,setAccessToken] = useState(null);
  const filterToken = (param) => { 
    const parsed = param
    .slice(1)
    .split("&")
    .map(v => v.split("="))
    .reduce( (pre, [key, value]) => ({ ...pre, [key]: value }), {} );
    setAccessToken(parsed);
    
  }
  
  const handleLogin =()=>{
    const scope = 'playlist-modify-private user-read-private '
    window.location.replace(`https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&redirect_uri=http://localhost:3000/&scope=${scope}`);
  }

    useEffect (()=>{
      if(window.location.hash)
      filterToken(window.location.hash)
    },[]);      
        return (
            <>{
              !accessToken &&
              <div>
                <button onClick={handleLogin} className="select-btn">
                  Login
                </button>
              </div>
            }
            {
              accessToken &&
              <>
              <Music accessToken={accessToken.access_token}/> 
              
                
              </>
            }
               
            </>
        )
    
}





export default Home;