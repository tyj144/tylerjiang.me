import React from 'react';
import styles from './Project.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

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
            { project.awards ?
                <p><b>{project.awards.join(', ')}</b></p>
                : ""
            }
            {/* <ul> */}
                {project.description.map(text => 
                    <div style={{
                        display: 'inline-flex',
                        'align-items': 'center'
                    }}>
                        <FontAwesomeIcon icon={faCheckCircle} style={{color: '#5faf63', height: '24px', width: '24px'}}></FontAwesomeIcon>
                        <p style={{marginLeft: '1rem'}}>{text}</p>
                    </div>
                )}
            {/* </ul> */}
            {project.partners.length ? 
                <p><b>Partners</b>: {project.partners.join(', ')}</p>
                : ''
            }
            {project.links.map(link =>
                <div>
                    <a href={link.url}>{link.name}</a>
                </div>
            )}
        </div>
    )
};

export default Project;
