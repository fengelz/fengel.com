import React, { PureComponent } from 'react'
import { withRouter } from 'react-router'

import { Context } from './Provider'
import { fetchPosts } from '../wpService.js'

import Home from '../modules/organisms/Home'

class HomeContainer extends PureComponent {
  constructor() {
    super()
    this.state = { getContent: true }
  }
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.setState({ getContent: true })
    } else {
      this.setState({ getContent: false })
    }
  }
  componentDidMount() {
    this.setState({ getContent: false })
  }
  render() {
    return (
      <Context.Consumer>
        {data => {
          if (this.state.getContent) {
            data.getContent(this.props.match)
          }
          return <Home posts={data.posts} />
        }}
      </Context.Consumer>
    )
  }
}

export default withRouter(HomeContainer)
