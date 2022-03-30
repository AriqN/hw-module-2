import { Component } from "react";
import Music from '../../components/search';
// import GIF from "../../component/gif";

const clientId = process.env.CLIENT_ID;
class Home extends Component {
  state = { accessToken: null };
  

  componentDidMount() {
    const filterToken = (param) => param
    .slice(1)
    .split("&")
    .map(v => v.split("="))
    .reduce( (pre, [key, value]) => ({ ...pre, [key]: value }), {} );
    const { access_token=null } = filterToken(window.location.hash);
    if (access_token){
        this.setState({accessToken:access_token})
    }
    
  };

  render() {
    const { accessToken=null } = this.state;


    if (accessToken)
        return (
            <>
            <Music accessToken={accessToken}/>      
            </>
        )
    return (
      
       <div>
        <a href= {`https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&redirect_uri=http://localhost:3000/&scope=playlist-modify-private`} >Login</a>
        </div>
      
    );
  }
}

export default Home;