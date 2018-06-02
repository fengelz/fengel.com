import React, { Component } from 'react'
import { Context } from './Provider'
import Home from '../modules/organisms/Home'

class HomeContainer extends Component {
  render() {
    return (
      <Context.Consumer>
        {data => {
          return (
            <Home pages={data.pages} posts={data.posts} menus={data.menus} />
          )
        }}
      </Context.Consumer>
    )
  }
}

export default HomeContainer
