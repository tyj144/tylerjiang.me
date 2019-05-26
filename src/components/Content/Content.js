import React from 'react'
import styles from './Content.module.scss'
import Link from 'gatsby-link'

const Content = props => (
  <div className={styles.ContentContainer}>
    <Link
      to={'/'}
      style={{
        color: '#ddd',
        textTransform: 'uppercase',
        letterSpacing: '4px',
        fontSize: '10px',
      }}
    >
      Tyler Jiang
    </Link>
    <div className={styles.Content}>{props.children}</div>
  </div>
)

export default Content
