import React, { Component } from 'react';
import axios from 'axios';

class Comment extends Component{
  constructor(props){
    super(props)

    this.state = {
      content: "",
      post_id: this.props.post_id
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(props){
    this.setState({...this.state, post_id: props.post_id})
  }

  handleSubmit(event){
    event.preventDefault();
    console.log(this.state);
  }

  handleChange(event){
    const { value } = event.target;

    this.setState({...this.state, content: value})
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit} className="column">
      <div className="field">
        <label className="label">Comment</label>
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

export default Comment; 