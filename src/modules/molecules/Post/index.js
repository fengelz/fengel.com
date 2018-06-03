import React, { PureComponent } from 'react'

import './styles.scss'

class Post extends PureComponent {
  render() {
    return (
      <article className="mol-28055d40-87fd-4b8c-925d-c061f7d075d2">
        {this.props.post.title.rendered}
      </article>
    )
  }
}

export default Post
