import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import Playlist from "../playlist";
import Song from "../song";
import { useSelector } from "react-redux";
import { selectorProps } from "../../service/redux/store";
import { type } from "os";

export interface TrackType {
  album: Album;
  artists: Artist[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: ExternalIDS;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  is_local: boolean;
  name: string;
  popularity: number;
  preview_url: null | string;
  track_number: number;
  type: TrackTypeTypes;
  uri: string;
}

export enum TrackTypeTypes {
  Track = 'track',
}

export interface Album {
  artists: Artist[];
  available_markets: string[];
  external_urls: ExternalUrls;
  href: string;
  id: string;
  images: Image[];
  name: string;
  release_date: string;
  release_date_precision: ReleaseDatePrecision;
  total_tracks: number;
  uri: string;
}

export interface Artist {
  external_urls: ExternalUrls;
  href: string;
  id: string;
  name: string;
  type: ArtistType;
  uri: string;
}

export interface ExternalUrls {
  spotify: string;
}

export enum ArtistType {
  Artist = 'artist',
}

export interface Image {
  height: number;
  url: string;
  width: number;
}

export enum ReleaseDatePrecision {
  Day = 'day',
}

export interface ExternalIDS {
  isrc: string;
}


const Music:FC = () =>{

  

  const [tracks,setTracks] = useState<TrackType[]>([]);
  const [keyword, setKeyword] = useState<string | null>(null);
  const [selectedTracks,setSelectedTracks] = useState<string[]>([]);
  const accessToken = useSelector((state:selectorProps) => state.auth.token);




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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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

      <Playlist selectedTracks={selectedTracks} accessToken={accessToken}/>
      </div>
      </div>
      
      </>
  )

}
export default Music;

