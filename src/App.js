import './App.css';
import store from './service/redux/store';
import Home from './pages/home';
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CreatePlaylist from './pages/createPlaylist';

function App() {
  return (
    <Provider store={store}>
      <Router>
          <Switch>
            <Route path="/create-playlist" component={CreatePlaylist}></Route>
            <Route path="/" component={Home}></Route>
          </Switch>
        </Router>
    </Provider> 
     
  );
}

export default App;
