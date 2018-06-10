import React from 'react'

class ConsumingComponent extends React.Component {
  componentDidMount() {
    const { taxonomy, slug } = this.props.match.params
    this.props.context.fetchContent(this.props.match)
  }

  componentDidUpdate() {
    const { taxonomy, slug } = this.props.match.params
    this.props.context.fetchContent(this.props.match)
  }
}

export default ConsumingComponent
