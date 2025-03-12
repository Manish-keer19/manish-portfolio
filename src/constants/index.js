import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  code1,
  movie,
  shop,
  youtube,
  python,
  django,
  postgres,
  sql,
  next,
  vue,
  liveLink,
  portfolio15,
  portfolio16,
  portfolio17,
  linktree,
  tiktok,
  ig,
  beeclone,
  smartrep,
  matrixai,
  zapflow,
  notable,
  java,
  spring,
  chat_web,
  androidChat,
  study
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
    title: "Full Stack (MERN Stack) Developer",
    icon: web, // Replace with the actual icon
  },
  {
    title: "Spring Boot Developer",
    icon: backend, // Replace with the actual icon
  },
  {
    title: "React Native Developer",
    icon: mobile, // Replace with the actual icon
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
    name: "Redux Toolkit",
    icon: redux,
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
    name: "Git",
    icon: git,
  },

  {
    name: "Docker",
    icon: docker,
  },
  // {
  //   name: "Django",
  //   icon: django,
  // },
  {
    name: "Postgres",
    icon: postgres,
  },
  {
    name: "SQL",
    icon: sql,
  },

  {
    name: "Next.js",
    icon: next,
  },

  {
    name: "Java",
    icon: java,
  },
  // {
  //   name: "C++",
  //   icon: cpp,
  // },
  // {
  //   name: "Express.js",
  //   icon: nodejs,
  // },
  {
    name: "Spring Boot",
    icon: spring,
  },
  // {
  //   name: "React Native",
  //   icon: reactjs,
  // },
  // {
  //   name: "Electron.js",
  //   icon: nodejs,
  // },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Personal Project",
    icon: code1,
    iconBg: "#E6DEDD",
    date: "2024",
    points: [
      "Developed a real-time messenger app using React Native and Spring Boot.",
      "Implemented JWT authentication and OAuth2 (Google, GitHub).",
      "Integrated media sharing and enhanced UI using Electron.js for the desktop app.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Personal Project",
    icon: code1,
    iconBg: "#383E56",
    date: "2024",
    points: [
      "Built an InstaClone app using React Native CLI and MongoDB.",
      "Added features like image sharing, likes, comments, and push notifications.",
      "Optimized performance and improved UI/UX for better user experience.",
    ],
  },
  {
    title: "Spring Boot Developer",
    company_name: "Personal Project",
    icon: code1,
    iconBg: "#E6DEDD",
    date: "2024",
    points: [
      "Developed a secure backend using Spring Security and JWT.",
      "Created REST APIs for handling user data and messaging.",
      "Implemented OAuth2-based login using Google and GitHub.",
    ],
  },
];

// const testimonials = [
//   {
//     testimonial:
//       "I can't say enough good things about Jeff. He's a true team player who always puts the needs of the project first. If you're looking for a software engineer who can deliver results, Jeff is your guy.",
//     name: "Halley Bennett",
//     designation: "",
//     company: "Hack Reactor",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "Jeff is an incredible problem solver. Whenever we ran into a roadblock on our project, he was always able to come up with creative solutions that kept us moving forward.",
//     name: "Yishak Wesego",
//     designation: "",
//     company: "Hack Reactor",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "I've worked with a lot of engineers over the years, and Jeff is one of the best. His technical skills are top-notch, but what really sets him apart is his ability to communicate complex ideas in a way that everyone on the team can understand.",
//     name: "Megan Stewart",
//     designation: "",
//     company: "Hack Reactor",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];

