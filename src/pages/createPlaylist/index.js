import { useSelector,useDispatch } from "react-redux";
import { useEffect } from "react";
import { updateAccessToken } from "../../service/redux/action";
import { Link } from "react-router-dom";
import Music from "../../components/search";
const CreatePlaylist = () => {
    const accessToken = useSelector((state) => state.auth.token);

    const dispatch = useDispatch();
    const filterToken = (param) => { 
    const accessToken = param
    .slice(1)
    .split("&")
    .map(v => v.split("="))
    .reduce( (pre, [key, value]) => ({ ...pre, [key]: value }), {} );
    dispatch(updateAccessToken(accessToken));

  }

    useEffect (()=>{
        if(window.location.hash)
        filterToken(window.location.hash)
      },[]);   

    //   const serbaGuna =(e)=>{
    //     e.preventDefault();
       
    //     console.log(accessToken);
    // }


    return (
        <>
        <div className='container'>
          <div className="music">
             
              
                {
                  !accessToken ?
                  <div className="cards">
                      
                      <div className="cards">
                       <h1>
                           You Are Not Allowed To Go In 
                       </h1>
                       <Link to="/" className="select-btn">
                           Back Home
                       </Link>
                      </div>
                  </div>
                  :
                  <>                    
                    <div className='cards'>    
                      <Music/>             
                    </div>
                  </>
                }
          </div>
        </div> 
        
        {/* <button onClick={serbaGuna}>test</button> */}
           
        </>
    )
}

export default CreatePlaylist;