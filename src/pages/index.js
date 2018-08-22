import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Posts from '../components/Blog/Posts/Posts'

import Bio from '../components/Bio'

class Index extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <div>
        <Helmet title={siteTitle} />
        {/* <h1>Posts</h1>
        <Posts posts={posts} /> */}
      </div>
    )
  }
}

export default Index


