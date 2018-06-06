import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Context } from './Provider'
import HomeContainer from './HomeContainer'
import AboutContainer from './AboutContainer'
import MasterContainer from './MasterContainer'
import AsideContainer from './AsideContainer'
import PostContainer from './PostContainer'

import '../styles/settings.scss'
import '../styles/index.scss'

class App extends Component {
  render() {
    return (
      <Context.Consumer>
        {data => {
          console.log(data)
          return (
            <Router>
              <MasterContainer>
                <AsideContainer />
                <section>
                  <Switch>
                    <Route exact path="/" component={HomeContainer} />
                    <Route exact path="/about/" component={AboutContainer} />
                    <Route exact path="/:postSlug" component={PostContainer} />
                    <Route path="/:taxonomy/:slug" component={HomeContainer} />
                    <Route component={HomeContainer} />
                  </Switch>
                </section>
              </MasterContainer>
            </Router>
          )
        }}
      </Context.Consumer>
    )
  }
}

export default App
