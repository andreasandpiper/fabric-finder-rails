import React from 'react';
import { Link } from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome/index'
import caretup from  '@fortawesome/fontawesome-free-solid/faCaretUp';
import caretdown from  '@fortawesome/fontawesome-free-solid/faCaretDown';

export default (props) => {
  const { description, image, created_at, id, user_id } = props.post;
  let deleteBtn = null; 

  function getTime(current, created){
    let current_date = new Date(current);
    let created_date = new Date(created);
    let difference = (current_date - created_date); 
    if(difference / (60*1000*60*24*30) > 1){
      let months = Math.floor( difference / (60*1000*60*24*30));
      return `${months} ${pluralize(months, "month")} ago`;
    } else if (difference / (60*1000*60*24) > 1){
      let days = Math.floor( difference / (60*1000*60*24) );
      return `${days} ${pluralize(days, "day")} ago`;
    }else if (difference / (60*1000*60) > 1){
      let hours = Math.floor( difference / (60*1000*60) );
      return `${hours} ${pluralize(hours, "hour")} ago`;
    }else {
      let minutes = Math.floor( difference / (60*1000) );
      return `${minutes} ${pluralize(minutes, "minute")} ago`;
    }
    
  }

  function pluralize(num, word){
    if(num === 1){
      return word
    }
    return word + 's'
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
            <div className="has-text-right">
              <p>posted {getTime(props.time, created_at)}</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}