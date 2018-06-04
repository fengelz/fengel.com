import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import './styles.scss'

class Aside extends PureComponent {
  render() {
    return (
      <aside className="mol-2a2c1466-55b6-4b02-9bd9-3261469c7c29">
        <nav>
          <ul>
            <li>
              <Link to={`/`}>Home</Link>
            </li>
            <li>
              <ul>
                <li>
                  <h3>Categories:</h3>
                </li>
                {this.props.categories.map(cat => {
                  return (
                    <li key={cat.id}>
                      <Link to={`/categories/${cat.slug}`}>{cat.name}</Link>
                    </li>
                  )
                })}
              </ul>
            </li>
            <li>
              <ul>
                <li>
                  <h3>Tags:</h3>
                </li>
                {this.props.tags.map(cat => {
                  return (
                    <li key={cat.id}>
                      <Link to={`/tags/${cat.slug}`}>{cat.name}</Link>
                    </li>
                  )
                })}
              </ul>
            </li>
          </ul>
        </nav>
      </aside>
    )
  }
}

export default Aside
