import React from 'react';
import styles from './Content.module.scss';
import Link from 'gatsby-link';

const Content = (props) => (
  <div style={{ width: '100%' }}>
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div className={styles.brandContainer}>
        <Link to={'/'} className={styles.brandLink}>
          Tyler Jiang
        </Link>
      </div>
    </div>
    <div className={styles.Content}>{props.children}</div>
  </div>
);

export default Content;
