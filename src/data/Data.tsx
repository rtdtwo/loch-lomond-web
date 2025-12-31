import {Project} from "@/const/Types";

export const Experiences = [
    {
        id: "galatea_ft",
        icon: "/res/logos/galatea-logo.png",
        title: "Financial Software Associate",
        company: "Galatea Associates, LLC",
        duration: "Jun 2023 - Present • Somerville, MA",
        description: "At Galatea, I dive into the technical complexities of the financial world. I work with clients to identify bottlenecks in their systems and develop tailored software to fix them. I spend most of my time translating heavy financial requirements into clean, reliable code that keeps things running smoothly.",
    },
    {
        id: "uf_ctsi",
        icon: "/res/logos/uf-logo.png",
        title: "Student Software Engineer",
        company: "University of Florida Clinical & Translational Science Institute (CTSI)",
        duration: "Jan 2022 - Apr 2023 • Gainesville, FL",
        description: "While pursuing my Master's, I worked part-time with UF's CTSI to help universities under the 1Florida Alzheimer's Disease Research Center share research data more easily. I spent most of my time writing Python scripts to automate clinical reports and building tools to bridge the gap with their REDCap databases. Essentially, I handled the 'data plumbing' so the researchers could stay focused on the science.",
    },
    {
        id: "galatea_int",
        icon: "/res/logos/galatea-logo.png",
        title: "Financial Software Intern",
        company: "Galatea Associates, LLC",
        duration: "May 2022 - Aug 2022 • St. Petersburg, FL",
        description: "During a summer internship while pursuing my Master's, I built a full-stack tool to help Business Analysts at a major investment bank automate their daily tasks. Using React, Java Spring Boot, and MongoDB, I focused on turning their most repetitive manual workflows into a streamlined digital process, which saved the team a massive amount of time.",
    },
    {
        id: "webloom",
        icon: "/res/logos/webloom-logo.png",
        title: "Senior Android Developer",
        company: "Webloom",
        duration: "Aug 2020 - Jan 2021 • Pune, India (Remote)",
        description: "While my Master's plans were deferred during COVID, I took on a project to modernize a client app's UI and transition the codebase to MVVM architecture. I also got to build something a bit more creative: an AR camera module using DeepAR, complete with real-time face tracking and custom filters to make the experience more interactive.",
    },
    {
        id: "gigindia",
        icon: "/res/logos/gigindia-logo.png",
        title: "Full-Stack Developer",
        company: "GigIndia",
        duration: "Nov 2016 - Jan 2020 • Pune, India (Remote)",
        description: "I started as a sophomore intern and grew into a founding member of the tech team, helping shape our technical direction from day one. I built a bit of everything - from Android app and cloud infra to OpenCV tools and design patterns - laying the foundation for a platform that was eventually acquired by PhonePe in 2022. I moved on in 2020 to pursue my Master's, but I'm proud to have been part of that early core team."
    }
]


export const Educations = [
    {
        id: "uf",
        icon: "/res/logos/uf-logo.png",
        title: "Computer Science (MS)",
        institution: "Univeristy of Florida",
        duration: "2021 - 2023 • Gainesville, FL",
        description: "Moving to the US for my Master's was about leveling up my technical depth and gaining a global perspective on engineering. I used my time at UF to dive deeper into advanced computer science principles, turning my foundational knowledge into more specialized expertise."
    },
    {
        id: "sppu",
        icon: "/res/logos/sppu-logo.png",
        title: "Computer Engineering (BE)",
        institution: "Pune University",
        duration: "2014 - 2018 • Pune, India",
        description: "Spent four years in Pune building a strong foundation in computer engineering. This was a busy chapter for me - juggling engineering labs and theory with my early-stage startup work.",
    },
    {
        id: "kvgk",
        icon: "/res/logos/kvs-logo.png",
        title: "Primary and Secondary Schooling",
        institution: "Kendriya Vidyalaya Ganeshkhind",
        duration: "2002 - 2014 • Pune, India (Remote)",
        description: "I'm a proud product of the KV system, having spent my entire schooling from 1st through 12th grade at the same institution. Being a 'lifer' in one school gave me a strong sense of community and a grounded foundation that I carry into my professional work today.",
    }
]

export const Projects: Project[] = [
    {
        id: "pws",
        title: "Personal Weather Station",
        description: "A personal weather station built using Arduino and sensors, connected to a PostgreSQL database via my own REST APIs. I then created a web frontend to turn that raw environmental data into clean, readable charts and live updates.",
        image: "/res/banners/pws-banner.jpg",
        link: "https://pws.rishabh.blog",
        githubLink: "https://github.com/rtdtwo/pws-frontend/"
    },
    {
        id: "doors",
        title: "I'm Feeling Millenial!",
        description: "A React-based experience emulating the \"Doors 99\" OS to capture millennial nostalgia. It features functional windows and classic menus. In fact, you are likely viewing this very page within that experience.",
        image: "/res/banners/ifm-banner.jpg",
        link: "/ifm",
        githubLink: undefined
    },
    {
        id: "alli",
        title: "Alli: Chomp Away Bad Habits",
        description: "Built with feedback from UF's Health Education and Behavior faculty, this app helps get over negative habits via an interactive UI. Developed as a term project, it features a React Native cross-platform app and backend code written in Python.",
        image: "/res/banners/alli-banner.jpg",
        link: "https://www.youtube.com/watch?v=XSaIQSdRvUs",
        githubLink: "https://github.com/rtdtwo/alli-app"
    },
    {
        id: "weathair",
        title: "WeathAir",
        description: "This React-based proof of concept proves web scraping can happen in-browser without a backend. It pulls raw NOAA aviation history, parses the technicalities, and creates human-friendly visualizations from specialized public data.",
        image: "/res/banners/weathair-banner.jpg",
        link: "https://rtdtwo.github.io/weathair/",
        githubLink: "https://github.com/rtdtwo/weathair"
    },
    {
        id: "voyager",
        title: "Voyager",
        description: "Map your aviation history with a React app that plots flight paths from home to every destination. Visualize your aerial footprint on an interactive globe and export your unique network of travels as a stunning poster print.",
        image: "/res/banners/voyager-banner.jpg",
        link: "https://rtdtwo.github.io/voyager/",
        githubLink: "https://github.com/rtdtwo/voyager"
    }
]