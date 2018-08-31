import React from 'react';
import styles from './Project.module.scss';

const Project = (props) => {
    const project = props.project;
    return (
        <div className={styles.Project} key={project.name.toLowerCase()}>
            <div className={styles.heading}>
                <h2 className={styles.title}>{project.name}</h2>
                <p className={styles.subtitle}>{project.tools.join(', ')}</p>
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
