import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import CommentFeed from './comment_feed';
import axios from 'axios';

class PostPage extends Component{
  constructor(props){
    super(props);

    this.state = {
      post: {},
      user: {},
      redirect: false,
      user_id: localStorage.getItem("user_id")
    }

    this.deletePost = this.deletePost.bind(this);
  }

  componentDidMount(){    
    axios.get(`/posts/${this.props.match.params.id}.json`).then(resp => {
      this.setState({...this.state, post: resp.data, user: resp.data.user})
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

    const { created_at, description, image, user_name, id, user_id } = this.state.post; 
    const { gravatar, username } = this.state.user; 
    const delete_route = "/posts/" + id; 

    if(this.state.user_id == user_id){
      deleteBtn = <button className="button is-danger is-outlined" onClick={this.deletePost}>Delete</button>
    }

    return (
      <div className="container">
        <div className="columns">
          <div className="column is-one-third">
            <img src={ image } alt="fabric image" />
          </div>
          <div className="column">
            <div className="columns">
              <div className="column is-two-thirds">
                <p>{ description }</p>
              </div>
              <div className="column has-text-right is-one-third">
                 <img src={gravatar} alt={username}/>
                 <p>{ username }</p>
                  { deleteBtn }
              </div>
            </div>
            <hr/>
            <CommentFeed post_id={this.state.post.id }/>
          </div>
        </div>
      </div>
    )
  }
}



export default PostPage; 

