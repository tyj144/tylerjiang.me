import React from 'react'
import styles from './Home.module.scss'
import Helmet from 'react-helmet'
import Header from './Header/Header.js'

import BioSection from './BioSection/BioSection'
import ProjShowcase from './ProjShowcase/ProjShowcase'
import showcaseContent from '../../data/ShowcaseContent.js'
import brownLogo from '../../assets/images/brown-logo.png'

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
    {/* <div className={styles.bio}>
      <BioSection
        heading="I’m a developer and problem solver at heart."
        img={brownLogo}
      >
        <p>
          I’m a junior at Brown University studying computer science. This
          semester, I’m the Co-Lead of the Hack@Brown Dev Team, where I lead a
          team of 7 to develop the Hack@Brown website. Previously, I was a
          Software Engineering Intern at Fidelity Investments for two summers,
          where I gained experience in Site Reliability Engineering and
          full-stack software engineering.
        </p>
        <ul>
          <li>Recent Applications of Probability and Statistics</li>
          <li>Distributed Computing Systems</li>
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
      </BioSection>
      <BioSection
        heading="I love to teach and explain."
        img={undefined}
        imgCaption="An animation on machine arithmetic I created for the Data Science Initiative."
      >
        <p>
          Math and computer science can be confusing. There’s a lot of notation
          and technical complexity to wrangle with, and people often give up
          without realizing they’re capable of understanding it. That’s why it’s
          important to have people who are capable of taking complex ideas and
          distilling them into simpler, more intuitive explanations.
        </p>
        <p>
          In my time at Brown, I’ve been fortunate to work as a Course Content
          Developer for the Brown Data Science Initiative, where I’ve animated
          data science videos and built interactive exercises for Data Gymnasia.
          I’ve also been an Undergraduate Teaching Assistant (UTA) for Intro to
          Software Engineering and will be a UTA for Machine Learning in Spring
          2020.
        </p>
      </BioSection> */}
    {/* <BioSection heading="I like to stay active." img={undefined}>
        <p>
          I love sports. I follow the NBA religiously, and in high school, I
          played soccer and ran the 55m, 110m, and 300m hurdles. I placed 10th
          in the 55m hurdles at the 2017 NHIAA Division I Indoor Track and Field
          Championships.
        </p>
        <p>
          I also love to travel and learn about other countries and cultures!
          I’m particularly interested in geography, history, and comparative
          literature as a way to learn about the world. My favorite place that
          I’ve been to is London :)
        </p>
        <p>
          Fun Fact: I hold the Brown Running Club record for the 60m hurdles.{' '}
        </p>
      </BioSection> */}
    {/* </div> */}
    <div className={styles.showcase}>
      {showcaseContent.map((showcase, i) => (
        <ProjShowcase isFirst={i === 0} attributes={showcase} />
      ))}
    </div>
  </div>
)

export default Home

{
  /* <div>
      <h1>I'm a problem solver first, and maker second.</h1>
      <p>
        I'm currently a junior at{' '}
        <a href="https://www.brown.edu/">Brown University</a>, where I study
        computer science. It's important to me that I
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
  </div> */
}
