import React, { Component } from "react"
import { Context } from "./Provider"
import About from "../modules/organisms/About"

class AboutContainer extends Component {
  render() {
    return (
      <Context.Consumer>
        {data => {
          return <About />
        }}
      </Context.Consumer>
    )
  }
}

export default AboutContainer
