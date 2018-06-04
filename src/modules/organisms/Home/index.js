import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'

import Html from '../../atoms/Html'

import './styles.scss'

class Home extends Component {
  render() {
    const { pages, posts, menus } = this.props
    return (
      <div className="org-a9ca065c-a467-47bb-a252-2138bff1cb1d">
        {posts.map(post => {
          moment.locale('DA')
          return (
            <div className="post" key={post.id}>
              <h2>
                <Link to={`${post.type}/${post.slug}`}>
                  {post.title.rendered}
                </Link>
              </h2>

              <Html content={post.excerpt.rendered} />
              <time>{moment(post.date).format('Do MMM YYYY')}</time>
            </div>
          )
        })}
      </div>
    )
  }
}

export default Home
