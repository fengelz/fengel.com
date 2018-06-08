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
      if (match.params.taxonomy && match.params.slug) {
        const tag = this.state[match.params.taxonomy].find(e => {
          return e.slug === match.params.slug
        })
        fetchPosts(match.params.taxonomy, tag.id).then(response => {
          this.setState({
            content: response,
            loading: false,
          })
        })
      } else if (match.params && match.params.postSlug) {
        const post = this.state.posts.find(e => {
          return e.slug === match.params.postSlug
        })
        fetchPost(post.id).then(response => {
          this.setState({
            content: [response],
            loading: false,
          })
        })
      } else {
        fetchPosts().then(response => {
          this.setState({
            content: response,
            loading: false,
          })
        })
      }
    }

    this.state = {
      root: {},
      pages: [],
      menus: [],
      categories: [],
      tags: [],
      content: null,
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
