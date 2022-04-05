import './App.css';
import store from './service/redux/store';
import Home from './pages/home';
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
          <div className='container'>
            <div className="music">
                      <h1>
                          Music Made For You
                      </h1>
                <div className='cards'>
                    <Home/>
                </div>
              </div>
            </div> 
      </Provider> 
     
  );
}

export default App;
