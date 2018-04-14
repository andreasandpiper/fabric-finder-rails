import React, { Component } from 'react';
import Feed from './post_feed';
import axios from 'axios';

class Home extends Component {
  constructor(props){
    super(props);

    this.state = {
      posts: [],
      pages: 1,
      current_page: 1
    }
  }

  componentDidMount(){
    axios.get(`/posts?page=${this.state.current_page}`).then(resp => {
      console.log(resp)
      
      this.setState({posts: resp.data, pages: Math.ceil(resp.headers.total/resp.headers['per-page'])})
    }).catch(err => {
      console.log(err)
    })
  }

  render(){
    let signUpBtn = null; 
    let pagination = [];
    var page = 1; 
    while(page <= this.state.pages){
      let link = `/posts?page=${page}`;
      pagination.push( 
        <li key={page}>
          <p className="pagination-link">{ page }</p>
        </li>
      )
      page++; 
    }


    if(!localStorage.getItem("user_id")){
      signUpBtn = <a href="/users/sign_up" className="button is-white">Sign Up</a> 
    }
    return (
      <div>
        <section className="hero is-primary">
            <div className="hero-body">
              <div className="container has-text-centered">
                <h1 className="title">
                  Find My Fabric
                </h1>
                <h2 className="subtitle">
                  { signUpBtn }
                </h2>
              </div>
            </div>
          </section>
        <div className= "container">
          <nav className="pagination" role="navigation" aria-label="pagination">
            <ul className="pagination-list">
              { pagination }
            </ul>
          </nav>
          <Feed data={this.state.posts}/>
        </div>
      </div>
    )
  }
}

export default Home; 