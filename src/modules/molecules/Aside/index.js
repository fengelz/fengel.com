import React, { PureComponent } from 'react'

import './styles.scss'

class Aside extends PureComponent {
  render() {
    return (
      <aside className="mol-2a2c1466-55b6-4b02-9bd9-3261469c7c29">
        <nav>
          <ul>
            {this.props.categories.map(cat => {
              console.log(cat)
              return (
                <li key={cat.id}>
                  <a href={`/${cat.taxonomy}/${cat.slug}`}>{cat.name}</a>
                </li>
              )
            })}
          </ul>
        </nav>
      </aside>
    )
  }
}

export default Aside
