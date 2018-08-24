import React from 'react';
import styles from './Home.module.scss';
import sections from '../../data/HomeContent';
import Helmet from 'react-helmet';

const Home = () => (
    <div className={styles.Home}>
        <Helmet
            title="Home - Tyler Jiang"
            meta={[{"name": "description", "content": "Hi, I'm Tyler Jiang, a sophomore at Brown University studying computer science."}]}
        />
        {sections.map(section => (
            <div key={section.id} className={styles.section}>
                <div className={styles.imageContainer}>
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
