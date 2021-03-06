import React, { Fragment } from 'react';
import projects from '../../data/ProjectsContent.js';
import Helmet from 'react-helmet';
import styles from './Projects.module.scss';
import Project from './Project/Project.js';

const Projects = () => (
    <div className={styles.Projects}>
        <Helmet
            title="Projects"
            meta={[{"name": "description", "content": "Check out some of the projects I've been working on."}]}
        />
        {projects.map(project => 
            <Fragment>
                <Project project={project} />
                <hr />
            </Fragment>
        )}
    </div>
);

export default Projects;
