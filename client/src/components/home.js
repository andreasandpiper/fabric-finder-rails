import React, { Component } from 'react';
import Feed from './feed';
import axios from 'axios';

class Home extends Component {
  constructor(props){
    super(props);

    this.state = {
      posts: []
    }
  }

  componentDidMount(){
    axios.get('/posts').then(resp => {
      this.setState({posts: resp.data})
    }).catch(err => {
      console.log(err)
    })
  }

  render(){
    return (
      <div>
      <div className= "container">
        <Feed data={this.state.posts} />
      </div>
    </div>
    )
  }
}

export default Home; 