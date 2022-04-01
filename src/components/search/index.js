import axios from "axios";
import React, { useEffect, useState } from "react";
import Song from "../song";
// import albums from "./albums";

const Music = ({accessToken}) =>{
  const [tracks,setTracks] = useState([]);
  const [keyword, setKeyword] = useState(null);
  const handleSearch = async()=>{
    axios.get(`https://api.spotify.com/v1/search?type=track&include_external=audio`,{
      params : {
        q: keyword,
      },
      headers:{
        'Authorization':`Bearer ${accessToken}`,
        
      }
    })
    .then((response) => {
      setTracks(response.data.tracks.items)
  })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch();
  };

  useEffect(() => {
    handleSearch();
  }, []);

  return(
    <>
    <form style={{ marginBottom: "20px" }} onSubmit={handleSubmit}>
        <input onChange={(e) => setKeyword(e.target.value)} type="text" />
        <button>search</button>
      </form>

      {
        tracks.length>0 &&
        tracks.map((data)=>(
          <Song key={data.id} data={data}/>
        ))

      }
      </>
  )

}
export default Music

