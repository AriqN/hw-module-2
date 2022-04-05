import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateAccessToken } from "../../service/redux/action";

import Music from '../../components/search';
// import GIF from "../../component/gif";


 const clientId= process.env.REACT_APP_CLIENT_ID;
 
 

const Home = ()=>{
  const accessToken = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();
  const filterToken = (param) => { 
    const accessToken = param
    .slice(1)
    .split("&")
    .map(v => v.split("="))
    .reduce( (pre, [key, value]) => ({ ...pre, [key]: value }), {} );
    dispatch(updateAccessToken(accessToken));
    
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
              <Music/> 
              
                
              </>
            }
               
            </>
        )
    
}





export default Home;