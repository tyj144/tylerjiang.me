import React from 'react'
import styles from './Header.module.scss'
import resumePdf from '../../../assets/documents/Resume.pdf'
import collage from '../../../assets/images/collage_me_shadow.png'

const gradientTitle = {
  background: 'linear-gradient(rgb(230, 100, 101), rgb(251, 103, 240))',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  fontSize: '60pt',
  marginTop: 0,
}

const headerStyle = {
  display: 'flex',
  alignItems: 'baseline',
  justifyContent: 'space-between',
}

const Header = () => (
  <header className={styles.header}>
    <div className={styles.left}>
      <div className={styles.intro}>
        <span className={styles.hiIm}>Hi, I'm</span>
        <h1 style={gradientTitle}>Tyler Jiang.</h1>
      </div>
      <div className={styles.navbar}>
        <a href={resumePdf}>resume</a>
      </div>
    </div>
    <div className={styles.right}>
      <img src={collage} width="500" />
    </div>
  </header>
)

export default Header