const testimonials = [
  {
    testimonial:
      "Manish is an exceptional developer with a deep understanding of full-stack development. His ability to work with both the frontend and backend using the MERN stack and Spring Boot makes him a valuable asset to any team.",
    name: "Praveen Chouhan",
    designation: "Frontend Developer",
    company: "Freelancer",
    image: "https://avatars.githubusercontent.com/u/147429908?v=4", // Replace with an actual image URL if available
  },
  {
    testimonial:
      "Manish's expertise in building scalable and secure applications is impressive. His work on real-time chat apps and authentication systems using JWT and OAuth2 shows his technical strength and problem-solving skills.",
    name: "John Doe",
    designation: "Senior Software Engineer",
    company: "Tech Solutions",
    image: "https://randomuser.me/api/portraits/men/8.jpg",
  },
  {
    testimonial:
      "Manish is not only a highly skilled developer but also a great team player. His ability to explain complex technical concepts in a simple way helps the whole team work more efficiently.",
    name: "Jane Smith",
    designation: "Project Manager",
    company: "Global Tech",
    image: "https://randomuser.me/api/portraits/women/9.jpg",
  },
];

const imageProjects = [
  {
    id: 15,
    // image: manishchatapp, // Add the correct image path
    image: chat_web, // Add the correct image path
    url: "https://manishchatapp.vercel.app/", // Update with the actual link
    title: "Manish Chat App (Web)",
    description:
      "ManishChatApp is a full-featured real-time messaging application built using Spring Boot and React Native. It supports secure authentication using JWT and OAuth2 (Google and GitHub), enabling users to communicate instantly and securely. The app also includes features like media sharing, real-time notifications, password recovery, and a responsive user interface designed to provide a seamless chatting experience. Available on web, Android, and desktop platforms.",
  },
  {
    id: 16,
    // image: instaclone, // Add the correct image path
    image: "https://avatars.githubusercontent.com/u/147429908?v=4", // Add the correct image path
    url: "https://github.com/Manish-keer19/Full_Stack-InstaClone-apk", // Update with the actual link
    title: "InstaClone",
    description: 
      "InstaClone is a social media platform inspired by Instagram, developed using React Native CLI. It allows users to create and share posts, follow other users, like and comment on posts, and update their profiles. The app is designed with a scalable backend, ensuring smooth performance even under high user traffic. It includes Firebase for user authentication and data storage, ensuring secure and fast handling of user data.",
  },
  {
    id: 17,
    image: androidChat, // Add the correct image path
  
    url: "https://github.com/Manish-keer19/chatAndroidApp", // Update with the actual link
    title: "Android Chat App",
    description: 
      "The Android Chat App is a real-time chat application built using React Native and Spring Boot. It supports secure login via JWT and OAuth2, allowing users to communicate instantly with end-to-end encryption. The app also includes media sharing (images, videos), push notifications, and a clean, responsive UI optimized for mobile devices. It leverages Firebase for cloud messaging and real-time data synchronization.",
  },
  {
    id: 18,
    image: study, // Add the correct image path
  
    url: "https://manishstudyportal.vercel.app/", // Update with the actual link
    title: "StudyNotion",
    description: 
      "StudyNotion is a comprehensive online learning platform developed using the MERN stack. It allows instructors to create and manage courses, while students can enroll, track progress, and engage in discussions. The platform supports secure payment gateways for course purchasing and includes features like video streaming, interactive quizzes, and peer-to-peer messaging. The UI is designed for a smooth learning experience across web and mobile devices.",
  },
];


// const projects = [
//   {
//     name: "SmartRep AI",
//     description:
//       "SmartRep AI is an advanced AI chatbot designed to streamline customer interactions, book appointments, process payments, and manage leads. It seamlessly integrates with any website, offering a customizable interface and a suite of powerful features to enhance user experience and business operations.",
//     tags: [
//       {
//         name: "Next.js",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "Neon",
//         color: "green-text-gradient",
//       },
//       {
//         name: "Typescript",
//         color: "pink-text-gradient",
//       },
//     ],
//     image: smartrep,
//     source_code_link: "https://github.com/jeffjiang13/smartrep-ai",
//     liveUrl: "https://jj-smartrep.vercel.app/",
//   },

// ];

