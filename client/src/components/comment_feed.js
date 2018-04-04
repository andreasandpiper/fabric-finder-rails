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
    console.log(props)
    if(props.post_id){
      this.getComments(props.post_id)
    }
    this.setState({...this.state, post_id: props.post_id})
  }

  // componentWillUpdate(nextProps, nextState){
  //   console.log('state', this.state, ' next state', nextState)
  //   if(this.state.comments.length !== nextState.comments.length && this.state.post_id){
  //     // this.getComments(nextState.post_id)
  //     // this.render();

  //   }
  // }

  getComments(id = this.state.post_id){
    axios.get(`/post/${id}/comments.json`).then(resp => {
      this.setState({...this.state, comments: resp.data});
    }).catch(err => {
      console.log(err)
    })
  }

  render(){
    console.log(this.state)
    let commentsForm = null; 
    const { comments } = this.state;

    const commentComponents = comments.map((item, index) => {
      return <Comment key={index} comment={item} delete={this.getComments} />
    })

    if(this.state.user_id){
      commentsForm = <CommentForm post_id={this.state.post_id } add={this.getComments}/>
    }

    return (
      <div>
        { commentsForm }
        <h4>Comments</h4>
        { commentComponents }
      </div>
    )
  }
}


export default CommentFeed; 