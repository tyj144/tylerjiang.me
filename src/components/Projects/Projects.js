import React from 'react';
import projects from '../../data/ProjectsContent.js';

const Projects = () => (
    <div className="Projects">
        <h1>Projects</h1>
        {projects.map(project => 
            <div className="project" key={project.name.toLowerCase()}>
                <h2 style={{marginBottom: 0}}>{project.name}</h2>
                <p>{project.tools.join(', ')}</p>
                { project.images ?
                    project.images.map(image =>
                        <div style={{ 'text-align': 'center' }}>
                            <img src={image.src} alt={image.alt} style={{maxHeight: '350px', maxWidth: '100%'}}/>
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
        )}
    </div>
);

export default Projects;
