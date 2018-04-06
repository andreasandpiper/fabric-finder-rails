import React from 'react';
import { Route } from 'react-router-dom';
import '../assets/css/app.css';
import Header from './header';
import Home from './home';
import Profile from './profile';
import Post from './post_page';
import Footer from './footer';
import PostForm from './post_form';


const App = () => (
    <div className="wrapper">
        <Header />
        <Route exact path="/" component={Home}/>
        <Route path="/user/:id" component={Profile}/>
        <Route exact path="/post" component={PostForm}/>
        <Route path="/post/:id" component={Post} />
        {/* <Footer /> */}
    </div>

);

export default App;
