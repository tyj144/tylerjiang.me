import React from 'react'
import styles from './Home.module.scss'
import Link from 'gatsby-link';
import resumePdf from '../../documents/Resume.pdf';
import Helmet from 'react-helmet'

const Home = () => (
  <div className={styles.Home}>
    <Helmet
      title="Home - Tyler Jiang"
      meta={[
        {
          name: 'description',
          content:
            "Hi, I'm Tyler Jiang, a sophomore at Brown University studying computer science.",
        },
      ]}
    />
    <header>
      <h1>Hi, I'm <span style={{color: "rgb(243, 84, 105)"}}>Tyler</span>.</h1>
    </header>
    <p>
      I'm a rising junior at{' '}
      <a href="https://www.brown.edu/">Brown University</a> studying computer
      science. Feel free to look at my <Link to={"/projects"}>projects</Link> and <Link to={resumePdf}>resume</Link>.
    </p>
    <p>
      This summer, I am returning to{' '}
      <a href="https://www.fidelity.com/">Fidelity Investments</a> as a Software
      Engineering Intern.
    </p>
    <p>
      I was previously a Software Engineering Intern for Fidelity's{' '}
      <a href="https://workplace.fidelity.com/">Workplace Services</a> division,
      where I built internal web applications for 20,000+ users.
    </p>
    <p>
      Last semester, I was an Undergraduate Teaching Assistant for{' '}
      <a href="http://cs.brown.edu/courses/cs0320/">
        Intro to Software Engineering
      </a>.
    </p>
    <p>
      <h3>Coursework</h3>
      <ul style={{ margin: 0 }}>
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
    </p>
    <p>In my free time, I love to follow the NBA, play basketball and soccer, and watch TV.</p>
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
