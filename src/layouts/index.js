import React from 'react'
import Link from 'gatsby-link'
import Sidebar from '../components/Sidebar/Sidebar'
import Content from '../components/Content/Content'
import './index.scss';

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }
    return (
      <main>
        {/* <Sidebar></Sidebar> */}
        <Content>{children()}</Content>
      </main>
    )
  }
}

export default Template
