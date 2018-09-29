import React, { Fragment } from 'react';
import resume from '../../data/Resume.json';
import styles from './Resume.module.scss';
import resumePdf from '../../documents/Resume.pdf';

import Helmet from 'react-helmet';

const Resume = () => (
    <div className="Resume">
        <Helmet
            title="Resume"
            meta={[{"name": "description", "content": "Take a look at my resume."}]}
        />
        <div style={{display: 'flex', alignItems: 'baseline'}}>
            <h1 style={{marginBottom: 0, marginRight: '15px'}}>Resume</h1>
            <a href={resumePdf}>PDF</a>
        </div>
        {resume.sections.map(section => 
            <div key={section.name.replace(' ', '-').toLowerCase()} className={styles.section}>
                <h2 className={styles.sectionName}>{section.name}</h2>
                {section.items.map(item => (
                    <div className={styles.item}>
                        <div className={styles.itemTitleContainer}>
                            <div className={styles.itemHeaderContainer}>
                                <h3 className={styles.itemHeader}>
                                    {item.title}{item.subtitle ? <span className={styles.itemSubtitle}>, {item.subtitle}</span> : ''}
                                </h3>
                            </div>
                            <div className={styles.itemDateContainer}>
                                <p className={styles.itemDate}>{item.date}</p>
                            </div>
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
                                {item.toolsUsed ? 
                                    <li><b>Tools Used</b>: {item.toolsUsed.join(', ')}</li>
                                    : ''}
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
