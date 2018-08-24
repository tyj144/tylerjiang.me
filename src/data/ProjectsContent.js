
export default [    {
        "name": "Elephluent",
        "partners": ["Dat-Thanh Nguyen", "Kristen Mashikian","Shekar Ramaswamy"],
        "images": [
            {
                "src": require('../images/projects/elephluent/dashboard.png'),
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
        "tools": [ "HTML", "SASS", "jQuery", "Java", "MongoDB"],
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
        "name": "Maps",
        "partners": ["Oscar Newman"],
        "images": [
            {
                "src": require('../images/projects/maps/maps.png'),
                "alt": "Maps screenshot"
            }
        ],
        "tools": [ "HTML", "CSS", "jQuery", "Java" ],
        "description": [
            "Worked in a team of two to implement an interactive Google Maps clone with pan and zoom using HTML Canvas, jQuery, and Java",
            "Implemented the A* algorithm to optimize finding the shortest path between two locations",
            "Implemented a KD-tree to increase efficiency when searching for locations nearby a given coordinate",
        ],
        "links": []
    },
    {
        "name": "First Drafts",
        "partners": ["Aansh Shah", "Zachary Horvitz"],
        "images": [
            {
                "src": require('../images/projects/first-drafts/first-drafts.png'),
                "alt": "First Drafts website screenshot"
            }
        ],
        "tools": [ "HTML", "CSS", "Django", "Python", "PostgreSQL" ],
        "description": [
            "Led the effort to deploy a web platform for the Brown Political Review data board",
            "Built a Django web app for displaying and storing articles and interactive D3 infographics from scratch",
            "Implemented a database using PostgreSQL to manage articles, deployed on Heroku"
            
            
        ],
        "links": [
            { "name": "Link", "url": "http://firstdrafts.herokuapp.com/" }
        ]
    },
    {
        "name": "Autocorrect",
        "partners": [],
        "images": [
            {
                "src": require('../images/projects/autocorrect/autocorrect.png'),
                "alt": "Autocorrect screenshot"
            }
        ],
        "tools": [ "HTML", "CSS", "jQuery", "Java" ],
        "description": [
            "Implemented an autocorrect service from scratch using tries",
            "Built a REST service with endpoints to get autocorrect suggestions, rendered them in a single page application using AJAX calls (through jQuery)",
            "Created suggestions based on Levenshtein edit distance, prefix matching, and if the user accidentally combined two words or hit nearby keys",
            
        ],
        "links": []
    },
    {
        "name": "tylerjiang.me",
        "partners": [],
        "images": [
            {
                "src": require('../images/projects/tylerjiang-me/tylerjiang-me.png'),
                "alt": "Tyler Jiang personal site screenshot"
            }
        ],
        "tools": [ "Gatsby.js (React and GraphQL)", "SASS", "Netlify" ],
        "description": [
            "Built my personal website using Gatsby.js, the static site generator based on React and GraphQL. Deployed with Netlify."
        ],
        "links": [
            { "name": "Link", "url": "/" }
        ]
    },

    {
        "name": "Bacon",
        "partners": [],
        "images": [
            {
                "src": require('../images/projects/bacon/actor.png'),
                "alt": "Bacon actor screenshot"
            }
        ],
        "tools": [ "HTML", "CSS", "jQuery", "Java" ],
        "description": [
            "Implemented a dynamic version of Dijkstra’s algorithm to calculate a specialized version of the famous \"Six Degrees of Bacon\"",
            "Used the proxy pattern to lazily read data from a SQLite database of actors and movies, used caching and profiling to improve algorithm performance"
            
            
        ],
        "links": []
    },
    {
        "name": "SpeakEasy",
        "partners": ["Fenil Doshi", "Rohit Saha", "Samuel Zhang"],
        "images": [
            {
                "src": require('../images/projects/speakeasy/home.png'),
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
            { "name": "Frontend Demo", "url": "https://tyj144.github.io/speakeasy-frontend/" },
            { "name": "GitHub", "url": "https://github.com/tyj144/speakeasy" }
        ]
    },
    {
        "name": "Google Calendar Automator",
        "partners": ["Randy Wang", "Nishanth Duriarasu", "Kevin Kelly"],
        "images": [
            {
                "src": require('../images/projects/google-calendar-automator/cal-auto.png'),
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
        "name": "Chatterbox",
        "partners": [],
        "images": [
            {
                "src": require('../images/projects/chatterbox/chatterbox.png'),
                "alt": ""
            }
        ],
        "tools": [ "Android SDK", "Java", "Firebase" ],
        "description": [
            "Created a chat application for Android in Java which allows users to and send and receive messages online.",
            "Stored messages in a database and managed user authentication with Firebase."
        ],
        "links": [
            { "name": "GitHub", "url": "https://github.com/tyj144/chatterbox" }
        ]
    },
    {
        "name": "Flight Finder",
        "partners": ["Dylan Sam", "Ryan Choi", "Sonny Mo"],
        "images": [
            {
                "src": require('../images/projects/flight-finder/home.png'),
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
    // {
    //     "name": "Chinese Bible Church of Greater Nashua",
    //     "images": [
    //         {
    //             "src": "",
    //             "alt": ""
    //         }
    //     ],
    //     "tools": [ "Django", "Python" ],
    //     "description": [
    //         "Redesigned the front end and back end of a church website and implemented a database for upcoming events and sermons in PostgreSQL.",
    //         "Built a web scraper to fetch 200+ sermons from old website to ease the transition of moving to new site."
    //     ],
    //     "links": [
    //         { "name": "Link", "url": "http://cbcgn.herokuapp.com/" },
    //         { "name": "GitHub", "url": "https://github.com/tyj144/cbcgn-site" }
    //     ]
    // },
    // {
    //     "name": "Wall of Things",
    //     "images": [
    //         {
    //             "src": "",
    //             "alt": ""
    //         }
    //     ],
    //     "tools": [ "Django", "Python" ],
    //     "description": [
    //         "Created a web app where people can log in and leave a message on the Wall of Things.",
    //         "Implemented a database in PostgreSQL to store the messages that users leave."
    //     ],
    //     "links": [
    //         { "name": "Link", "url": "http://wallofthings.herokuapp.com/" },
    //         { "name": "GitHub", "url": "https://github.com/tyj144/wall-of-things" }
    //     ]
    // }
]
