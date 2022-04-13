import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import {  
    Route
  } from 'react-router-dom';
import Home from '../../pages/home';


function PrivateRoute({ component: Component , ...rest }) {
    const accessToken = useSelector((state) => state.auth.token);
    return (
      <Route
        {...rest}
        render={(props) => { return accessToken
          ? (<Component {...props}/>)
          : (<Home/>)
        }}
      />
    );
  }
export default PrivateRoute;