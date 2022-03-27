import Song from '../../components/song';
import data from "../../data";
const Home = ()=>{
    return data.map(song=>(        
                <Song {...song} key={song.id}/>            
    ));
}

export default Home;