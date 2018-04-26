import React, { Component } from 'react';
import Feed from './post_feed';
import axios from 'axios';
import fabricSample from '../assets/images/fabricpeice.png';
import spool from '../assets/images/spool.jpg';
import person from '../assets/images/person.jpg';
class Home extends Component {
  constructor(props){
    super(props);

    this.state = {
      cartoonClass: 'column'
    }
  }

  componentDidMount(){
    window.addEventListener('scroll', this.scrollEvent.bind(this));
  }

  scrollEvent(){
    this.setState({...this.state, cartoonClass: 'column fadeIn'});
  }

  render(){
    const { cartoonClass } = this.state; 
    let signUpBtn = null; 

    if(!localStorage.getItem("user_id")){
      signUpBtn = <a href="/users/sign_up" className="button is-white">Sign Up</a> 
    }
    return (
      <div>
        <section className="hero is-primary">
            <div className="hero-body is-vertical-center">
              <div className="container has-text-centered">
                <h1 className="title">
                  Find My Fabric
                </h1>
                <h2>A community of fabric enthusiasts helping connect others to their dream fabrics.</h2>
                <h2 className="subtitle">
                  { signUpBtn }
                </h2>
              </div>
            </div>
          </section>
        <section className="container">
          <h1 className="has-text-centered">How does it work?</h1>
          <hr/>
          <div className="columns cartoons has-text-centered">
            <div className={ cartoonClass }>
              <img src={ fabricSample } />
              <p>Last peice of fabric?</p>
            </div>
            <div className={ cartoonClass }>
              <img src={ spool } />
              <p>Post and Ask a Question</p>
            </div>
            <div className={ cartoonClass }>
              <img src={ person } />
              <p>Wait for comments and vote!</p>
            </div>
          </div>
        </section>
        <section className="home-tagline is-vertical-center">
          <div className="container">
            <h1 className="has-text-white">Ever run out of fabric and you searches online lead you nowhere? By creating a central source for all fabric related questions we bring our collaborative minds to help out. </h1>
          </div>
        </section>
      </div>
    )
  }
}

export default Home; 