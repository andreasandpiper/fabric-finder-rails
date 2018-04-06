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
    console.log(this.props)
    const { description, image, created_at, id, time } = this.props.post;
    const {username, gravatar } = this.props.post.user; 
    const userLink = `/user/${this.props.post.user.id}`;
    let deleteBtn = null; 
    let user_image = null;

    if(gravatar){
      user_image = <img src={gravatar} alt="Image"/>
    }
  
    return (    
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-128x128">
              <Link to={`/post/${id}`}>
                <img src={image} alt="Image"/>
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
            <figure className="image is-128x128">
              { user_image }
              <Link to={userLink}>{ username }</Link>
              <p>posted {this.props.getTime(time, created_at)}</p>
            </figure>
          </div>
        </article>
      </div>
    )
  }
}

export default getTime(Post);
