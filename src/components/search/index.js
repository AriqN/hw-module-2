import axios from "axios"
import { Component } from "react";
import Song from "../song";

class Music extends Component{
    state = { songs: [], keyword: "" };

    handleTrackList = async (e,accessToken)=> {
        e.preventDefault();
        const songs = 
            await axios.get(`https://api.spotify.com/v1/search?type=album&include_external=audio&q=${this.state.keyword}`,
            {
                headers:{
                    'Authorization': `Bearer ${accessToken}`,
                    'Content-Type':`application/json`
            }
        
            })
            .then(result=> result.data);
            
            
            this.setState( {songs} );
    }
   
    handleInputChange = (e) => {
        this.setState({
          keyword: e.target.value
        });
      };
      
      render() {
        const{ songs = [] } = this.state;

        return (
            <>
            <form style={{ marginBottom: "20px" }} onSubmit={this.handleTrackList}>
                <input onChange={this.handleInputChange} type="text" />
                <button>search</button>
            </form>
                <div>
                    {songs.length>0 &&
                    songs.map((song)=>(
                        <Song {...song} key={song.id}/>
                    ))}
                </div>    
            </> 
        )
}
}

export default Music;