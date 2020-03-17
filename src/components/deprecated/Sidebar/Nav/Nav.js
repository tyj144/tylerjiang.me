import React from 'react';
import NavItem from './NavItem/NavItem';

const Nav = (props) =>
    <div className="Nav">
        {props.navItems.map(
            navItem => 
                <NavItem
                    key={navItem.link}
                    text={navItem.text}
                    link={navItem.link}
                />)}
    </div>

export default Nav;
