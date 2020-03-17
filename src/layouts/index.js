import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faFileAlt } from '@fortawesome/free-solid-svg-icons'
import Content from '../components/Content/Content'
import './index.scss'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }
    return (
      <div>
        <main>
          <Content>{children()}</Content>
        </main>
        {/* <footer>
          <div>
            <a href="mailto:tyler_jiang@brown.edu">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
            <a href="https://github.com/tyj144">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://www.linkedin.com/in/tyler-jiang-22a22a150/">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </div>
        </footer> */}
      </div>
    )
  }
}

export default Template
