import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'

class Index extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')

    return (
      <div>
        <Helmet title={siteTitle} />
      </div>
    )
  }
}

export default Index


