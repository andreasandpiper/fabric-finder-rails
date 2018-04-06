import React, { Component } from 'react';
import axios from 'axios';
import Feed from './post_feed';
import logged_in from '../HOC/user_status';

class Profile extends Component {
  constructor(props){
    super(props);

  this.state = {
    user: {},
    posts: []
  }
  }

  componentWillMount(){
    this.props.is_logged_in();

    axios.get(`/profile/${this.props.match.params.id}`).then(resp => {
      this.setState({user: resp.data, posts: resp.data.posts})
    }).catch(err => {
      console.log(err)
    })
  }

  
  render () {
    const { username, gravatar } = this.state.user; 
    let account_settings = null; 

    if(this.state.user.id == localStorage.getItem("user_id")){
      account_settings = <a href="/users/edit">Account Settings</a>
    }

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
        { account_settings }
      </div>
          <div className="column is-three-quarters">
            <Feed data={this.state.posts}/>
          </div>
        </div>
      </div>
    )
  }
}

export default logged_in(Profile); 