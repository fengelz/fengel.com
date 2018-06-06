import React, { Component } from 'react'
import { Context } from './Provider'
import Post from '../modules/molecules/Post'

class PostContainer extends Component {
  render() {
    return (
      <Context.Consumer>
        {data => {
          data.getContent(this.props.match)
          return <Post post={data.pcontent} />
        }}
      </Context.Consumer>
    )
  }
}

export default PostContainer
