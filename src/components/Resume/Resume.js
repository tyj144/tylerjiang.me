import React, { Fragment } from 'react';
import resume from '../../data/Resume.json';
import styles from './Resume.module.scss';

import Helmet from 'react-helmet';

const Resume = () => (
    <div className="Resume">
        <Helmet title="Resume"></Helmet>
        <h1>Resume</h1>
        {resume.sections.map(section => 
            <div key={section.name.replace(' ', '-').toLowerCase()} className={styles.section}>
                <h2>{section.name}</h2>
                {section.items.map(item => (
                    <div className={styles.item}>
                        <div className={styles.title}>
                            <h3 className={styles.itemHeader}>
                                {item.title}{item.subtitle ? <span className={styles.itemSubtitle}>, {item.subtitle}</span> : ''}
                            </h3>
                            <p className={styles.itemDate}>{item.date}</p>
                        </div>
                        <div>
                            <ul>
                                {item.bullets.map(bullet => (
                                    <Fragment>
                                        <li>{bullet.content}</li>
                                        { bullet.subBullets ?
                                            <ul>
                                                {bullet.subBullets.map(subBullet => <li>{subBullet.content}</li>)}
                                            </ul>
                                            : ''}
                                    </Fragment>
                                ))}
                            </ul>
                        </div>
                    </div>
                    )
                )}
            </div>
    )}
    </div>
);

export default Resume;
