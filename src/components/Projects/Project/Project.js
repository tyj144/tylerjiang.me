import React from 'react';
import styles from './Project.module.scss';

const Project = (props) => {
    const project = props.project;
    return (
        <div className={[styles.Project].join(' ')} key={project.name.toLowerCase()}>
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'baseline' }}>
                <h2 style={{marginBottom: 0}}>{project.name}</h2>
                <p style={{marginLeft: '1rem', color: '#555' }}>{project.tools.join(', ')}</p>
            </div>
            { project.images ?
                project.images.map(image =>
                    <div className={styles.imageContainer}>
                        <img src={image.src} alt={image.alt} />
                    </div>
                )
                : ''
            }
            {project.description.map(text => 
                <p>{text}</p>
            )}
            {project.links.map(link =>
                <div>
                    <a href={link.url}>{link.name}</a>
                </div>
            )}
        </div>
    )
};

export default Project;
