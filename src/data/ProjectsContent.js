import elephluentDash from "../images/projects/elephluent/dashboard.png";
import elephluentLessons from "../images/projects/elephluent/lessons.png";
import elephluentPic from "../images/projects/elephluent/pic_learning.png";
import elephluentMobile from "../images/projects/elephluent/pic_learning_mobile.png";
import speakeasyHome from '../images/projects/speakeasy/home.png';
import gca from '../images/projects/google-calendar-automator/cal-auto.png';
import flightFinder from '../images/projects/flight-finder/home.png';
import chatterbox from '../images/projects/chatterbox/chatterbox.png';

export default [
    {
        "name": "Elephluent",
        "images": [
            {
                "src": elephluentDash,
                "alt": "Elephluent dashboard"
            },
            // {
            //     "src": elephluentLessons,
            //     "alt": "Elephluent lessons"
            // },
            // {
            //     "src": elephluentPic,
            //     "alt": "Elephluent picture learning"
            // },
            // {
            //     "src": elephluentMobile,
            //     "alt": "Elephluent responsive design"
            // },
        ],
        "tools": [ "HTML", "Sass", "jQuery", "Java", "MongoDB"],
        "description": [
            "Worked in a team of four to launch a web app that teaches children foreign languages through interactive lessons and games",
            "Integrated lesson and progress data from MongoDB into lessons using AJAX calls through jQuery",
            "Designed a child-friendly user interface focused on sight, sound, and touch using SASS, CSS Flexbox and Transitions, and the Web Speech API"
        ],
        "links": [
            { "name": "Frontend Demo", "url": "https://elephluent.github.io" },
            { "name": "GitHub", "url": "https://github.com/elephluent/elephluent.github.io" }
        ]
    },
    {
        "name": "tylerjiang.me",
        "images": [
            {
                "src": "",
                "alt": ""
            }
        ],
        "tools": [ "Gatsby.js (React and GraphQL)" ],
        "description": [],
        "links": [
            { "name": "Link", "url": "/" }
        ]
    },
    {
        "name": "SpeakEasy",
        "images": [
            {
                "src": speakeasyHome,
                "alt": "SpeakEasy home page"
            }
        ],
        "tools": [ "Flask", "Python", "HTML", "CSS", "JavaScript"],
        "description": [
            "Built a web app that helps people improve their communication skills by recording them, analyzing their emotions, and suggesting ways to improve their word choice.",
            "Integrated the Google Cloud Speech API and Microsoft’s Cognitive Services API into the web app with Flask and Python.",
            "Implemented video recording with JavaScript and designed the frontend using HTML, CSS, and Bootstrap."
        ],
        "links": [
            { "name": "Frontend Demo", "url": "/speakeasy-frontend/" },
            { "name": "GitHub", "url": "https://github.com/tyj144/speakeasy" }
        ]
    },
    {
        "name": "Chinese Bible Church of Greater Nashua",
        "images": [
            {
                "src": "",
                "alt": ""
            }
        ],
        "tools": [ "Django", "Python" ],
        "description": [
            "Redesigned the front end and back end of a church website and implemented a database for upcoming events and sermons in PostgreSQL.",
            "Built a web scraper to fetch 200+ sermons from old website to ease the transition of moving to new site."
        ],
        "links": [
            { "name": "Link", "url": "http://cbcgn.herokuapp.com/" },
            { "name": "GitHub", "url": "https://github.com/tyj144/cbcgn-site" }
        ]
    },
    {
        "name": "Google Calendar Automator",
        "images": [
            {
                "src": gca,
                "alt": "An example of a Google Calendar Automator event added."
            }
        ],
        "tools": [ "Python" ],
        "description": [
            "MAHacks 2017 prize winner.",
            "Created a prize-winning utility that finds calendar events on a web page and uploads them to Google Calendar."
        ],
        "links": [
            { "name": "GitHub", "url": "https://github.com/tyj144/google-calendar-automator" }
        ]
    },
    {
        "name": "Flight Finder",
        "images": [
            {
                "src": flightFinder,
                "alt": "Flight Finder home page"
            }
        ],
        "tools": [ "Django", "Python" ],
        "description": [
            "Takes the stress out of finding a vacation destination by finding a place and providing tickets there using a data set of 100,000+ JetBlue flights.",
            "In this project, I designed the front end using HTML, CSS, and Bootstrap, built the back end in Django, and helped parse the dataset and implement the Wikipedia API."
        ],
        "links": [
            { "name": "Link", "url": "http://findaflight.herokuapp.com/" },
            { "name": "GitHub", "url": "https://github.com/tyj144/flight-finder" }
        ]
    },
    {
        "name": "Chatterbox",
        "images": [
            {
                "src": chatterbox,
                "alt": ""
            }
        ],
        "tools": [ "Android SDK", "Java" ],
        "description": [
            "Created a chat application for Android in Java which allows users to and send and receive messages online.",
            "Stored messages in a database and managed user authentication with Firebase."
        ],
        "links": [
            { "name": "GitHub", "url": "https://github.com/tyj144/chatterbox" }
        ]
    },
    {
        "name": "Wall of Things",
        "images": [
            {
                "src": "",
                "alt": ""
            }
        ],
        "tools": [ "Django", "Python" ],
        "description": [
            "Created a web app where people can log in and leave a message on the Wall of Things.",
            "Implemented a database in PostgreSQL to store the messages that users leave."
        ],
        "links": [
            { "name": "Link", "url": "http://wallofthings.herokuapp.com/" },
            { "name": "GitHub", "url": "https://github.com/tyj144/wall-of-things" }
        ]
    }
]
