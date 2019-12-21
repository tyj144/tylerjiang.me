import React, { Fragment } from 'react'
import styles from './Home.module.scss'
import Helmet from 'react-helmet'
import projects from '../../data/ProjectsContent.js'
import Project from '../Projects/Project/Project.js'
import Header from '../Header/Header.js'

const Home = () => (
  <div className={styles.Home}>
    <Helmet
      title="Home - Tyler Jiang"
      meta={[
        {
          name: 'description',
          content:
            "Hi, I'm Tyler Jiang, a junior at Brown University studying computer science.",
        },
      ]}
    />
    <Header />
    <div>
      <h1>I'm a problem solver first, and maker second.</h1>
      <p>
        I'm currently a junior at <a href="https://www.brown.edu/">Brown University</a>, where I study computer science.
        It's important to me that I 
      </p>
      <p>
        This summer, I was a Software/Site Reliability Engineering Intern at{' '}
        <a href="https://www.fidelity.com/">Fidelity Investments</a>.
      </p>
      <p>
        I was previously a Software Engineering Intern for Fidelity's{' '}
        <a href="https://workplace.fidelity.com/">Workplace Services</a>{' '}
        division, where I rebuilt an internal web application for 20,000+ users.
      </p>
      <p>
        I'm also a Course Content Developer for the{' '}
        <a href="https://www.brown.edu/initiatives/data-science/home">
          Brown Data Science Initiative
        </a>, where I work with Professor{' '}
        <a href="http://www.math.brown.edu/~sswatson/index.html">
          Samuel Watson
        </a>{' '}
        on <a href="https://mathigon.org/data-gymnasia">Data Gymnasia</a> and
        animated data science{' '}
        <a href="https://www.youtube.com/watch?v=4RrQj5c8G44">videos</a>.
      </p>
      <div>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/4RrQj5c8G44"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen="true"
          style={{ display: 'block', margin: '0 auto' }}
        />
      </div>
      <p>
        Last semester, I was an Undergraduate Teaching Assistant for{' '}
        <a href="http://cs.brown.edu/courses/cs0320/">
          Intro to Software Engineering
        </a>.
      </p>
    </div>
    <div className={styles.Projects}>
      <h1>Projects</h1>
      {projects.map(project => (
        <Fragment>
          <Project project={project} />
          <hr />
        </Fragment>
      ))}
    </div>
    <div>
      <h1>Coursework</h1>
      <ul style={{ margin: 0 }}>
        <li>Deep Learning</li>
        <li>Learning and Sequential Decision Making</li>
        <li>
          <a href="http://cs.brown.edu/courses/cs1420/">Machine Learning</a>
        </li>
        <li>
          <a href="http://cs.brown.edu/courses/cs033/">
            Intro to Computer Systems
          </a>
        </li>
        <li>
          <a href="http://cs.brown.edu/courses/csci0320/">
            Intro to Software Engineering
          </a>
        </li>
        <li>
          <a href="http://cs.brown.edu/courses/csci0220/">
            Intro to Discrete Structures and Probability
          </a>
        </li>
        <li>Honors Statistical Inference I</li>
        <li>Linear Algebra</li>
        <li>Honors Multivariable Calculus</li>
        <li>
          <a href="https://cs.brown.edu/courses/cs019/2017/index.html">
            Accelerated Introduction to Computer Science
          </a>
        </li>
      </ul>
    </div>
    <p>
      In my free time, I love to follow the NBA, play basketball and soccer, and
      watch TV.
    </p>
    {/* {sections.map(section => (
      <div key={section.id} className={styles.section}>
        <div className={styles.imageContainer}>
          <img src={section.img.src} alt={section.img.alt} />
        </div>
        <div className={styles.textContainer}>{section.text}</div>
      </div>
    ))} */}
  </div>
)

export default Home
