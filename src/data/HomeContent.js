import React from 'react'
import brownLogo from '../images/brown-logo.png'
import bprLogo from '../images/bpr-logo.png'
import fidelityLogo from '../images/fidelity.jpg'
import elephluentLogo from '../images/elephluent.png'

export default [
  {
    id: 'brown',
    img: {
      src: brownLogo,
      alt: 'Brown University logo',
    },
    text: [
      <p>
        I'm currently a student at{' '}
        <a href="https://www.brown.edu/">Brown University</a>, where I study
        computer science.
      </p>,
      <p>
        In the spring, I will be a TA for{' '}
        <a href="http://cs.brown.edu/courses/cs0330/">
          Intro to Software Engineering
        </a>{' '}
        and will be taking{' '}
        <a href="http://cs.brown.edu/courses/csci1420/">Machine Learning</a>.
      </p>,
      <p>
        In my time at Brown, I have taken:
        <ul style={{ margin: 0 }}>
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
          <li>
            <a href="https://cs.brown.edu/courses/cs019/2017/index.html">
              Accelerated Intro to CS
            </a>
          </li>
        </ul>
      </p>,
    ],
  },
  {
    id: 'fidelity',
    img: {
      src: fidelityLogo,
      alt: 'Fidelity logo',
    },
    text: [
      <p>
        This past summer, I was a Software Engineering Intern at{' '}
        <a href="https://www.fidelity.com/">Fidelity Investments</a>.
      </p>,
      <p>
        While I was there, I built a few internal web applications for the{' '}
        <a href="https://workplace.fidelity.com/">Workplace Solutions</a>{' '}
        Security Services team, including one currently used by 20,000+
        representatives.
      </p>,
    ],
  },
  {
    id: 'bpr',
    img: {
      src: bprLogo,
      alt: 'Brown Political Review logo',
    },
    text: [
      <p>
        I'm also the Associate Director of the Brown Political Review’s Data
        Board.
      </p>,
      <p>
        I was previously the Lead Platform Developer and led the effort to
        design, build, and launch{' '}
        <a href="http://data.brownpoliticalreview.org/">The Numerical</a>, where
        we post articles, interactive infographics, and data-related news
        features.
      </p>,
    ],
  },
  {
    id: 'elephluent',
    img: {
      src: elephluentLogo,
      alt: 'Elephluent logo',
    },
    text: [
      <p>
        I was also the design/frontend lead on{' '}
        <a href="https://elephluent.github.io/">Elephluent</a>, a web app that
        teaches kids new languages in a fun and meaningful way.
      </p>,
    ],
  },
]
