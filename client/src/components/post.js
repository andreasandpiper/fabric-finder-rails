import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import getTime from '../HOC/time_ago';

class Post extends Component{
  constructor(props){
    super(props)
  }

  render(){
    const { description, image, created_at, id, time, user_id, imagefile, comment_count } = this.props.post;
    const {username, gravatar } = this.props.post.user; 
    let userLink = `/user/${this.props.post.user.id}`;
    let deleteBtn = null; 
    let user_image = null;

    if(gravatar){
      user_image = <img src={gravatar} alt="Image"/>
    }

    let comment_message = comment_count === 1 ? "comment" : "comments";

    // if(user_id == localStorage.getItem("user_id")){
    //   deleteBtn = <button className="button is-danger is-outlined">Delete</button>
    // }
  
    return (
        <div className="columns post">
          <div className="column is-1 has-text-centered is-vertical-center-vert-items">
            <p>{ comment_count }</p>
            <p>{ comment_message }</p>
          </div>
          <div className="column is-2 is-vertical-center">
            <figure className="image is-128x128">
              <Link to={`/post/${id}`}>
                <img src={imagefile} alt="Image"/>
              </Link>
            </figure>
          </div>

          <div className="column is-7 has-text-left">
            <h3>
              <Link to={`/post/${id}`}>
                {description}
              </Link>
            </h3>
          </div>

          <div className="column is-2 has-text-left">
            <figure className="image is-48x48">
                <Link to={userLink}>{ user_image }</Link>
              </figure>
              <span className="linebreak"></span>
              <Link to={userLink}>{ username }</Link>
              <p>posted {this.props.getTime(time, created_at)}</p>
              { deleteBtn }
          </div>

        </div>
    )
  }
}

export default getTime(Post);
