import React from 'react';
import { Link } from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome/index'
import caretup from  '@fortawesome/fontawesome-free-solid/faCaretUp';
import caretdown from  '@fortawesome/fontawesome-free-solid/faCaretDown';

export default (props) => {
  const { description, image, created_at, id, comment_count } = props.post;

  function getTimeElapsed(date){
    return date;
  }

  console.log(props)

  return (    
    <div className="box">
      <article className="media">
        <div className="media-left">
          <h3 className="has-text-centered">{ comment_count }</h3>
          <p>comments</p>
        </div>
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
              {/* <Link to={`user/${user_id}`}><span><strong >{user_name}</strong></span></Link> */}
              <p>{getTimeElapsed(created_at)}</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}