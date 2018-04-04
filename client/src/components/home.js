import React, { Component } from 'react';
import Feed from './feed';
import axios from 'axios';

class Home extends Component {
  constructor(props){
    super(props);

    this.state = {
      posts: []
    }
  }

  componentDidMount(){
    axios.get('/posts').then(resp => {
      this.setState({posts: resp.data})
    }).catch(err => {
      console.log(err)
    })
  }

  render(){
    return (
      <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title">
              Find My Fabric
            </h1>
            <h2 className="subtitle">
              <a href="http://localhost:3000/users/sign_up" className="button is-white">Sign Up</a> 
            </h2>
          </div>
        </div>
      </section>
      <div className= "container">
        <Feed data={this.state.posts} />
      </div>
    </div>
    )
  }
}

export default Home; 