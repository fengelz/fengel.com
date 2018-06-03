import React, { Component } from 'react'
import { Context } from './Provider'
import Post from '../modules/molecules/Post'

class PostContainer extends Component {
  render() {
    return (
      <Context.Consumer>
        {data => {
          console.log(this.props.match.params.slug, data.posts)
          return (
            <Post
              post={data.posts.find(post => {
                return post.slug === this.props.match.params.slug
              })}
            />
          )
        }}
      </Context.Consumer>
    )
  }
}

export default PostContainer
