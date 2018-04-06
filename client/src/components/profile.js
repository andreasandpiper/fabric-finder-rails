import React, { Component } from 'react';
import axios from 'axios';
import Feed from './feed';
import logged_in from '../HOC/user_status';

class Profile extends Component {
  constructor(props){
    super(props);

  this.state = {
    user: {},
    posts: [], 
    time: null
  }
  }

  componentWillMount(){
    this.props.is_logged_in();

    const id = localStorage.getItem("user_id"); 

    axios.get(`/profile/${id}`).then(resp => {
      this.setState({user: resp.data.user, posts: resp.data.posts, time: resp.data.time})
    }).catch(err => {
      console.log(err)
    })
  }

  
  render () {
    const { username, gravatar } = this.state.user; 

    return (
      <div className="container">
        <div className="columns">
          <div className="column is-one-quarter">
          <div className="card">
          <div className="card-image">
            <figure className="image is-4by3">
              <img src={gravatar} alt="gravatar image"/>
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <p className="title is-4">{ username } </p>
              </div>
            </div>
          </div>
        </div>
        <a href="/users/edit">Account Settings</a>
          </div>
          <div className="column is-three-quarters">
            <Feed data={this.state.posts} time={this.state.time}/>
          </div>
        </div>
      </div>
    )
  }
}

export default logged_in(Profile); 