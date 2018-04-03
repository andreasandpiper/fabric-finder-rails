import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Comment from './comment';
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

  comp

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

    return (
      <div className="container">
        <div className="columns">
          <div className="column is-one-third">
            <img src={ image } alt="fabric image" />
          </div>
          <div className="column">
            <p>{ description }</p>
            <Comment post_id={this.state.post.id}/>

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

