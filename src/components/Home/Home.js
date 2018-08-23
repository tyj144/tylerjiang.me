import React from 'react';
import styles from './Home.module.scss';
import sections from '../../data/HomeContent';

const Home = () => (
    <div className={styles.Home}>
        {sections.map(section => (
            <div key={section.id} className={styles.section}>
                <div>
                    <img src={section.img.src} alt={section.img.alt} />
                </div>
                <div className={styles.textContainer}>
                    {section.text}
                </div>
            </div>
        )
    )}
    </div>
);


export default Home;
