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
      user_id: localStorage.getItem("user_id"),
      comments: []
    }

    this.deletePost = this.deletePost.bind(this);
  }

  componentDidMount(){    
    axios.get(`/posts/${this.props.match.params.id}.json`).then(resp => {
      console.log(resp)
      const post = {
        created_at: resp.data.created_at,
        description: resp.data.description,
        id: resp.data.id,
        image: resp.data.image,
        user_id: resp.data.user_id
      }
      this.setState({...this.state, post: post, comments: resp.data.comments})
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
    let deleteBtn = null; 
    if(!this.state.user_id){
      return <Redirect to='/'/>
    }
    const { created_at, description, image, user_name, id, user_id } = this.state.post; 
    const delete_route = "/posts/" + id; 

    if(this.state.user_id == user_id){
      deleteBtn = <p className="button is-danger is-outlined" onClick={this.deletePost}>Delete</p>
    }

    console.log(this.state)
    return (
      <div className="container">
        <div className="columns">
          <div className="column is-one-third">
            <img src={ image } alt="fabric image" />
          </div>
          <div className="column">
            <p>{ description }</p>
            <hr/>
            <CommentForm submit={ this.updateComments }/>
            <CommentFeed comments={ this.state.comments } />
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

