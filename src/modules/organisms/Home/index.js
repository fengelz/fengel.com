import React, { Component } from 'react'


class Home extends Component {
  render() {
    const pages = this.props.pages
    const posts = this.props.posts
    
    return (
      <div className="org-a9ca065c-a467-47bb-a252-2138bff1cb1d">
        <h1>Home</h1>
        <p>{posts.length}</p>
        <p>{pages.length}</p>
      </div>
    )
  }
}

export default Home
