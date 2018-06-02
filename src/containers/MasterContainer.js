import React, { Component } from 'react'
import { Context } from './Provider'
import Master from '../modules/organisms/Master'

class MasterContainer extends Component {
  render() {
    return (
      <Context.Consumer>
        {data => {
          return <Master>{this.props.children}</Master>
        }}
      </Context.Consumer>
    )
  }
}

export default MasterContainer
