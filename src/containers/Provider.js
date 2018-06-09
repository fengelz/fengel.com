import React, { Component } from 'react'
import MasterContainer from './MasterContainer'

import {
  fetchRoot,
  fetchPages,
  fetchPosts,
  fetchCategories,
  fetchTags,
  fetchMenus,
  fetchPostById,
  fetchPostBySlug,
} from '../wpService.js'

import Loader from '../modules/atoms/Loader'

const Context = React.createContext()

class Provider extends Component {
  constructor() {
    super()
    this.getContent = match => {
      console.log(this.state)
      const content = this.state.cache.find(cacheItem => {
        return cacheItem.url === match.url
      })
      if (content !== undefined) {
        return
      }

      if (match.params.taxonomy && match.params.slug) {
        const tag = this.state[match.params.taxonomy].find(e => {
          return e.slug === match.params.slug
        })
        fetchPosts(match.params.taxonomy, tag.id).then(response => {
          console.log('Fetched posts', response)
          const cache = this.state.cache
          cache.push({
            url: `${match.url}`,
            content: response,
          })
          this.setState({ cache })
        })
      } else if (match.params.postSlug) {
        fetchPostBySlug(match.params.postSlug).then(response => {
          console.log('here we are', response)
          const cache = this.state.cache
          cache.push({
            url: `${match.url}`,
            content: response[0],
          })
          this.setState({ cache })
        })
      } else {
        fetchPosts().then(response => {
          const cache = this.state.cache
          cache.push({
            url: `${match.url}`,
            content: response,
          })
          this.setState({ cache })
        })
      }
    }

    this.state = {
      root: {},
      pages: [],
      menus: [],
      categories: [],
      tags: [],
      cache: [],
      loading: true,
      getContent: this.getContent,
    }
  }
  componentDidUpdate() {
    // this.setState({ loading: true })
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
  }

  render() {
    return this.state.loading ? (
      <Loader />
    ) : (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export { Context, Provider }
