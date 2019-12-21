import React from 'react'
import styles from './Content.module.scss'
import Link from 'gatsby-link'

const Content = props => (
  <div className={styles.ContentContainer}>
    <Link to={'/'} className={styles.brandLink}>
      Tyler Jiang
    </Link>
    <div className={styles.Content}>{props.children}</div>
  </div>
)

export default Content
