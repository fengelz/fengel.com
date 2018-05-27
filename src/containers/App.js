import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Context } from './Provider'
import HomeContainer from './HomeContainer'
import AboutContainer from './AboutContainer'

class App extends Component {
  render() {
    return (
      <Context.Consumer>
        {data => {
          return (
            <Router>
              <main>
                <section>
                    <Switch>
                      <Route exact path="/" component={HomeContainer} />
                      <Route exact path="/about/" component={AboutContainer} />
                      <Route component={HomeContainer} />
                    </Switch>
                </section>
              </main>
            </Router>
          )
        }}
      </Context.Consumer>
    )
  }
}

export default App
