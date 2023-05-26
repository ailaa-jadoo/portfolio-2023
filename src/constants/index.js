import {
    mobile,
    backend,
    frontend,
    web,
    javascript,
    typescript,
    html,
    angular,
    bootstrap,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    python,
    git,
    figma,
    docker,
    kreativ,
    meta,
    starbucks,
    tesla,
    shopify,
    yelp,
    url,
    face,
    rock,
    movie_search,
    weather,
    tripguide,
    threejs,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "React Native Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Frontend Developer",
        icon: frontend,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Python",
        icon: python,
    },
    {
        name: "angular",
        icon: angular,
    },
    {
        name: "bootstrap",
        icon: bootstrap,
    },
    {
        name: "git",
        icon: git,
    },
];

const experiences = [
    {
        title: "Frontend Developer",
        company_name: "Kreativ Web Solutions",
        icon: kreativ,
        iconBg: "#E6DEDD",
        duration: "2 months",
        date: "Jul 2022 - Aug 2022(2 Months)",
        points: [
            "Designing and developing user interfaces using Angular ,HTML, CSS, and Bootstrap.",
            "Developing responsive UI designs and maintaining cross-browser compatibility.",
            "Assuring that all user input is validated before submitting to the backend",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Merging web pages to the angular system.",
            "Bug Testing and Fixing.",
        ],
    },
];

const projects = [
    {
        name: "Yelp Camp",
        description:
            "Yelp Camp is a MEN stack web app that enables users to register, create, rate, and delete campgrounds. It features user authentication and allows users to add campgrounds with data and images, rate other campgrounds, and manage their own listings.",
        tags: [
            {
                name: "node",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "express",
                color: "pink-text-gradient",
            },
            {
                name: "bootstrap",
                color: "peach-text-gradient",
            },
        ],
        image: yelp,
        source_code_link: "https://github.com/ailaa-jadoo/Yelp-camp",
        live_link: "https://yelp-camp-ig9d.onrender.com/",
    },
    {
        name: "URL Shrinker",
        description:
            "The URL Shortener is a web app that transforms long URLs into concise and shareable links, enhancing readability and usability.",
        tags: [
            {
                name: "node",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "express",
                color: "pink-text-gradient",
            },
            {
                name: "bootstrap",
                color: "peach-text-gradient",
            },
        ],
        image: url,
        source_code_link: "https://github.com/ailaa-jadoo/Url-Shortener",
        live_link: "https://url-shortener-2dda.onrender.com/",
    },
    {
        name: "Face AI",
        description:
            "The Face Analysis Web App utilizes face-api.js to analyze a user's age, facial expression, and gender in real-time through their webcam. It provides live insights about the user's face.",
        tags: [
            {
                name: "face-api.js",
                color: "blue-text-gradient",
            },
            {
                name: "canvas",
                color: "green-text-gradient",
            },
        ],
        image: face,
        source_code_link: "https://github.com/ailaa-jadoo/Face-API",
        live_link: "https://face-ai-detection.netlify.app/",
    },
    {
        name: "Rock Paper Scissor API",
        description:
            "The Rock Paper Scissor API is a custom API that returns JSON data containing 50 matches. Each match consists of data for four players who are playing against each other. This API provides a convenient way to access and retrieve game data for analysis into other applications.",
        tags: [
            {
                name: "node",
                color: "blue-text-gradient",
            },
            {
                name: "express",
                color: "pink-text-gradient",
            },
        ],
        image: rock,
        source_code_link: "https://github.com/ailaa-jadoo/Rock-paper-scissors-1v4",
        live_link: "",
    },
    {
        name: "TV Show Search",
        description:
            "The Movie Search website uses the TMDB API to display movie search results in a card format. Each card features an image, rating, and title of the movie. On hover, the movie overview is revealed, providing additional details for user exploration.",
        tags: [
            {
                name: "TMDB API",
                color: "blue-text-gradient",
            },
            {
                name: "HTML",
                color: "green-text-gradient",
            },
            {
                name: "CSS",
                color: "pink-text-gradient",
            },
            {
                name: "JS",
                color: "peach-text-gradient",
            },
        ],
        image: movie_search,
        source_code_link: "https://github.com/ailaa-jadoo/TV-show-search-app",
        live_link: "https://tv-show-search-app.netlify.app",
    },
    // {
    //     name: "Weather app",
    //     description:
    //         "The Weather Web Application uses the Open Weather API to show the local weather conditions based on the user's location. By granting location permission, it provides real-time weather updates. Users can switch between Celsius and Fahrenheit units by clicking on the current temperature.",
    //     tags: [
    //         {
    //             name: "OpenWeather API",
    //             color: "blue-text-gradient",
    //         },
    //         {
    //             name: "HTML",
    //             color: "green-text-gradient",
    //         },
    //         {
    //             name: "CSS",
    //             color: "pink-text-gradient",
    //         },
    //         {
    //             name: "JS",
    //             color: "peach-text-gradient",
    //         },
    //     ],
    //     image: weather,
    //     source_code_link: "https://github.com/ailaa-jadoo/Weather-app",
    //     live_link: "https://show-weather-app.netlify.app",
    // },
];

export { services, technologies, experiences, projects };