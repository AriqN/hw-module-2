import './App.css';
import Home from './pages/home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CreatePlaylist from './pages/createPlaylist';
import PrivateRoute from './service/route/privateRoute';
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { updateAccessToken } from "./service/redux/action";
import { ThemeProvider } from "@mui/material";
import theme from './service/theme';

function App() {
  const dispatch = useDispatch();

const getQueryParams= (string) => {
  const queries = string.substring(1).split('&');
  const finalObj = {};
  queries.forEach((query) => {
    const arr = query.split('=');
    if (arr.length > 1) {
      const key = arr[0];
      const value = arr[1];
      finalObj[key] = value;
    }
  });
  return finalObj;
}

  useEffect (()=>{
    const { access_token = null } = getQueryParams(window.location.hash);
    if (access_token) dispatch(updateAccessToken(access_token));
  }, [dispatch]);   

  return (
    <ThemeProvider theme={theme}>
      <Router>
          <Switch>
            {/* <Route path="/create-playlist" exact component={CreatePlaylist}></Route> */}
            <Route path="/" exact component={Home}></Route>
            <PrivateRoute path="/create-playlist" exact component={CreatePlaylist}/>
          </Switch>
        </Router>
    </ThemeProvider>    
  
     
  );
}

export default App;
