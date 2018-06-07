import React, { PureComponent } from 'react'
import { Context, TestContext } from './Provider'

import { fetchPosts } from '../wpService.js'

import Home from '../modules/organisms/Home'

class HomeContainer extends PureComponent {
  render() {
    return (
      <Context.Consumer>
        {({ data, fetchData }) => (
          <button onClick={fetchData}>Toggle Theme</button>
        )}
      </Context.Consumer>
      // <Context.Consumer>
      //   {data => {
      //     // if (this.state.getContent) {
      //     // data.getContent(this.props.match)
      //     // this.setState({ getContent: false })
      //     // }
      //     return <Home posts={data.posts} />
      //   }}
      // </Context.Consumer>
    )
  }
}

export default HomeContainer
