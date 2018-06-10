import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomeContainer from './HomeContainer'
import MasterContainer from './MasterContainer'
import AsideContainer from './AsideContainer'
import PostContainer from './PostContainer'

import '../styles/index.scss'

class App extends Component {
  render() {
    return (
      <Router>
        <MasterContainer>
          <AsideContainer />
          <section>
            <Switch>
              <Route exact path="/" component={HomeContainer} />
              <Route exact path="/:postSlug" component={PostContainer} />
              <Route path="/:taxonomy/:slug" component={HomeContainer} />
              <Route component={HomeContainer} />
            </Switch>
          </section>
        </MasterContainer>
      </Router>
    )
  }
}

export default App
