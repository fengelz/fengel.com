import React from 'react'
import { Context, TestContext } from './Provider'
import { withRouter } from 'react-router'

import RoutedComponent from './RoutedComponent'
import Home from '../modules/organisms/Home'

class HomeContainer extends RoutedComponent {
  render() {
    return (
      <Context.Consumer>
        {data => {
          if (this.state.routeChanged) {
            // console.log('this.state.routeChanged', this.state.routeChanged)
            data.getContent(this.props.match)
          } else if (!data.content) {
            // console.log('data.content', data.content)

            data.getContent(this.props.match)
          }
          if (data.content && !data.loading) {
            return <Home posts={data.content} />
          } else return <div>Loading</div>
        }}
      </Context.Consumer>
    )
  }
}

export default withRouter(HomeContainer)
