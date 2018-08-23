import React from 'react';
import styles from './Content.module.scss';

const Content = (props) => 
    <div className={styles.ContentContainer}>
        <div className={styles.Content}>
            {props.children}
        </div>
    </div>;

export default Content;
