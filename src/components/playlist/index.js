import axios from "axios";
import React from "react";
import { useState,useEffect } from "react"
import data from "../../data";
import Form from "../form";
import List from "../list";


const Playlist = ({accessToken,selectedTracks})=>{
    const [form,setForm]= useState({
        title: '',
        desc:'',
    });
    const [list,setlist]=useState([]);
    const [user,setUser]=useState([]);
    const [playlistId,setPlaylistId]=useState([]);

    const handleFormChange = (e)=>{
        const {name,value} = e.target;
        setForm({...form,[name]:value});        
    }

    
    const handleList = async(e)=>{
        e.preventDefault();
        
        const getId= await axios.get(`https://api.spotify.com/v1/me`,{
            headers:{
                'Authorization':`Bearer ${accessToken}`,
            }})
            .then(res => res.data.id
            );

        const posting= await axios.post(
            `https://api.spotify.com/v1/users/${getId}/playlists`,{
                "name": `${form.title}`,
                "description": `${form.desc}`,
                "public": false
            },
            {  
              headers: {
                'Authorization': `Bearer ${accessToken}`, 
                'Content-Type': 'application/json'
              },
            }
          )
          .then(res =>res.data.id);

        //   await axios.post(
        //     `https://api.spotify.com/v1/users/${playlistId}/playlists`,
        //     {
        //         params: {
        //             uris : `${selectedTracks}`,
        //             position : 0
        //         }
        //     },
        //     {  
        //       headers: {
        //         'Authorization': `Bearer ${accessToken}`, 
        //         'Content-Type': 'application/json'
        //       },
        //     }
        //   )
        //   .then(res => res.data)
        //   .then(respone => console.log(respone));
        
          const config = {
            method: 'post',
            url: `https://api.spotify.com/v1/playlists/${posting}/tracks?uris=${selectedTracks}&position=0`,
            headers: { 
              'Authorization': `Bearer ${accessToken}`,
              'Content-Type': 'application/json'
            }
          };
          
          const addsong = 
           await axios(config)
          .then(function (response) {
            console.log(response.data);
          })
          .catch(function (error) {
            console.log(error);
          });

          
        

    }



    const handleGetPlaylist= async()=>{
        axios.get(`https://api.spotify.com/v1/me/playlists`,{
            
            headers:{
                'Authorization':`Bearer ${accessToken}`,
            }

            })
            .then(res => {setlist(res.data.items)}
            );

    }

    useEffect(()=>{
        handleGetPlaylist()
    },[])

    const serbaGuna =(e)=>{
        e.preventDefault();
       
        console.log(selectedTracks);
    }
    
    

    return (
        <>
        <h1>
            Create New Playlist
        </h1>
        <Form data={form} handleFormChange={handleFormChange} handleList={handleList}/>
        <div className="music">
            <h1>
                Existing Playlist
            </h1>
            <div className="cards">
            
            {list.length>0 &&
            list.map((list)=>(       
            <List data={list} key={list.id}/>
            ))  
            }
     </div>
        </div>
       <button onClick={serbaGuna}>test</button>
        
        
        </>

    )
       
    
}

export default Playlist;