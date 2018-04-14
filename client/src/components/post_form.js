import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import logged_in from '../HOC/user_status';


class PostForm extends Component{
  constructor(props){
    super(props);
    this.state = { id: null, description: '', file: '', filename: '', postsubmitted: false, redirect: false}

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(){
    this.props.is_logged_in();
  }


  handleSubmit(event){
    event.preventDefault();
    if(this.state.postsubmitted || this.state.description == '' || this.state.file ==''){
      return; 
    }
    let fileData = new FormData();

    fileData.append('imagefile', this.state.file); 
    fileData.append('description', this.state.description)

    for(var pair of fileData.entries()) {
      console.log(pair[0]+ ', '+ pair[1]); 
   }


    axios({method: 'post', url: '/posts.json', data: fileData, headers: {'Content-Type': 'multipart/form-data'}}).then(resp => {
      this.setState({...this.state, id: resp.data.id, redirect: true, postsubmitted: false})
    }).catch( err => {
      console.log(err)
      this.setState({...this.state, postsubmitted: false})
    })
    this.setState({...this.state, postsubmitted: true})
  }

  handleChange(event){
    const { name, value } = event.target;

    let newState = {
      description: this.state.description,
      file: this.state.file
    }
    newState[name] = value
    this.setState(newState);
  }

  fileChange(event){
    const { value } = event.target; 
    var ifImage = (/\.(gif|jpg|jpeg|png)$/i).test(value)
    console.log(ifImage)
    if(!ifImage){
      //include client text about image type
      return;
    }

    this.setState({...this.state, file: event.target.files[0], filename: event.target.value})
  }

  render(){
    if(this.state.redirect){
      let path = "/post/" + this.state.id;
      return <Redirect to={path}/>
    }
    return (
      <form onSubmit={this.handleSubmit} encType="multipart/form-data" className="column is-one-third is-offset-one-third">
        <div className="field">
          <label className="label">Upload image</label>
          <div className="control">
            <input className="input" type="file" name="file" value={this.state.filename} onChange={this.fileChange.bind(this)} placeholder="Image Upload"/>
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

export default logged_in(PostForm);