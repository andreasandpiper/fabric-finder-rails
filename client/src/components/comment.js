import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome/index'
import caretup from  '@fortawesome/fontawesome-free-solid/faCaretUp';
import caretdown from  '@fortawesome/fontawesome-free-solid/faCaretDown';
import axios from 'axios';
import getTime from '../HOC/time_ago';

class Comment extends Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.setState({comment: this.props.comment.comment, votes_difference: this.props.comment.vote_count})
  }

  deleteComment(id){
    axios.delete(`/comments/${id}.json`).then(resp => {
      this.props.getNew();
    }).catch(err => {
      console.log(err)
    })
  }

  vote(type){
    axios.post(`/comments/${this.state.comment.id}/${type}.json`).then(resp => {
      this.props.getNew();
    }).catch(err => {
      console.log(err)
    })
  }

  render(){
    const { id, content, created_at, author_id } = this.props.comment.comment;
    let time_ago_in_words = this.props.getTime(this.props.time, created_at)
    let deleteBtn = null; 

    if(author_id == localStorage.getItem("user_id")){
      deleteBtn = <button className="button is-danger is-outlined" onClick={this.deleteComment.bind(this, id)}>Delete</button>
    }

    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <FontAwesomeIcon icon={caretup} className="vote" onClick={this.vote.bind(this, "upvote")} />
            <span className="break"><p>{ this.props.comment.vote_count || 0 }</p></span>
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

export default getTime(Comment); 
