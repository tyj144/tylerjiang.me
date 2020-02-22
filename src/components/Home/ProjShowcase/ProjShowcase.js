import React from 'react'
import styles from './ProjShowcase.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

const ProjShowcase = props => {
  const { attributes } = props
  const textColor = attributes.style.color ? attributes.style.color : 'white'
  const stackClass = attributes.style.color
    ? styles.stackRegular
    : styles.stackDark
  // TODO: use a class for colors instead
  const backgroundStyle = {
    background: `linear-gradient(${attributes.style.gradColorStart}, ${
      attributes.style.gradColorEnd
    })`,
    color: textColor,
  }
  return (
    <div className={styles.showcase} style={backgroundStyle}>
      {props.isFirst ? (
        <div>
          <h1 className={styles.startHead} style={{ color: textColor }}>
            Here are some cool projects I've worked on:
          </h1>
        </div>
      ) : (
        ''
      )}
      <div className={styles.showcase__top}>
        {/* Title + description: top left section */}
        <div className={styles.showcase__info}>
          {/* Title */}
          <div className={styles.showcase__heading}>
            <h2>{attributes.name}</h2>
            <span className={stackClass}>{attributes.stack.join(', ')}</span>
          </div>
          {/* Project description */}
          <div className={styles.showcase__text}>
            <div>{attributes.text}</div>
            <div className={styles.showcase__links}>
              <a style={{ color: textColor }} href={attributes.link}>
                <FontAwesomeIcon
                  icon={faExternalLinkAlt}
                  style={{ color: textColor, marginRight: '1em' }}
                />
                Link
              </a>
            </div>
          </div>
        </div>
        {/* Logo: top right section*/}
        <div className={styles.showcase__logo}>
          <img src={attributes.logo} />
        </div>
      </div>
      {/* Video: bottom section */}
      <div className={styles.showcase__demo}>
        {attributes.demoImg ? (
          <img src={attributes.demoImg} alt={attributes.name + ' demo'} />
        ) : (
          ''
        )}

        {attributes.demo ? (
          <video autoPlay muted>
            <source src={attributes.demo} />
            Your browser does not support the video tag.
          </video>
        ) : (
          ''
        )}
      </div>
    </div>
  )
}

export default ProjShowcase
