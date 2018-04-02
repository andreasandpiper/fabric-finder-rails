import React, { Component } from 'react';
import Post from './post';

class Feed extends Component {
  render(){
    var posts = this.props.data.map((item, index) => {
      return <Post key={index} post={item}/>
    })

    return (
      <div className="container">
        { posts }
      </div>
    )
  }
}


export default Feed; 