import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

class PostPage extends Component{
  constructor(props){
    super(props);

    this.state = {
      post: {},
      redirect: false
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
    axios.delete(`/posts/${this.state.post.id}`).then(resp => {
      this.setState({...this.state, redirect: true})
    }).catch(err => {
      console.log(err)
    })
  }

  render(){
    if(this.state.redirect){
      return <Redirect to='/'/>
    }
    const { created_at, description, image, user_name, id } = this.state.post; 
    const delete_route = "/posts/" + id; 
    return (
      <div className="container">
        <div className="columns">
          <div className="column is-one-third">
            <img src={ image } alt="fabric image" />
          </div>
          <div className="column">
            <p>{ description }</p>
          </div>
          <div className="has-text-right">
            <p className="button is-danger is-outlined" onClick={this.deletePost}>Delete</p>
          </div>
        </div>
      </div>
    )
  }
}



export default PostPage; 

