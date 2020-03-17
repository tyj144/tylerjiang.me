import React from 'react';
import Link from 'gatsby-link';
import styles from './NavItem.module.scss';

const NavItem = (props) => 
    <div className={styles.NavItem}>
        <Link
            to={props.link}
            activeStyle={{
                color: '#1f8474'
            }}
            exact={true}
        >
            {props.text}
        </Link>
    </div>;

export default NavItem;
