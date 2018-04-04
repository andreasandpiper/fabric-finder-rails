import React, { Component } from 'react';
import Comment from './comment';


class CommentFeed extends Component {
  constructor(props){
    super(props)

    this.state = {
      comments: []
    }
  }

  componentWillReceiveProps(props){
    this.setState({comments: props.comments})
  }
  render(){
    const { comments } = this.state;

    const commentComponents = comments.map((item, index) => {
      return <Comment key={index} post={item}/>
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