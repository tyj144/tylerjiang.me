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

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            // marginBottom: '1.5em',
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={'/'}
          >
            Tyler's Blog
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: 'Montserrat, sans-serif',
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={'/'}
          >
            Tyler's Blog
          </Link>
        </h3>
      )
    }
    return (
      <main>
        {/* {header} */}
        <Sidebar></Sidebar>
        <Content>{children()}</Content>
      </main>
    )
  }
}

export default Template
