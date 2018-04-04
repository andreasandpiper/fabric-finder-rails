import React, { Component } from 'react';
import axios from 'axios';

class CommentForm extends Component{
  constructor(props){
    super(props)

    this.state = {
      content: "",
      post_id: this.props.post_id
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(props){
    this.setState({...this.state, post_id: props.post_id})
  }

  componentDidMount(){
    console.log(this.props)
  }


  handleChange(event){
    const { value } = event.target;

    this.setState({...this.state, content: value})
  }

  handleSubmit(event){
    event.preventDefault();

    axios.post('/comments', this.state ).then(resp => {
      console.log(resp)

    }).catch(err => {
      console.log(err)
    })
    // this.props.submit(event, this.state);
  }

  render(){
    return (
      <form  onSubmit={this.handleSubmit} className="column">
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