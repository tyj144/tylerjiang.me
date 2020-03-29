import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import styles from './Footer.module.scss'

const Footer = () => (
  <div className={styles.Footer}>
    <div className={styles.socialLinks}>
      <a href="mailto:tyler_jiang@brown.edu">
        <FontAwesomeIcon icon={faEnvelope} size="2x" />
      </a>
      <a href="https://www.linkedin.com/in/tyler-jiang/">
        <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
      </a>
      <a href="https://github.com/tyj144">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
    </div>
    <div className={styles.tagline}>
      Designed by <b>Tyler Jiang</b>
    </div>
  </div>
)

export default Footer
