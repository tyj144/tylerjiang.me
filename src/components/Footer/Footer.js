import React from 'react'
import styles from './Footer.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faFileAlt } from '@fortawesome/free-solid-svg-icons'

const Footer = () => (
  <div>
    <div className={styles.contact}>
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
  </div>
)

export default Footer
