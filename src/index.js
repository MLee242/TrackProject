import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import axios from 'axios';
import {usePromiseTracker} from 'react-promise-tracker';
import Loader from 'react-loader-spinner';

axios.defaults.baseURL = 'http://localhost:8080';
axios.defaults.headers['Content-Type'] = 'application/json';
axios.defaults.headers['Access-Control-Allow-Origin'] = '*';


const LoadingIndicator = props => {
  const {promiseInProgress} = usePromiseTracker();
  return (
    promiseInProgress && 
    <div
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: "100%",
          height: "100",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
      <Loader type="ThreeDots" color="#2BAD60" height="100" width="100" />
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
    <LoadingIndicator/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
