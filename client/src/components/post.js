import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome/index'
import caretup from  '@fortawesome/fontawesome-free-solid/faCaretUp';
import caretdown from  '@fortawesome/fontawesome-free-solid/faCaretDown';
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

    // if(user_id == localStorage.getItem("user_id")){
    //   deleteBtn = <button className="button is-danger is-outlined">Delete</button>
    // }
  
    return (    
        <article className="media">
          <div className="media-left has-text-centered">
            <p>{ comment_count }</p>
            <p>comments</p>
          </div>
          <div className="media-left">
            <figure className="image is-128x128">
              <Link to={`/post/${id}`}>
                <img src={imagefile} alt="Image"/>
              </Link>
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <h3>
                <Link to={`/post/${id}`}>
                  {description}
                </Link>
              </h3>
            </div>
          </div>
          <div className="media-right">
            <figure className="image is-48x48 ">
              <Link to={userLink}>{ user_image }</Link>
            </figure>
            <span className="linebreak"></span>
            <Link to={userLink}>{ username }</Link>
            <p>posted {this.props.getTime(time, created_at)}</p>
            { deleteBtn }
          </div>
        </article>
    )
  }
}

export default getTime(Post);
