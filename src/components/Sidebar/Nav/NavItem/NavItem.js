import React from 'react';
import Link from 'gatsby-link';

const NavItem = (props) => 
    <div className="NavItem">
        <Link to={props.link}>{props.text}</Link>
    </div>;

export default NavItem;
