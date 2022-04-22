import { Button } from "@mui/material";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

 const clientId= process.env.REACT_APP_CLIENT_ID;
 const redirectUri= "http://hw-module-3.vercel.app/";

const Home = ()=>{
  const handleLogin = ()=>{
    const scope = 'playlist-modify-private user-read-private '
    window.location.replace(`https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&redirect_uri=${redirectUri}&scope=${scope}`);

  }     
        return (
          
            <>            
                <div className="home-head">
                <Typography component="div">                
                  <Box sx={{ letterSpacing: 8, m: 1}}>Music Made For You.</Box>
                </Typography>                                                  
                <div className='container'>
                      <div className="cards">
                        <Button variant="contained" color="secondary" onClick={handleLogin} sx={{fontWeight:700, paddingX:4,paddingY:1}} >
                       Login
                        </Button>                      
                      </div>                                                        
                </div>
                </div>                                                     
            </>
        )
    
}





export default Home;