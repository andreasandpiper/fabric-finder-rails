import React, { Component } from 'react';

export default function(WrappedComponent){
  return class extends Component{
    getTime(current, created, pluralize){
      let current_date = new Date(current);
      let created_date = new Date(created);
      let difference = (current_date - created_date); 
      if(difference / (60*1000*60*24*30) > 1){
        let months = Math.floor( difference / (60*1000*60*24*30));
        return `${months} ${pluralize(months, "month")} ago`;
      } else if (difference / (60*1000*60*24) > 1){
        let days = Math.floor( difference / (60*1000*60*24) );
        return `${days} ${pluralize(days, "day")} ago`;
      }else if (difference / (60*1000*60) > 1){
        let hours = Math.floor( difference / (60*1000*60) );
        return `${hours} ${pluralize(hours, "hour")} ago`;
      }else {
        let minutes = Math.floor( difference / (60*1000) );
        return `${minutes} ${pluralize(minutes, "minute")} ago`;
      }
    }
  
    pluralize(num, word){
      if(num === 1){
        return word
      }
      return word + 's'
    }

    render(){
        return <WrappedComponent {...this.props} getTime={this.getTime.bind(null,null,null,this.pluralize)}/>
    }
  }
}