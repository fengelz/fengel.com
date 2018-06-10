import React from 'react'
import { Context } from './Provider'

import ConsumingComponent from './ConsumingComponent'
import Home from '../modules/organisms/Home'
import Loader from '../modules/atoms/Loader'

const HomeContainer = props => (
  <Context.Consumer>
    {context => <HomeHandler {...props} context={context} />}
  </Context.Consumer>
)

class HomeHandler extends ConsumingComponent {
  constructor() {
    super()
  }

  render() {
    return (
      <Context.Consumer>
        {data => {
          const content = data.content(this.props.match.url)
          return content ? <Home posts={content.content} /> : <Loader />
        }}
      </Context.Consumer>
    )
  }
}

export default HomeContainer
