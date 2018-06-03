import React, { Component } from 'react'

import Html from '../../atoms/Html'

class Home extends Component {
  render() {
    const { pages, posts, menus } = this.props
    return (
      <div className="org-a9ca065c-a467-47bb-a252-2138bff1cb1d">
        {posts.map(post => {
          console.log(post)
          return (
            <div key={post.id}>
              <h3>
                <a href={`${post.type}/${post.slug}`}>{post.title.rendered}</a>
              </h3>
              <Html content={post.excerpt.rendered} />
            </div>
          )
        })}
      </div>
    )
  }
}

export default Home