const projects = [

  {
    name: "InstaClone",
    description:
      "InstaClone is a social media app built with React Native CLI. It allows users to create and share posts, follow other users, like and comment on posts, and manage their profiles in a responsive and user-friendly interface.",
    tags: [
      {
        name: "React Native CLI",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "orange-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
    ],
    image: "https://avatars.githubusercontent.com/u/147429908?v=4", // Replace with actual image URL
    source_code_link: "https://github.com/Manish-keer19/Full_Stack-InstaClone-apk",
    liveUrl: "https://github.com/Manish-keer19/Full_Stack-InstaClone-apk/blob/main/README.md", // Replace with actual URL if deployed
  },
  
  
    {
      name: "Manish Chat App (Web)",
      description:
        "Manish Chat App is a real-time web-based messaging app built using Spring Boot and React. It supports secure authentication with JWT and OAuth2 (Google and GitHub), and allows users to send messages, share media, and reset passwords.",
      tags: [
        {
          name: "Spring Boot",
          color: "green-text-gradient",
        },
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "JWT",
          color: "pink-text-gradient",
        },
        {
          name: "OAuth2",
          color: "orange-text-gradient",
        },
        {
          name: "MongoDB",
          color: "green-text-gradient",
        },
      ],
      image: chat_web,
      source_code_link: "https://github.com/Manish-keer19/chat-web-app",
      liveUrl: "https://manishchatapp.vercel.app/",
    },
    {
      name: "Manish Chat App (Android)",
      description:
        "Manish Chat App is a real-time Android messaging app built using React Native and Spring Boot. It includes features like JWT-based authentication, OAuth2 login (Google and GitHub), media sharing, and password reset.",
      tags: [
        {
          name: "Spring Boot",
          color: "green-text-gradient",
        },
        {
          name: "React Native",
          color: "blue-text-gradient",
        },
        {
          name: "JWT",
          color: "pink-text-gradient",
        },
        {
          name: "OAuth2",
          color: "orange-text-gradient",
        },
        {
          name: "Firebase",
          color: "orange-text-gradient",
        },
      ],
      image: "https://avatars.githubusercontent.com/u/147429908?v=4",
      source_code_link: "https://github.com/Manish-keer19/chatAndroidApp",
      liveUrl: "https://github.com/Manish-keer19/chatAndroidApp/blob/main/README.md",
    },
    {
      name: "Manish Chat App (Desktop)",
      description:
        "Manish Chat App is a real-time desktop messaging app built using Electron.js, Spring Boot, and React. It offers cross-platform support (Windows, Linux, Mac), JWT-based authentication, OAuth2 login, and media sharing.",
      tags: [
        {
          name: "Spring Boot",
          color: "green-text-gradient",
        },
        {
          name: "Electron.js",
          color: "purple-text-gradient",
        },
        {
          name: "JWT",
          color: "pink-text-gradient",
        },
        {
          name: "OAuth2",
          color: "orange-text-gradient",
        },
        {
          name: "MongoDB",
          color: "green-text-gradient",
        },
      ],
      image: "https://avatars.githubusercontent.com/u/147429908?v=4",
      source_code_link: "https://github.com/Manish-keer19/chat-web-app",
      liveUrl: "https://github.com/Manish-keer19/chat-web-app",
    },
    {
      name: "StudyNotion",
      description:
        "StudyNotion is an online learning platform that allows users to create, manage, and enroll in courses. It features secure authentication, a smooth user interface, and course progress tracking.",
      tags: [
        {
          name: "MERN Stack",
          color: "blue-text-gradient",
        },
        {
          name: "Redux",
          color: "purple-text-gradient",
        },
        {
          name: "MongoDB",
          color: "green-text-gradient",
        },
      ],
      image: study, // Replace with actual image URL
      source_code_link: "https://github.com/Manish-keer19/StudyNotion-Full-Stack-Project",
      liveUrl: "https://manishstudyportal.vercel.app/", // Replace with actual URL if deployed
    }
  
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  imageProjects,
};
