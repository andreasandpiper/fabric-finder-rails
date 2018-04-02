import React, { Component } from 'react';
import Feed from './feed';

class Profile extends Component {
  constructor(props){
    super(props);
  }

  componentWillMount(){
  }
  
  render () {
    // const { name, email } = this.props.user.current_user; 

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
                {/* <p className="title is-4">{ name } </p> */}
              </div>
            </div>
          </div>
        </div>
          </div>
          <div className="column">
          {/* <Feed data={this.props.user.user_posts} /> */}
          </div>
        </div>
      </div>
    )
  }
}

export default Profile; 