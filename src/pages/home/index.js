import Song from '../../components/song';
import data from "../../data";
const Home = ()=>{
    return (
        <div className='card'>
            <Song {...data}/>
              <div className="add">
                  <input type="submit" value="Select"/>                
              </div>
              </div> 
    );
}

export default Home;