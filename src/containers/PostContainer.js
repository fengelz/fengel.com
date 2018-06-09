import React, { Component } from 'react'
import { Context } from './Provider'
import { withRouter } from 'react-router'

import RoutedComponent from './RoutedComponent'
import Post from '../modules/molecules/Post'

class PostContainer extends RoutedComponent {
  render() {
    const content = null
    return (
      <Context.Consumer>
        {data => {
          const content = data.cache.find(content => {
            return content.url === this.props.match.url
          })
          if (!content) {
            data.getContent(this.props.match)
            return <div>Loading</div>
          } else {
            return <Post post={content.content} />
          }
        }}
      </Context.Consumer>
    )
  }
}

export default PostContainer
