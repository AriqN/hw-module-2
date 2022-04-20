import { Button } from "@mui/material";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


// import GIF from "../../component/gif";


 const clientId= process.env.REACT_APP_CLIENT_ID;

const Home = ()=>{
  const handleLogin = ()=>{
    const scope = 'playlist-modify-private user-read-private '
    window.location.replace(`https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&redirect_uri=https://hw-module-3.vercel.app/&scope=${scope}`);

  }

  
   

        return (
          
            <>
            
              <div className="music">
                <div className="home-head">
                <Typography component="div">                
                  <Box sx={{ letterSpacing: 10, m: 1 }}>Music Made For You.</Box>
                </Typography>
                  {/* <h1>
                    Music Made For You
                  </h1>  */}
                                
                <div className='container'>
                      <div className="cards">
                        <Button variant="contained" color="secondary" onClick={handleLogin} >
                       Login
                        </Button>                      
                      </div>
                         
                                               
                </div>
                </div> 
             </div> 
            
            
               
            </>
        )
    
}





export default Home;