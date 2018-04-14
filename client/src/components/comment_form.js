import React, { Component } from 'react';
import axios from 'axios';

class CommentForm extends Component{
  constructor(props){
    super(props)

    this.state = {
      content: "",
      post_id: this.props.post_id,
      commentSubmitted: false
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(props){
    this.setState({...this.state, post_id: props.post_id})
  }

  handleChange(event){
    const { value } = event.target;

    this.setState({...this.state, content: value})
  }

  handleSubmit(event){
    event.preventDefault();

    if(this.state.commentSubmitted){
      return
    }

    const data = {
      data: this.state 
    }
    
    axios.post('/comments', data ).then(resp => {
      this.props.add();
      this.setState({...this.state, content: '', commentSubmitted: false})
    }).catch(err => {
      console.log(err)
      this.setState({...this.state, commentSubmitted: false})
    })
    this.setState({...this.state, commentSubmitted: true})
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit} className="column">
      <div className="field">
        <div className="control">
          <input className="input" type="text" name="content" value={this.state.content} onChange={this.handleChange} placeholder="Write what you know about this fabric!"/>
        </div>
      </div>

      <div className="field is-grouped">
        <div className="control">
          <button className="button is-link">Submit</button>
        </div>
      </div>
    </form>
    )
  }
}

export default CommentForm; 