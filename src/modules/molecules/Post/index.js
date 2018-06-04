import React, { PureComponent } from 'react'
import moment from 'moment'

import Html from '../../atoms/Html'

import './styles.scss'

class Post extends PureComponent {
  render() {
    const {post} = this.props
    return (
      <article className="mol-28055d40-87fd-4b8c-925d-c061f7d075d2">
      <h1>{post.title.rendered}</h1>
      <time>{moment(post.date).format('Do MMM YYYY')}</time>
      <Html content={post.content.rendered} />
      </article>
    )
  }
}

export default Post
