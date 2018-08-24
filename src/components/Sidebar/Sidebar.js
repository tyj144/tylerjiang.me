import React from 'react';
import styles from './Sidebar.module.scss';
import profilePic from '../../images/profile-pic.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import Nav from './Nav/Nav';
import resume from '../../documents/Resume-PUB.pdf';

const navItems = [
    { text: 'Home', link: '/' },
    { text: 'Blog', link: '/blog' },
    { text: 'Resume', link: '/resume' },
    { text: 'Projects', link: '/projects' },
];

const Sidebar = () => (
    <div className={styles.Sidebar}>
        <img src={profilePic} className={styles.profilePic} alt="me" />
        <h1 className={styles.name}>Tyler Jiang</h1>
        <span className={styles.subtitle}>Student at Brown University</span>
        <div className={styles.contact}>
            <a href="mailto:tyler_jiang@brown.edu">
                <FontAwesomeIcon icon={faEnvelope} />
            </a>
            <a href="https://github.com/tyj144">
                <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href={resume}>
                <FontAwesomeIcon icon={faFileAlt} />
            </a>
            <a href="https://www.linkedin.com/in/tyler-jiang-22a22a150/">
                <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
        </div>
        <Nav navItems={navItems} />
    </div>
);

export default Sidebar;
