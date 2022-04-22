import axios from "axios";
import { useCallback } from "react";
import { useState,useEffect } from "react"
import Form from "../form";
import List from "../listOfPlaylist";
import { useSelector } from "react-redux";
import Grid from '@mui/material/Grid';



const Playlist = ({selectedTracks})=>{
    const [form,setForm]= useState({
        title: '',
        desc:'',
    });
    const [list,setlist]=useState([]);
    const [snapshot,setSnapshot]=useState([]);
    const accessToken = useSelector((state) => state.auth.token);

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

        
          const config = {
            method: 'post',
            url: `https://api.spotify.com/v1/playlists/${posting}/tracks?uris=${selectedTracks}&position=0`,
            headers: { 
              'Authorization': `Bearer ${accessToken}`,
              'Content-Type': 'application/json'
            }
          };
          
          
           await axios(config)
          .then(function (response) {
            setSnapshot(response.data.snapshot_id);
          })
          .catch(function (error) {
            console.log(error);
          });
    }



    const handleGetPlaylist= useCallback(()=>{
        axios.get(`https://api.spotify.com/v1/me/playlists`,{
            
            headers:{
                'Authorization':`Bearer ${accessToken}`,
            }

            })
            .then(res => {setlist(res.data.items)}
            );
            // eslint-disable-next-line
    },[snapshot]);

    useEffect(()=>{
        handleGetPlaylist()
    },[handleGetPlaylist])
    return (
        <div className="grid-playlist">
            <div>
                <h1 className="centered">
                    Create New Playlist
                </h1>
                <Form data={form} handleFormChange={handleFormChange} handleList={handleList} selectedTracks={selectedTracks} />
            </div>
            <div className="music">
                <h1>
                    Existing Playlist
                </h1>
                <Grid container spacing={2} justifyContent="space-around" >
                {list.length>0 &&
                list.map((list)=>(       
                <List data={list} key={list.id}/>
                ))  
                }
                
                </Grid> 
            
        </div>
       
        
        
        </div>

    )
       
    
}

export default Playlist;