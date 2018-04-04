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
      votes_difference: 0
    }

  }

  componentDidMount(){
    this.calculateVotes(this.state.comment.votes);
  }

  calculateVotes(votes){
    let upvoteCount = votes.reduce( (total, vote) => {
      if(vote.vote_type){
        return total+= 1;
      } else {
        return total-= 1;
      }
    }, 0);
    this.setState({...this.state, votes_difference: upvoteCount})
  }

  deleteComment(){
    axios.delete(`/comments/${this.state.comment.id}.json`).then(resp => {
      this.props.delete();
    }).catch(err => {
      console.log(err)
    })
  }

  vote(type){
    axios.post(`/comments/${this.state.comment.id}/${type}`).then(resp => {
      console.log(resp)
      this.calculateVotes(resp.data.votes)
    }).catch(err => {
      console.log(err)
    })
  }



  render(){

    let deleteBtn = null; 
    const { content, created_at } = this.state.comment;

    if(this.state.comment.author_id == this.state.user_id){
      deleteBtn = <p className="button is-danger is-outlined" onClick={this.deleteComment.bind(this)}>Delete</p>
    }

    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <FontAwesomeIcon icon={caretup} className="vote" onClick={this.vote.bind(this, "upvote")} />
            <span className="break"><p>{ this.state.votes_difference }</p></span>
            <FontAwesomeIcon icon={caretdown} className="vote" onClick={this.vote.bind(this, "downvote")}/>

          </div>
          <div className="media-content">
            <div className="content">
              <p>
                  {content}
              </p>
              <div className="has-text-right">
                <p>{ created_at }</p>
                { deleteBtn }
              </div>
            </div>
          </div>
        </article>
      </div>
    )
  }
}

export default Comment; 
