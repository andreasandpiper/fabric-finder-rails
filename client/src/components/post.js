import React from 'react';
import { Link } from 'react-router-dom';
import Profile from './profile';
import FontAwesomeIcon from '@fortawesome/react-fontawesome/index'
import caretup from  '@fortawesome/fontawesome-free-solid/faCaretUp';
import caretdown from  '@fortawesome/fontawesome-free-solid/faCaretDown';

export default (props) => {
  const { description, image, created_at, id } = props.post;

  function getTimeElapsed(date){
    return date;
  }
  return (
    
    <div className="box">
      <article className="media">
        <div className="media-left">
          <FontAwesomeIcon icon={caretup} />
          <span className="break"></span>
          <FontAwesomeIcon icon={caretdown} />

        </div>
        <div className="media-left">
          <figure className="image is-128x128">
            <img src={image} alt="Image"/>
            <Link to={`post/${id}`}>
              <p className="has-text-centered">View Post</p>
            </Link>
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
                {description}
            </p>
            <div className="has-text-right">
              {/* <Link to={`user/${user_id}`}><span><strong >{user_name}</strong></span></Link> */}
              <p>{getTimeElapsed(created_at)}</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}