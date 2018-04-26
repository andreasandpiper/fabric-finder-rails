import React, { Component } from 'react';
import Feed from './post_feed';
import axios from 'axios';

class Fabric extends Component {
  constructor(props){
    super(props);

    this.state = {
      posts: [],
      totalPages: 1,
      current_page: 1
    }
  }

  componentDidMount(){
    this.getNextPosts(this.state.current_page);
  }

  getNextPosts(id){
    if(id < 1 || id > this.state.totalPages){
      return;
    }
    axios.get(`/posts?page=${id}`).then(resp => {
      console.log(resp)
      
      this.setState({posts: resp.data, current_page: id, totalPages: Math.ceil(resp.headers.total/resp.headers['per-page'])})
    }).catch(err => {
      console.log(err)
    })
  }

  pagination(){
    var index = 1; 
    const { totalPages, current_page } = this.state; 
    let pagination = [];
    let currentpage = current_page; 
    let pagesize = totalPages < 10 ? totalPages : 10;
    let startPage = null; 
    let endPage = null; 

    if (totalPages <= pagesize) {
      startPage = 1;
      endPage = totalPages;
    } else {
        if (current_page <= 6) {
            startPage = 1;
            endPage = 10;
        } else if (current_page + 4 >= totalPages) {
            startPage = totalPages - 9;
            endPage = totalPages;
        } else {
            startPage = current_page - 5;
            endPage = current_page + 4;
        }
    }

    let firstpage = this.createPageLink(index++, 1, "First");
    let lastPage = this.createPageLink(index++, totalPages, "Last");
    let previousPage = this.createPageLink(index++,  current_page - 1, 'Previous' );
    let nextPage = this.createPageLink(index++,  current_page + 1, 'Next' ); 

    pagination.push(firstpage, previousPage);

    while(startPage <= endPage){
      let page = this.createPageLink(index++, startPage, startPage);
      startPage++; 
      pagination.push(page);
    }

    pagination.push(nextPage, lastPage); 

    return pagination;
  }

  createPageLink(index, page, text){
    var classlist = "pagination-link";
    if(page == this.state.current_page && !isNaN(text)){
      classlist += " is-current";
    }
    return (
      <li key={index} onClick={ this.getNextPosts.bind(this, page)}>
        <p className={ classlist }>{ text }</p>
      </li>
    )
  }

  render(){
    let signUpBtn = null; 
    const pagination = this.pagination();

    if(!localStorage.getItem("user_id")){
      signUpBtn = <a href="/users/sign_up" className="button is-white">Sign Up</a> 
    }
    return (
      <div>
        <div className= "container">
          <nav className="pagination is-centered" role="navigation" aria-label="pagination">
            <ul className="pagination-list">
              { pagination }
            </ul>
          </nav>
          <Feed data={this.state.posts}/>
          <nav className="pagination is-centered" role="navigation" aria-label="pagination">
            <ul className="pagination-list">
              { pagination }
            </ul>
          </nav>
        </div>
      </div>
    )
  }
}

export default Fabric; 