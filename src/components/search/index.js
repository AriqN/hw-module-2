import axios from "axios";
import React, { useEffect, useState } from "react";
import Playlist from "../playlist";
import Song from "../song";
import { useSelector } from "react-redux";
const Music = () =>{
  const [tracks,setTracks] = useState([]);
  const [keyword, setKeyword] = useState(null);
  const [selectedTracks,setSelectedTracks] = useState([]);
  const accessToken = useSelector((state) => state.auth.token.access_token);




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
     <div className='container'>
      <div className="music">
    <form style={{ marginBottom: "20px" }} onSubmit={handleSubmit} className="form-search">
        <input onChange={(e) => setKeyword(e.target.value)} type="text" placeholder="Find Your Favorite Song Here!" className="input-search" />
        <button className="search-btn" type="submit"><i className= "fas fa-search"></i></button>
      </form>
      <div className="cards">
        {
          tracks.length>0 &&
          tracks.map((data)=>(
            <Song key={data.id} data={data} selectedTracks={selectedTracks} setSelectedTracks={setSelectedTracks}/>
          ))

        }
      </div>

      <Playlist accessToken={accessToken} selectedTracks={selectedTracks}/>
      </div>
      </div>
      
      </>
  )

}
export default Music

