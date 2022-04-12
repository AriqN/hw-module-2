import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import {  
    Route
  } from 'react-router-dom';


function PrivateRoute({ component: Component , ...rest }) {
    const accessToken = useSelector((state) => state.auth.token);
    return (
      <Route
        {...rest}
        render={(props) => { return accessToken
          ? (<Component {...props}/>)
          : (<Redirect to={'/'}/>)
        }}
      />
    );
  }
export default PrivateRoute;