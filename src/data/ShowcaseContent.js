import React, { Fragment } from 'react'

import elephluentLogo from '../assets/images/elephluent.png'
import elephluentDemo from '../assets/videos/elephluent_autoplay.mp4'
import manimLogo from '../assets/images/manim_logo.png'
import manimDemo from '../assets/videos/manim_site_demo.mp4'

const ShowcaseContent = [
  {
    name: 'Hack@Brown 2020',
    logo: 'undefined',
    stack: ['React/Typescript', 'Flask/Python', 'PostgreSQL'],
    link: 'https://2020.hackatbrown.org',
    demo: 'undefined',
    text: (
      <Fragment>
        <p>
          <b>Hack@Brown</b> is Brown’s annual two-day hackathon which attracts
          hundreds of hackers from across the country. For the 2020 hackathon,
          my co-lead and I were tasked with leading the development of the
          hackathon’s website. I had to interview and hire a team of 7, design
          the specs for the landing and registration pages, mentor and delegate
          tasks to members, and deploy the front-end with Netlify.
        </p>
        <p>
          Leading the Dev Team was a new experience for me, and I’m incredibly
          glad I did it. It gave me valuable experience leading the development
          of a widely-used site, working cross-functionally with design and
          sponsorship teams, and evaluating tradeoffs under tight deadlines.
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
    logo: 'undefined',
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
          for Atari games. Their method, which is called “ST-DIM,” learns a
          representation of the game by maximizing the mutual information
          between subsequent game frames.
        </p>
        <p>
          My team and I reproduced this paper as part of the NeurIPS 2019
          Reproducibility Challenge, which we participated in under Professor
          Michael Littman’s class, “Learning and Sequential Decision Making.” In
          this project, I built the base encoder architecture (a convolutional
          neural network), researched ST-DIM and the papers it was based on, and
          organized our report and presentation structure. I learned a lot from
          this project, mainly how thoroughly research papers need to be read to
          be understood and how to test and evaluate model performance in a
          scientific way.
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
          <b>Manim Interactive Docs</b> is documentation for manim, the math
          animation library created by 3Blue1Brown. I created this while working
          with Professor Samuel Watson to help myself understand the basics of
          the library. I first wrote an animation for each “math object”
          (mobject) and rendered the video with Python. Then, I wrote the site
          to jump to the animation associated with each “mobject,” and attached
          a code snippet with how to create it in Python.
        </p>
        <p>
          The coolest part of this project was how lightweight and versatile the
          Vue.js library was: it took only ~200 lines of code to build the
          entire site.
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
