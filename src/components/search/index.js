// import axios from "axios"
// import { Component } from "react";
// import Song from "../song";

// class Music extends Component{
//     state = { songs: [], keyword: "" };

//     handleTrackList = async ({accessToken})=> {
//            const songs= await axios.get(`https://api.spotify.com/v1/search?type=album&include_external=audio&q=${this.state.keyword}`,
//             {
//                 headers:{
//                     'Authorization': `Bearer ${accessToken}`,
//                     'Content-Type':`application/json`
//             }
        
//             })
//             .then(result=> result.data)
//             .then (res => this.setState({songs :res.albums.items}))
//             ;
//            console.log(songs); 
//     }
   
//     handleInputChange = (e) => {
//         this.setState({
//           keyword: e.target.value
//         });
//       };
      
//       render() {
//         const{ songs = [] } = this.state;

//         return (
//             <>
//             <form style={{ marginBottom: "20px" }} onSubmit={this.handleTrackList}>
//                 <input onChange={this.handleInputChange} type="text" />
//                 <button>search</button>
//             </form>
//                 <div>
//                     {songs.length>0 &&
//                     songs.map((song)=>(
//                         <Song {...song} key={song.id}/>
//                     ))}
//                 </div>    
//             </> 
//         )
// }
// }

// export default Music;


import React, { Component } from "react";
import Song from "../song";
// import albums from "./albums";

class Music extends Component {
  state = { album: [], keyword: "" };

  Search = async (e) => {
    e.preventDefault();
    const { keyword } = this.state;
    const { accessToken } = this.props;
    const Authorization = `Bearer ${accessToken}`;
    fetch(
      `https://api.spotify.com/v1/search?type=track&include_external=audio&q=${keyword}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization,
        },
      }
    )
      .then((response) => response.json())
      .then((res) => {
        this.setState({ album: res.tracks.items });
      });
  };

  handleInputChange = (e) => {
    this.setState({ keyword: e.target.value });
  };

  render() {
    const { album } = this.state;
    return (
      <div >
        <div >
          <h2>
            Home
          </h2>
          <form onSubmit={this.Search}>
            <input
              onChange={this.handleInputChange}
              
              type="text"
            />
            <button >
              Search
            </button>
          </form>
          <div>
            {
            album.map((data) => (
              <Song key={data.id} data={data} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Music;