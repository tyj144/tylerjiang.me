import React, { Component } from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Posts from './Posts/Posts'

class Blog extends Component {
  render() {
    // const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <div>
        <Helmet
            title="Blog"
            meta={[{"name": "description", "content": "A place where I write about things that matter to me."}]}
        />
        <h1>Blog</h1>
        <Posts posts={posts} />
      </div>
    )
  }
}

export default Blog

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
          }
        }
      }
    }
  }
`
