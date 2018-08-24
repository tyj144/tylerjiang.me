import React from 'react';
import brownLogo from '../images/brown-logo.png';
import bprLogo from '../images/bpr-logo.png';
import fidelityLogo from '../images/fidelity.jpg';
import elephluentLogo from '../images/elephluent.png';

export default [
    {
        id: 'brown',
        img: {
            src: brownLogo,
            alt: 'Brown logo'
        },
        text: [
            <p>I'm currently a student at <a href="https://www.brown.edu/">Brown University</a>, where I study computer science.</p>,
            <p>This past spring, I completed <a href="http://cs.brown.edu/courses/csci0320/">Intro to Software Engineering</a> and <a href="http://cs.brown.edu/courses/csci0220/">Intro to Discrete Structures and Probability</a>.</p>,
            <p>Last fall, I took the <a href="https://cs.brown.edu/courses/cs019/2017/index.html">Accelerated Introduction to Computer Science</a>.</p>,
        ]
    },
    {
        id: 'bpr',
        img: {
            src: bprLogo,
            alt: 'Brown Political Review logo'
        },
        text: [
            <p>I'm also a Data Associate for the Brown Political Review’s Data Board, where I work on the <a href="http://firstdrafts.herokuapp.com/">web platform</a>, which houses our news articles, interactive infographics, and data-related news features.</p>,
        ]
    },
    {
        id: 'fidelity',
        img: {
            src: fidelityLogo,
            alt: 'Fidelity logo'
        },
        text: [
            <p>This summer, I was a Software Engineering Intern at <a href="https://www.fidelity.com/">Fidelity Investments</a>.</p>,
        ],
    },
    {
        id: 'elephluent',
        img: {
            src: elephluentLogo,
            alt: 'Elephluent logo'
        },
        text: [
            <p>I, along with three of my friends, recently created <a href="https://elephluent.github.io/">Elephluent</a>, a web app that teaches kids new languages in a fun and meaningful way.</p>
        ]
    }
];