import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome/index'
import caretup from  '@fortawesome/fontawesome-free-solid/faCaretUp';
import caretdown from  '@fortawesome/fontawesome-free-solid/faCaretDown';

export default (props) => {
  let deleteBtn = null; 
  const { content } = props.post;

  function getTimeElapsed(date){
    return date;
  }

  if(this.state.user_id == user_id){
    deleteBtn = <p className="button is-danger is-outlined" onClick={this.deletePost}>Delete</p>
  }

  console.log(props)
  return (
    <div className="box">
      <article className="media">
        <div className="media-left">
          <FontAwesomeIcon icon={caretup} />
          <span className="break"></span>
          <FontAwesomeIcon icon={caretdown} />

        </div>
        <div className="media-content">
          <div className="content">
            <p>
                {content}
            </p>
            <div className="has-text-right">
              { deleteBtn }
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}