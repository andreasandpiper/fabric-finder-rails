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
    const { description, image, created_at, id, user_id } = this.props.post;
    let deleteBtn = null; 
  
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
              <div className="has-text-right">
                <p>posted {this.props.getTime(this.props.time, created_at)}</p>
              </div>
            </div>
          </div>
        </article>
      </div>
    )
  }
}

export default getTime(Post);
