import React, { Component } from 'react'
// import Context from './Context'

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

const Context = React.createContext({
  data: {},
  fetchData: match => {
    console.log('data', data)
  },
})
// const TestContext = React.createContext({
//   data: {},
//   fetchData: () => {
//     console.log('data')
//   },
// })

class Provider extends Component {
  constructor() {
    super()
    this.getContent = match => {
      // console.log('get context', this.state)
      // if (this.state.loading) return
      // this.setState({ loading: true })
      // setTimeout(() => {

      // }, 200)
      if (match.params.taxonomy && match.params.slug) {
        const tag = this.state[match.params.taxonomy].find(e => {
          return e.slug === match.params.slug
        })
        fetchPosts(match.params.taxonomy, tag.id).then(response => {
          this.setState({
            posts: response,
            loading: false,
          })
        })
      } else if (match.params.postSlug) {
        console.log('postSlug', this.state.posts)
        const post = this.state.posts.find(e => {
          console.log(e, match.params.postSlug)
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
            posts: response,
            loading: false,
          })
        })
      }
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
          loading: true,
        })
      })
      .then(fetchPosts)
      .then(response => {
        this.setState({
          posts: response,
          loading: false,
        })
      })
  }

  render() {
    return !this.state.loading ? (
      <Context.Provider value={this.state} fetchData={this.getContent}>
        {this.props.children}
      </Context.Provider>
    ) : (
      <Loader />
    )
  }
}

export { Context, Provider }
