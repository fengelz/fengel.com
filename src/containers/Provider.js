import React, { Component } from 'react'
import {
  fetchRoot,
  fetchPages,
  fetchPosts,
  fetchCategories,
  fetchMenus,
} from '../wpService.js'

import Loader from '../modules/atoms/Loader'

const Context = React.createContext()

class Provider extends Component {
  constructor() {
    super()
    this.state = {
      root: {},
      pages: [],
      posts: [],
      menus: [],
      categories: [],
      loading: true,
    }
  }

  componentDidMount() {
    fetchRoot()
      .then(response =>
        this.setState({
          root: response,
        })
      )
      .then(fetchMenus)
      .then(response => {
        this.setState({
          menus: response,
        })
      })
      .then(fetchCategories)
      .then(response => {
        this.setState({
          categories: response,
        })
      })
      .then(fetchPages)
      .then(response => {
        this.setState({
          pages: response,
        })
      })

      .then(fetchPosts)
      .then(response =>
        this.setState({
          posts: response,
          loading: false,
        })
      )
  }

  render() {
    return !this.state.loading ? (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    ) : (
      <Loader />
    )
  }
}

export { Context, Provider }
