import React, { Component } from 'react'
import { fetchRoot, fetchPages, fetchPosts } from '../wpService.js'

const Context = React.createContext()

class Provider extends Component {
  constructor() {
    super()
    this.state = { root: {}, pages: [], posts: [], loading: true }
  }

  componentDidMount() {
    fetchRoot().then(response => {
      this.setState({ root: response })
      console.dir(response)
      fetchPages().then(response => {
        this.setState({ pages: response })
        fetchPosts().then(response => {
          this.setState({ posts: response, loading: false })
        })
      })
    })
  }

  render() {
    return !this.state.loading ? (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    ) : (
      <div>Loading</div>
    )
  }
}

export { Context, Provider }
