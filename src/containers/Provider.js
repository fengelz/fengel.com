import React, { Component } from "react";
import { fetchRoot, fetchPages, fetchPosts, fetchMenus } from "../wpService.js";

const Context = React.createContext();

class Provider extends Component {
  constructor() {
    super();
    this.state = {
      root: {},
      pages: [],
      posts: [],
      loading: true
    };
  }

  componentDidMount() {
    fetchRoot()
      .then(response =>
        this.setState({
          root: response
        })
      )
      .then(fetchMenus)
      .then(response =>
        this.setState({
          menus: response
        })
      )
      .then(fetchPages)
      .then(response =>
        this.setState({
          pages: response
        })
      )
      .then(fetchPosts)
      .then(response =>
        this.setState({
          posts: response,
          loading: false
        })
      );
  }

  render() {
    return !this.state.loading ? (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    ) : (
      <div> Loading </div>
    );
  }
}

export { Context, Provider };
