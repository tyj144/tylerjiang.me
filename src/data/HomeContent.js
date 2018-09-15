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
            alt: 'Brown University logo'
        },
        text: [
            <p>I'm currently a student at <a href="https://www.brown.edu/">Brown University</a>, where I study computer science.</p>,
            <p>This semester, I'm taking <a href="http://cs.brown.edu/courses/cs033/">Intro to Computer Systems</a>, <a href="http://www.dam.brown.edu/people/cklivans/apma1655.html">Statistical Inference I</a>, and Linear Algebra.</p>,
            <p>Last year, I completed <a href="http://cs.brown.edu/courses/csci0320/">Intro to Software Engineering</a> and <a href="http://cs.brown.edu/courses/csci0220/">Intro to Discrete Structures and Probability</a>, and the <a href="https://cs.brown.edu/courses/cs019/2017/index.html">Accelerated Intro to CS</a>.</p>,
        ]
    },
    {
        id: 'bpr',
        img: {
            src: bprLogo,
            alt: 'Brown Political Review logo'
        },
        text: [
            <p>
                I'm also a Data Associate for the Brown Political Review’s Data Board.
            </p>,
            <p>
                There, I work on the <a href="http://data.brownpoliticalreview.org/">web platform</a>, which houses our 
                articles, interactive infographics, and data-related news features.
            </p>,
        ]
    },
    {
        id: 'fidelity',
        img: {
            src: fidelityLogo,
            alt: 'Fidelity logo'
        },
        text: [
            <p>
                This summer, I was a Software Engineering Intern at <a href="https://www.fidelity.com/">Fidelity 
                Investments</a>.
            </p>,
            <p>
                While I was there, I built a few internal web applications for 
                the <a href="https://workplace.fidelity.com/">Workplace Solutions</a> Security Services team, including
                one which is currently used by ~4,000 representatives.
            </p>
        ],
    },
    {
        id: 'elephluent',
        img: {
            src: elephluentLogo,
            alt: 'Elephluent logo'
        },
        text: [
            <p>I was also the design/frontend lead on <a href="https://elephluent.github.io/">Elephluent</a>, a web app
             that teaches kids new languages in a fun and meaningful way.</p>
        ]
    }
];