import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import Home from './home';

class Header extends Component{
  constructor(props){
    super(props)

    this.state = {
      user_id: localStorage.getItem("user_id")
    }

    this.logout = this.logout.bind(this);
  }


  componentDidMount(){
    axios.get("/profile").then(resp => {
      localStorage.setItem("user_id", resp.data.id);
      this.setState({user_id: resp.data.id })

    }).catch(err => {
      localStorage.removeItem("user_id");
    })
  }

  logout(){
    localStorage.removeItem("user_id");
  }

  render (){
    if(this.state.user_id){
      return (
        <div>
            <nav className="navbar" role="navigation" aria-label="dropdown navigation">
              <div className="navbar-brand">
                <Link to="/" className="navbar-item">Home</Link>
                <div className="navbar-burger">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div className="navbar-menu">
                <div className="navbar-end">
                  <Link to="/user/1" className="navbar-item">Profile</Link>
                  <Link to="/post" className="navbar-item">Post</Link>
                  <a href="/users/sign_out" onClick={this.logout} className="navbar-item">Logout</a>  
                </div>
              </div>
            </nav>
        </div>
      )
    }else {
      return (
        <div>
          <nav className="navbar" role="navigation" aria-label="dropdown navigation">
            <div className="navbar-brand">
              <Link to="/" className="navbar-item">Home</Link>
              <div className="navbar-burger">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <div className="navbar-menu">
              <div className="navbar-end">
                <a href="/users/sign_in" className="navbar-item">Login</a>  
              </div>
            </div>
          </nav>
        </div>
      )
    }
  }
}

export default Header; 