import React, { Component } from 'react';
import Comment from './comment';
import CommentForm from './comment_form';
import axios from 'axios';

class CommentFeed extends Component {
  constructor(props){
    super(props)

    this.state = {
      comments: [],
      post_id: null,
      user_id: localStorage.getItem("user_id")
    }

    this.getComments = this.getComments.bind(this);
  }

  componentWillReceiveProps(props){
    if(props.post_id){
      this.getComments(props.post_id)
    }
    this.setState({...this.state, post_id: props.post_id})
  }

  getComments(id = this.state.post_id){
    axios.get(`/post/${id}/comments.json`).then(resp => {
      this.setState({...this.state, comments: resp.data});
    }).catch(err => {
      console.log(err)
    })
  }

  render(){
    let commentsForm = null; 
    const { comments } = this.state;

    const commentComponents = comments.map((item, index) => {
      console.log(item)
      return <Comment key={index} comment={item} delete={this.getComments.bind(this)} />
    })

    if(this.state.user_id){
      commentsForm = <CommentForm post_id={this.state.post_id } add={this.getComments.bind(this)}/>
    }

    return (
      <div>
        { commentsForm }
        <h4 className="has-text-centered has-text-weight-bold is-size-4">Comments</h4>
        { commentComponents }
      </div>
    )
  }
}

export default CommentFeed; 