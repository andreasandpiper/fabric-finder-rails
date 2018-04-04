import React, { Component } from 'react';
import Comment from './comment';
import axios from 'axios';


class CommentFeed extends Component {
  constructor(props){
    super(props)

    this.state = {
      comments: [],
      post_id: null

    }
  }

  componentWillReceiveProps(props){
    console.log(props)
    if(props.post_id){
      this.getComments(props.post_id)
    }
    this.setState({...this.state, post_id: props.post_id})
  }

  getComments(id = this.state.post_id){
    console.log('delete', id)
    axios.get(`/post/${id}/comments.json`).then(resp => {
      this.setState({...this.state, comments: resp.data});
    }).catch(err => {
      console.log(err)
    })
  }

  render(){

    const { comments } = this.state;

    const commentComponents = comments.map((item, index) => {
      return <Comment key={index} comment={item} delete={this.getComments.bind(this)} />
    })

    return (
      <div>
        <h4>Comments</h4>
        { commentComponents }
      </div>
    )
  }
}


export default CommentFeed; 