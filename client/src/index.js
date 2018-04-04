import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import 'bulma/css/bulma.css';
import './mystyles.css';
import posts from './assets/data';
import axios from 'axios';
import App from './components/app';

axios.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    if(error.status === 401){
        localStorage.removeItem("user_id");
        window.location.href = '/users/sign_in';
    }
    return Promise.reject(error);
  });

// Create into component?
axios.get("/profile").then(resp => {
    console.log(resp)
    localStorage.setItem("user_id", resp.data.id);

}).catch(err => {
    localStorage.removeItem("user_id");
})


ReactDOM.render(
    <HashRouter>
        <App />
    </HashRouter>,
    document.getElementById('root')
);
