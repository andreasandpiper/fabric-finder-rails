import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Feed from './post_feed';
import axios from 'axios';


class Home extends Component {
  constructor(props){
    super(props);

    this.state = {
      topPosts: []
    }
  }

  componentDidMount(){
    axios.get(`/topten`).then(resp => {
      console.log(resp)
      this.setState({...this.state, topPosts: resp.data});
    }).catch(err => {
      console.log(err)
    })
  }

  scrollEvent(){
    this.setState({...this.state, cartoonClass: 'column fadeIn'});
  }

  render(){
    const { topPosts } = this.state; 
    let signUpBtn = null; 
    let logInBtn = null; 

    if(!localStorage.getItem("user_id")){
      signUpBtn = <a href="/users/sign_up" className="button is-white">Sign Up</a> 
      logInBtn = <a href="/users/sign_in" className="button is-white">Login</a>; 
    }
    return (
      <div>
        <section className="hero">
            <div className="hero-body is-vertical-center">
              <div className="container has-text-centered">
                <h1 className="title has-text-white is-size-1 is-size-1-mobile">
                  Find My Fabric
                </h1>
                <h2 className="is-size-5 is-size-5-mobile">A community of fabric enthusiasts helping connect others to their dream textiles.</h2>
                <div className="subtitle">
                  { signUpBtn }
                  { logInBtn }
                </div>
              </div>
            </div>
          </section>
        <section className="home-info">
          <div className="container">
            <h1 className="has-text-centered">How does it work?</h1>
            <hr/>
            <div className="columns cartoons has-text-centered">
              <div className="column">
                <i className="fa fa-cut"></i>
                <p>Last peice of fabric?</p>
              </div>
              <div className="column">
                <i className="fa fa-commenting"></i>
                <p>Post and Ask a Question</p>
              </div>
              <div className="column">
                <i className="fa fa-comments"></i>
                <p>Wait for comments and vote!</p>
              </div>
            </div>
          </div>
        </section>
        <section className="container has-text-centered">
          <Feed data={ topPosts }/>
          <Link to="/fabric" className="button is-primary">Check out more fabric</Link> 
        </section>
        <section className="home-tagline is-vertical-center">
          <div className="container">
            <h1 className="has-text-white is-size-3 is-size-6-mobile">Ever run out of fabric and online searches lead you nowhere? By creating a central source for all fabric related questions we bring our collaborative minds to help each other out. </h1>
          </div>
        </section>
      </div>
    )
  }
}

export default Home; 