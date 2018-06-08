import React from 'react'
import { Context, Provider } from './Provider'
import { withRouter } from 'react-router'

class RoutedComponent extends React.Component {
  constructor() {
    super()
    this.state = {
      routeChanged: false,
    }
  }

  componentDidUpdate(prevProps) {
    console.log('update', this.props)
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.setState({ routeChanged: true })
      return
    } else if (this.state.routeChanged) {
      this.setState({ routeChanged: false })
    }
  }
}

export default RoutedComponent
