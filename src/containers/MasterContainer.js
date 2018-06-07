import React from 'react'
import { Context, Provider } from './Provider'
import { withRouter } from 'react-router'
import Master from '../modules/organisms/Master'

class MasterContainer extends React.Component {
  constructor() {
    super()
    this.state = {
      routeChanged: false,
    }
  }
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.setState({ routeChanged: true })
      return
    } else if (this.state.routeChanged) {
      this.setState({ routeChanged: false })
    }
  }

  render() {
    return (
      <Context.Consumer>
        {(data, fetchData) => {
          console.log(this.state.routeChanged)
          return <Master>{this.props.children}</Master>
        }}
      </Context.Consumer>
    )
  }
}

export default withRouter(MasterContainer)
