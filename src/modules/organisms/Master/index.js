import React, { Component } from 'react'

import './styles.scss'

class Master extends Component {
  render() {
    return (
      <main className="org-05396e7b-bd4b-4913-a46a-310f301f2b77">
        {this.props.children}
      </main>
    )
  }
}

export default Master
