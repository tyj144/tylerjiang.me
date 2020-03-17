import React from 'react'
import styles from './BioSection.module.scss'

const BioSection = props => {
  return (
    <div className={styles.BioSection}>
      <div>
        <h2>{props.heading}</h2>
        <div>{props.children}</div>
      </div>
      <div>
        <img src={props.img} alt="" />
      </div>
    </div>
  )
}

export default BioSection
