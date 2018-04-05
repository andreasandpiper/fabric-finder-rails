import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome/index'
import caretup from  '@fortawesome/fontawesome-free-solid/faCaretUp';
import caretdown from  '@fortawesome/fontawesome-free-solid/faCaretDown';
import axios from 'axios';

class Comment extends Component{
  constructor(props){
    super(props)

    this.state = {
      comment: props.comment,
      user_id: localStorage.getItem("user_id"),
      votes_difference: props.comment.vote_count
    }
  }

  deleteComment(id){
    axios.delete(`/comments/${id}.json`).then(resp => {
      this.props.delete();
    }).catch(err => {
      console.log(err)
    })
  }

  vote(type){
    axios.post(`/comments/${this.state.comment.id}/${type}.json`).then(resp => {
      this.setState({...this.state, votes_difference: resp.data})
      console.log(resp)
    }).catch(err => {
      console.log(err)
    })
  }

  getTime(current, created){
    let current_date = new Date(current);
    let created_date = new Date(created);
    let difference = (current_date - created_date); 

    if(difference / (60*1000*60*24*30) > 1){
      let months = Math.floor( difference / (60*1000*60*24*30));
      return `${months} ${this.pluralize(months, "month")} ago`;
    } else if (difference / (60*1000*60*24) > 1){
      let days = Math.floor( difference / (60*1000*60*24) );
      return `${days} ${this.pluralize(days, "day")} ago`;
    }else if (difference / (60*1000*60) > 1){
      let hours = Math.floor( difference / (60*1000*60) );
      return `${hours} ${this.pluralize(hours, "hour")} ago`;
    }else {
      let minutes = Math.floor( difference / (60*1000) );
      return `${minutes} ${this.pluralize(minutes, "minute")} ago`;
    }
  }

  pluralize(num, word){
    if(num === 1){
      return word
    }
    return word + 's'
  }



  render(){
    const { id, content, created_at } = this.props.comment;
    let time_ago_in_words = this.getTime(this.props.time, created_at);
    let deleteBtn = null; 

    if(this.props.comment.author_id == localStorage.getItem("user_id")){
      deleteBtn = <button className="button is-danger is-outlined" onClick={this.deleteComment.bind(this, id)}>Delete</button>
    }

    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <FontAwesomeIcon icon={caretup} className="vote" onClick={this.vote.bind(this, "upvote")} />
            <span className="break"><p>{ this.state.votes_difference || 0 }</p></span>
            <FontAwesomeIcon icon={caretdown} className="vote" onClick={this.vote.bind(this, "downvote")}/>

          </div>
          <div className="media-content">
            <div className="content">
              <p>
                  {content}
              </p>
            </div>
          </div>
          <div className="media-right">
                <div className='has-text-right'>{ deleteBtn }</div>
                <p>{ time_ago_in_words }</p>
          </div>
        </article>
      </div>
    )
  }
}

export default Comment; 
