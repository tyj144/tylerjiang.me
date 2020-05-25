import React, { Fragment } from 'react'

import habLogo from '../assets/images/hab_logo.png'
import habDemo from '../assets/images/hackatbrown.png'
import stdimDiagram from '../assets/images/stdim.png'
// import habDemo from '../assets/videos/elephluent_autoplay.mp4'
import elephluentLogo from '../assets/images/elephluent.png'
import elephluentDemo from '../assets/videos/elephluent_autoplay.mp4'
import manimLogo from '../assets/images/manim_logo.png'
import manimDemo from '../assets/videos/manim_site_demo.mp4'

const ShowcaseContent = [
  {
    name: 'Hack@Brown 2020',
    logo: habLogo,
    stack: ['React/Typescript', 'Flask/Python', 'PostgreSQL'],
    link: 'https://2020.hackatbrown.org',
    demoImg: habDemo,
    text: (
      <Fragment>
        <p>
          <b>Hack@Brown</b> is Brown University’s largest annual hackathon,
          attracting hundreds of hackers from across the country every January.
          For the 2020 hackathon, my co-lead and I were tasked with managing the
          development of the hackathon’s website.
        </p>
        <p>
          I interviewed and hired 5 additional members, set up the project
          structure and Git workflow for the team, and guided them through the
          construction of our landing pages, registration infrastructure, and
          admissions dashboards. This required me to maintain a birds-eye view
          of a complex project which involved React and TypeScript on the front
          end, Firebase for authentication and file management, and a Flask REST
          API on the back end. I was also responsible for all domain management
          for hackatbrown.org and automating deployments to our development and
          production environments.
        </p>
        <p>
          Leading the Dev Team was a new experience for me, and I’m deeply
          grateful for the opportunity. Not only did I get to lead the
          development of a widely-used website, but I got to work closely with
          the talented people in our organization, such as our design and
          sponsorship teams. I also learned how to evaluate and communicate
          tradeoffs with members in the organization under tight deadlines.
        </p>
      </Fragment>
    ),
    style: {
      gradColorStart: '#F5803E',
      gradColorEnd: '#FFB890',
    },
  },
  {
    name: '[Re] Unsupervised Representation Learning in Atari',
    stack: ['Python/PyTorch'],
    logo: stdimDiagram,
    logoCaption: (
      <p>
        A diagram of ST-DIM from the authors’ <a href="">poster</a>.
      </p>
    ),
    isFirst: 'true',
    partners: ['Lawrence Huang', 'Kendrick Tan', 'Shekar Ramaswamy'],
    link: 'https://openreview.net/pdf?id=H1x3LpqzaB',
    linkText: 'Report',
    text: (
      <Fragment>
        <p>
          <b>Unsupervised Representation Learning in Atari</b> is a paper
          published by Mila which proposes a new representation learning method
          for Atari games. Their method, ST-DIM, learns a representation of the
          game by maximizing the mutual information between subsequent game
          frames.
        </p>
        <p>
          My team and I reproduced this paper as part of the NeurIPS 2019
          Reproducibility Challenge, which we participated in under Professor
          Michael Littman’s class, “
          <a href="http://cs.brown.edu/courses/cs2951f/">
            Learning and Sequential Decision Making
          </a>
          .” In this project, I built and trained the base encoder architecture
          (a convolutional neural network), researched ST-DIM and its
          prerequisite papers, and wrote and presented our findings. This was my
          first time conducting research, and I learned how to read (and
          re-read) papers thoroughly and how to test and evaluate model
          performance in a scientific way.
        </p>
        <p>
          <b>Partners:</b> Lawrence Huang, Kendrick Tan, Shekar Ramaswamy
        </p>
      </Fragment>
    ),
    style: {
      gradColorStart: '#39637B',
      gradColorEnd: '#6D9B8A',
    },
  },
  {
    name: 'Elephluent',
    stack: ['HTML', 'SASS', 'jQuery', 'Java', 'MongoDB'],
    logo: elephluentLogo,
    text: (
      <Fragment>
        <p>
          <b>Elephluent</b> is a language-learning platform which helps children
          pick up new languages through activities like matching games,
          speech-based exercises, picture learning.
        </p>
        <p>
          I designed the site with Adobe XD, where I drew inspiration from apps
          like Duolingo and PBS KIDS. I also implemented the front-end with
          HTML, SASS, and jQuery. This required me to collaborate with the rest
          of my team to send lesson and user progress data via a Java-based REST
          API.
        </p>
        <p>
          <b>Partners:</b> Dat-Thanh Nguyen, Kristen Mashikian, Shekar Ramaswamy
        </p>
      </Fragment>
    ),
    partners: ['Dat-Thanh Nguyen', 'Kristen Mashikian', 'Shekar Ramaswamy'],
    link: 'https://elephluent.github.io',
    github: 'https://github.com/elephluent/elephluent.github.io',
    demo: elephluentDemo,
    style: {
      color: 'black',
      gradColorStart: '#9CF3FF',
      gradColorEnd: '#D9FAFF',
    },
  },
  {
    name: 'Manim Interactive Docs',
    stack: ['Vue.js', 'HTML/CSS', 'Python'],
    logo: manimLogo,
    text: (
      <Fragment>
        <p>
          <b>Manim Interactive Docs</b> is a website I built to document common
          use cases for <a href="https://github.com/3b1b/manim">manim</a>, the
          math animation library created by{' '}
          <a href="https://www.youtube.com/channel/UCYO_jab_esuFRV4b17AJtAw">
            3Blue1Brown
          </a>
          . I created this while working with Professor{' '}
          <a href="http://www.math.brown.edu/~sswatson/index.html">
            Samuel Watson
          </a>{' '}
          to help myself understand the basics of the library. I first wrote an
          animation for each “math object” (mobject) and rendered the video with
          Python. Then, I wrote the site to jump to the timestamp associated
          with each “mobject,” and displayed the Python code snippet that would
          render it in manim.
        </p>
        <p>
          One of the coolest parts of this project was how lightweight it was.
          Using the Vue.js library, the whole site only took ~200 lines of code.
        </p>
      </Fragment>
    ),
    link: 'https://tyj144.github.io/manim-site',
    github: 'https://github.com/tyj144/manim-site',
    demo: manimDemo,
    style: {
      gradColorStart: '#303030',
      gradColorEnd: '#4B4B4B',
    },
  },
]

export default ShowcaseContent
