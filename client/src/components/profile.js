import React, { Component } from 'react';
import axios from 'axios';
import Feed from './feed';
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

    const id = localStorage.getItem("user_id"); 

    axios.get(`profile/${id}`).then(resp => {
      console.log(resp);
      this.setState({user: resp.data.user, posts: resp.data.posts})
    }).catch(err => {
      console.log(err)
    })
  }

  
  render () {
    const { email } = this.state.user; 

    return (
      <div className="container">
        <div className="columns">
          <div className="column is-one-quarter">
          <div className="card">
          <div className="card-image">
            <figure className="image is-4by3">
              <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"/>
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <p className="title is-4">{ email } </p>
              </div>
            </div>
          </div>
        </div>
          </div>
          <div className="column is-three-quarters">
            <Feed data={this.state.posts} />
          </div>
        </div>
      </div>
    )
  }
}

export default logged_in(Profile); 