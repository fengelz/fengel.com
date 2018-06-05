import React, { Component } from 'react'
import {
  fetchRoot,
  fetchPages,
  fetchPosts,
  fetchCategories,
  fetchTags,
  fetchMenus,
} from '../wpService.js'

import Loader from '../modules/atoms/Loader'

const Context = React.createContext({
  data: {},
  getContent: () => {},
})

class Provider extends Component {
  constructor() {
    super()
    this.getContent = match => {
      console.log('match', match)
      fetchPosts().then(response => {
        this.setState({
          posts: response,
          loading: false,
        })
      })
    }

    this.state = {
      root: {},
      pages: [],
      posts: [],
      menus: [],
      categories: [],
      tags: [],
      content: [],
      loading: true,
      getContent: this.getContent,
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
      .then(fetchTags)
      .then(response => {
        this.setState({
          tags: response,
        })
      })
      .then(fetchPages)
      .then(response => {
        this.setState({
          pages: response,
          loading: false,
        })
      })
    //   .then(fetchPosts)
    //   .then(response =>
    //     this.setState({
    //       posts: response,
    //       loading: false,
    //     })
    //   )
  }

  //   getContent() {
  //     this.setState({ loading: true })
  //     fetchPosts().then(response =>
  //       this.setState({
  //         content: response,
  //         loading: false,
  //       })
  //     )
  //   }

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
