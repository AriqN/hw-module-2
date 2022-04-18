import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import {  
    Route
  } from 'react-router-dom';
import Home from '../../pages/home';


function UserPrivateRoute({ children , ...rest }) {
    const accessToken = useSelector((state) => state.auth.token);
    return <Route {...rest}>{accessToken ? children : <Redirect to={'/'} />}</Route>;
  }
export default UserPrivateRoute;