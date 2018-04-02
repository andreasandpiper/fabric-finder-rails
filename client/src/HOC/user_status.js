import React, { Component } from 'react';

export default function(WrappedComponent){
  return class extends Component{
    user_signed_in(){
      let status = localStorage.getItem("logged_in");
      console.log(status)
      if(status === "false"){
          window.location.href = '/users/sign_in';
      }
    }
    render(){
        return <WrappedComponent {...this.props} is_logged_in={this.user_signed_in} />
    }
  }
}