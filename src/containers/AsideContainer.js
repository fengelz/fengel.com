import React, { Component } from 'react'
import { Context } from './Provider'
import Aside from '../modules/molecules/Aside'

class AsideContainer extends Component {
  render() {
    return (
      <Context.Consumer>
        {data => {
          return (
            <Aside
              categories={
                data.categories
              }
              tags={data.tags}
              menus={data.menus}
            />
          )
        }}
      </Context.Consumer>
    )
  }
}

export default AsideContainer
