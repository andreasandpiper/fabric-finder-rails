import React, { Component } from 'react';
import { Link} from 'react-router-dom';


class Header extends Component{
  componentDidMount(){
    
  }
  render (){
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
                <a href="/users/sign_in" className="navbar-item">Login</a>
                <a href="/users/sign_out" className="navbar-item">Logout</a>

              </div>
            </div>
          </nav>
      </div>
    )
  }
}

export default Header; 