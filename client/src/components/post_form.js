import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class PostForm extends Component{
  constructor(props){
    super(props);
    this.state = { id: null, image: '', description: '', redirect: false}

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }


  handleSubmit(event){
    event.preventDefault();
    let dataObject = {};
    dataObject.data = JSON.stringify({image: this.state.image, description: this.state.description})
    axios({method: 'post', url: '/posts.json', data: dataObject}).then(resp => {
      this.setState({...this.state, id: resp.data.id, redirect: true})
    }).catch( err => {
      console.log(err)
    })
  }

  handleChange(event){
    const { name, value } = event.target;
    
    let newState = {
      image: this.state.image,
      description: this.state.description
    }

    newState[name] = value
    this.setState(newState);
  }

  render(){
    if(this.state.redirect){
      let path = "/post/" + this.state.id;
      return <Redirect to={path}/>
    }
    return (
      <form onSubmit={this.handleSubmit} className="column is-one-third is-offset-one-third">
        <div className="field">
          <label className="label">Fabric Image</label>
          <div className="control">
            <input className="input" type="text" name="image" value={this.state.image} onChange={this.handleChange} placeholder="Image URL"/>
          </div>
        </div>

        <div className="field">
          <label className="label">Description</label>
          <div className="control">
            <input className="textarea" type="text" name="description" value={this.state.description} onChange={this.handleChange} placeholder="Describe your fabric here"/>
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

export default PostForm;