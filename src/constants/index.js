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
    imageai,
    chatai,
    promptopia,
    threejs,
    c9,
    dct,
    freelance,
    cresi,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Works",
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
      title: "Educator",
      icon: creator,
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
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "Wordpress Developer",
      company_name: "Cloud9 Media Inc.",
      icon: c9,
      iconBg: "#383E56",
      date: "Jul 2019 - Oct 2019",
      points: [
        "Developed and maintained web applications using WordPress, ensuring efficient and high-quality code.",
        "Collaborated with cross-functional teams, including designers, product managers, and other developers, to create visually appealing and user-friendly websites.",
        "Implemented responsive design techniques to ensure optimal user experience across different devices and screen sizes.",
        "Ensured cross-browser compatibility and optimized website performance.",
        "Performed SEO-related tasks, including optimizing website content and implementing SEO best practices.",
        "Participated in code reviews, providing valuable feedback to improve code quality and maintainability.",
      ],
    },
    {
      title: "Instructor",
      company_name: "Dominican College of Tarlac Inc.",
      icon: dct,
      iconBg: "#E6DEDD",
      date: "Nov 2019 - Dec 2022",
      points: [
        "Taught various subjects including:",
        "- Game Development, covering the principles and practices of designing and developing games.",
        "- Information Assurance and Security, focusing on the protection of information assets and risk management.",
        "- Fundamentals of Programming, providing an introduction to programming concepts and problem-solving techniques.",
        "- Intermediate Programming, delving deeper into advanced programming topics and techniques.",
        "Provided guidance and support to students, fostering a positive learning environment.",
        "Evaluated student performance, providing constructive feedback and facilitating their growth and development.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "CRESI",
      icon: cresi,
      iconBg: "#383E56",
      date: "Dec 2020 - July 2022",
      points: [
        "Developed and maintained real estate-related web applications using WordPress, ensuring functionality and user-friendly interfaces.",
        "Performed SEO-related tasks, optimizing website content and implementing SEO best practices to improve search engine visibility.",
        "Implemented responsive design techniques to ensure seamless user experience across various devices and browsers.",
        "Participated in code reviews, providing valuable feedback to improve code quality, maintainability, and performance.",
        "Developed custom themes tailored to meet specific project requirements and design aesthetics.",
        "Collaborated with cross-functional teams to gather project requirements and ensure successful project delivery.",
        "Resolved technical issues and bugs promptly to maintain smooth website operation.",
      ],
    },
    {
      title: "Freelance Web Developer",
      company_name: "Online",
      icon: freelance,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other relevant technologies, ensuring robust and efficient solutions.",
        "Collaborating with cross-functional teams, including designers, product managers, and clients, to create high-quality and customized products.",
        "Implementing responsive design techniques to deliver seamless user experiences across different devices and browsers.",
        "Ensuring cross-browser compatibility and optimizing website performance for optimal user satisfaction.",
        "Participating in code reviews, offering constructive feedback to enhance code quality, readability, and maintainability.",
        "Adapting to client requirements and delivering projects within specified timelines and budgets.",
        "Staying up-to-date with the latest web development trends and technologies to incorporate cutting-edge features and functionalities.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      name: "Jane Doe",
      designation: "CEO",
      company: "ABC Incorporated",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      name: "John Doe",
      designation: "COO",
      company: "DEF Industries",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      name: "Jane Smith",
      designation: "CTO",
      company: "GHI Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "AI Image Generator",
      description:
        "This website is a simple AI Image Generator website created using OpenAI DallE API It allows the user to generate images and share them with the community.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "openAI",
          color: "white",
        },
        
      ],
      image: imageai,
      source_code_link: "https://https://github.com/laysonaljon/AI-Image-Generator.com/",
      project_code_link: "https://ai-image-generator-kappa.vercel.app/",
    },
    {
      name: "Codex Chat AI",
      description:
        "This website is a simple AI Coding Chat bot for programming related prompts developed using VanillaJS and OpenAI's API text-davinci-003 model.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "vanilla",
          color: "pink-text-gradient",
        },
        {
          name: "openAI",
          color: "white",
        },
      ],
      image: chatai,
      source_code_link: "https://https://github.com/laysonaljon/Codex-Chat-AI.com/",
      project_code_link: "https://codex-chat-ai-nine.vercel.app/",
    },
    {
      name: "Promptopia",
      description:
        "Promptopia is a prompt sharing platform where users can share their favorite prompts for different topics for other users to see and use.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "GoogleAuth",
          color: "white",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: promptopia,
      source_code_link: "https://github.com/laysonaljon/promptopia",
      project_code_link: "https://promptopia-laysonaljon.vercel.app/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };