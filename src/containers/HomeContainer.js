import React from 'react'
import { Context, TestContext } from './Provider'
import { withRouter } from 'react-router'

import RoutedComponent from './RoutedComponent'
import Home from '../modules/organisms/Home'

class HomeContainer extends RoutedComponent {
  constructor() {
    super()
  }
  componentDidMount() {
    const renderedContent = (
      <Context.Consumer>
        {data => {
          const content = data.cache.find(content => {
            return content.url === this.props.match.url
          })
          if (content) {
            return <Home posts={content.content} />
          } else {
            data.getContent(this.props.match)
            return <div>Loading</div>
          }
        }}
      </Context.Consumer>
    )
    this.setState({ renderedContent })
  }
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      const renderedContent = (
        <Context.Consumer>
          {data => {
            const content = data.cache.find(content => {
              return content.url === this.props.match.url
            })
            if (content) {
              return <Home posts={content.content} />
            } else {
              data.getContent(this.props.match)
              return <div>Loading</div>
            }
          }}
        </Context.Consumer>
      )
      this.setState({ renderedContent })
    }
  }

  render() {
    return this.state.renderedContent || <div />
  }
}

export default withRouter(HomeContainer)
