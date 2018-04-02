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
        localStorage.setItem("logged_in", false);
        localStorage.removeItem("user_id");
        window.location.href = '/users/sign_in';
    }
    return Promise.reject(error);
  });

axios.get("/profile").then(resp => {
    console.log(resp)
    localStorage.setItem("logged_in", true);
    localStorage.setItem("user_id", resp.data.id);

}).catch(err => {
    localStorage.setItem("logged_in", false);
    localStorage.removeItem("user_id");
})


ReactDOM.render(
    <HashRouter>
        <App />
    </HashRouter>,
    document.getElementById('root')
);
