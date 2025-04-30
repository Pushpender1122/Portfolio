import { hackathon, cipher, jtbs, lpu } from "../assets/images";
import {
    chrome,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    stream,
    summiz,
    tailwindcss,
    threads,
    typescript,
    cpp,
    clanguage,
    aws,
    redis,
    docker
} from "../assets/icons";

export const skills = [
    {
        imageUrl: aws,
        name: "AWS",
        type: "Cloud Services",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Backend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: redis,
        name: "Redis",
        type: "Database",
    },
    {
        imageUrl: docker,
        name: "Docker",
        type: "Containerization",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: cpp,
        name: "Cpp",
        type: "Programming Language",
    },
    {
        imageUrl: clanguage,
        name: "C",
        type: "Programming Language",
    },

];

export const experiences = [
    {
        title: "Software Engineer Intern",
        company_name: "Lovely Professional University",
        icon: lpu,
        iconBg: "#F5F7F9",
        date: "Jan 2025 - Present",
        points: [
            "Contributed to building a User Management System (UMS) using Next.js for the front-end, focusing on user onboarding,profile management, and role-based access control.",
            "Collaborated with cross-functional teams to enhance system scalability, security, and performance. ",
            "Designed and implemented core features such as user onboarding, profile management, and role-based access control.",
        ],

    },
    {
        title: "Full Stack Developer (Freelance)",
        company_name: "Freelance",
        icon: jtbs,
        iconBg: "#000000",
        date: "Dec 2024 - Jan 2025",
        points: [
            "Developed a comprehensive web platform for a Canadian client, enhancing their digital presence and enabling seamless online interactions.",
            "Utilized React for the front-end, and Node.js with MongoDB for the back-end to ensure scalability and performance.",
            "Integrated secure payment gateways, optimized user experience, and ensured smooth functionality across all devices.",
            "Delivered a high-quality product within the stipulated timeline, maintaining strong communication with the client throughout the project.",
        ],

    },
    {
        title: "ARENA (WEB - A - THON)",
        company_name: "Hackathon",
        icon: hackathon,
        iconBg: "#000000",
        date: "Sep 2024 - Sep 2024",
        points: [
            "Developed and maintained a Smart Learning platform that integrates AI for personalized learning experiences.",
            "Implemented a user-friendly interface for accessing quizzes and AI-driven personal assistant features.",
            "Collaborated with a team to design and build the platform, ensuring high-quality user experiences.",
            "Utilized feedback and iterative testing to enhance the platform's functionality and effectiveness.",
        ],

    },
    {
        title: "Full Stack Development",
        company_name: "Certificate",
        icon: cipher,
        iconBg: "rgb(241 205 201)",
        date: "Jun 2024 - July 2024",
        points: [
            "Completed a Full Stack Development course, gaining proficiency in building web applications using React.js and other technologies.",
            "Developed various projects as part of the course, applying skills in both front-end and back-end development.",
            "Collaborated with peers to create high-quality applications, ensuring effective communication and teamwork.",
            "Learned best practices in responsive design and cross-browser compatibility while implementing features in projects.",
        ],

    },

];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Pushpender1122',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/Pushpender-jangra',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Chat & Video Application',
        description: 'Developed RealTalk, a chat and video application that enables real-time communication between users through messaging and video calls.',
        link: 'https://realtalks.netlify.app/',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Full Stack E-commerce',
        description: 'Developed a full-stack e-commerce platform with an integrated payment gateway, allowing users to browse, purchase products, and complete transactions securely.',
        link: 'https://quickcyberecom.netlify.app/',
    },
    {
        iconUrl: chrome,
        theme: 'btn-back-blue',
        name: 'Chrome extension',
        description: 'Developed a Chrome extension to automate sending WhatsApp messages using JavaScript, Chrome API.',
        link: 'https://chromewebstore.google.com/detail/wamessage-api/pcaklohkjcdechgoedhpcciclbjcamac',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Code Editor',
        description: 'Developed a code editor for HTML, CSS, and JavaScript, enabling users to write, preview  in real-time.',
        link: 'https://pushpender1122.github.io/CodeEditor2.0/',
    },
    {
        iconUrl: stream,
        theme: 'btn-back-pink',
        name: 'Streaming platform',
        description: 'Developed a front-end video streaming platform, allowing users to browse and watch videos with a seamless user experience.',
        link: 'https://github.com/Pushpender1122/youtube',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Slack Bot',
        description: 'Developed EasyApproval-Slack, a bot that automates approval tasks by sending requests to selected users, streamlining workflows and enhancing efficiency.',
        link: 'https://github.com/Pushpender1122/EasyApproval-Slack',
    }
];