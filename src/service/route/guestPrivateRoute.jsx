import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import {  
    Route
  } from 'react-router-dom';


function GuestPrivateRoute({ children , ...rest }) {
    const accessToken = useSelector((state) => state.auth.token);
    return <Route {...rest}>{accessToken ? <Redirect to={'/create-playlist'} /> : children}</Route>;
  }
export default GuestPrivateRoute;