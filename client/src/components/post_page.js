import React, { Component } from 'react';
import axios from 'axios';

class PostPage extends Component{
  constructor(props){
    super(props);

    this.state = {
      post: {}
    }
  }

  componentDidMount(){    
    axios.get(`/posts/${this.props.match.params.id}.json`).then(resp => {
      this.setState({post: resp.data})
      console.log(resp)
    }).catch(err => {
      console.log(err)
    })
  }

  render(){
    const { created_at, description, image, user_name } = this.state.post; 
    return (
      <div className="container">
        <div className="columns">
          <div className="column is-one-third">
            <img src={ image } alt="fabric image" />
          </div>
          <div className="column">
            <p>{ description }</p>
          </div>
        </div>
      </div>
    )
  }
}



export default PostPage; 

