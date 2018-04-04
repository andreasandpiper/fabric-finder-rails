import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import CommentForm from './comment_form';
import CommentFeed from './comment_feed';
import axios from 'axios';

class PostPage extends Component{
  constructor(props){
    super(props);

    this.state = {
      post: {},
      redirect: false,
      user_id: localStorage.getItem("user_id")
    }

    this.deletePost = this.deletePost.bind(this);
  }

  componentDidMount(){    
    axios.get(`/posts/${this.props.match.params.id}.json`).then(resp => {
      this.setState({...this.state, post: resp.data})
    }).catch(err => {
      console.log(err)
    })
  }

  deletePost(){
    axios.delete(`/posts/${this.state.post.id}.json`).then(resp => {
      this.props.history.push('/');
    }).catch(err => {
      console.log(err)
    })
  }

  render(){
    console.log(this.state)
    let deleteBtn = null; 
    let commentsForm = null; 

    const { created_at, description, image, user_name, id, user_id } = this.state.post; 
    const delete_route = "/posts/" + id; 

    if(this.state.user_id == user_id){
      deleteBtn = <p className="button is-danger is-outlined" onClick={this.deletePost}>Delete</p>
    }

    if(this.state.user_id){
      commentsForm = <CommentForm post_id={this.state.post.id } submit={ this.updateComments }/>
    }

    return (
      <div className="container">
        <div className="columns">
          <div className="column is-one-third">
            <img src={ image } alt="fabric image" />
          </div>
          <div className="column">
            <p>{ description }</p>
            <hr/>
            { commentsForm }
            <CommentFeed post_id={this.state.post.id }/>
          </div>
          <div className="has-text-right">
            { deleteBtn }
          </div>
        </div>
      </div>
    )
  }
}



export default PostPage; 

