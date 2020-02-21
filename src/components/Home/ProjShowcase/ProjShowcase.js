import React from 'react'
import styles from './ProjShowcase.module.scss'

const ProjShowcase = props => {
  const { attributes } = props
  const textColor = attributes.style.color ? attributes.style.color : 'white'
  // TODO: use a class for colors instead
  const backgroundStyle = {
    background: `linear-gradient(${attributes.style.gradColorStart}, ${
      attributes.style.gradColorEnd
    })`,
    color: textColor,
  }
  return (
    <div className="showcase" style={backgroundStyle}>
      {props.isFirst ? (
        <div>
          <h1>Here are some cool projects I've worked on:</h1>
        </div>
      ) : (
        ''
      )}
      <div className="showcase__top">
        <div className="showcase__info">
          <div className={styles.showcase__heading}>
            <h2>{attributes.name}</h2>
            <span>{attributes.stack.join(', ')}</span>
          </div>
          <div className="showcase__text">
            <div>{attributes.text}</div>
            <div>
              <a href={attributes.link}>Link</a>
            </div>
          </div>
        </div>
        <div className={styles.showcase__logo}>
          <img src={attributes.logo} />
        </div>
      </div>
      <div className={styles.showcase__demo}>
        <video autoPlay muted>
          <source src={attributes.demo} />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  )
}

export default ProjShowcase
