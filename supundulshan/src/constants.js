// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';

import figmaL from './assets/tech_logo/figma1.png';

import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import unknownLogo from './assets/company_logo/Unknown.png';
import homeImage from './assets/work_logo/home.jpeg';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's

import learningLogo from './assets/company_logo/learning.jpg';
import greatlearningLogo from './assets/company_logo/greatlearning.jpg';


// Education Section Logo's

import sschoolLogo from './assets/education_logo/sschool_logo.png';
import sliitLogo from './assets/education_logo/sliit.png';

// Project Section Logo's
import githubdetLogo from './assets/work_logo/github_det.png';
import csprepLogo from './assets/work_logo/cs_prep.png';
import movierecLogo from './assets/work_logo/movie_rec.png';
import figmaLogo from './assets/work_logo/figma.png';

import iotLogo from './assets/company_logo/iot.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Angular', logo: angularLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'GSAP', logo: gsapLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'C-Sharp', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaL },
    ],
  },
];

  export const experiences = [
    
    
    {
      id: 0,
      img: learningLogo, // uses learning.jpg as imported above
      role: "Introduction to Career Skills in Software Development",
      company: "LinkedIn Learning",
      date: "2025",
      desc: "Successfully completed the Introduction to Career Skills in Software Development course, gaining essential skills for a successful software development career.",
      skills: [
        "Career Skills",
        "Software Development",
        "Professional Development"
      ],
      link: "https://www.linkedin.com/learning/certificates/75c82fbdc288c29337fc6b6295d3640c47cdba3b581ae869517d0dcfa58aba98?trk=share_certificate" // Replace with your actual certificate link
    },
    
   
    
    {
      id: 1,
      img: learningLogo,
      role: "Practical GitHub Actions",
      company: "LinkedIn Learning",
      date: "2025",
      desc: "Completed a professional course on LinkedIn Learning.",
      skills: ["Professional Development", "Github", "LinkedIn Learning"],
      link: "https://www.linkedin.com/learning/certificates/5eb8c0d350e2f8c90234598ab467947b0cf06c0de63ad35a933f6d5bfdbe08fa?trk=share_certificate"
    },
    {
      id: 2,
      img: greatlearningLogo,
      role: "Software Testing",
      company: "Great Learning",
      date: "2025",
      desc: "Successfully completed a course on Software Testing at Great Learning.",
      skills: [
        "Software Testing",
        "Manual Testing",
        "Automation Testing",
        "Test Case Design",
        "Bug Tracking",
        "Quality Assurance",
        "Professional Development"
      ],
      link: "https://olympus.mygreatlearning.com/courses/43771/certificate?pb_id=581"
    },
    {
      id: 3,
      img: greatlearningLogo,
      role: "Python for Machine Learning",
      company: "Great Learning",
      date: "2025",
      desc: "Successfully completed the Python for Machine Learning course at Great Learning, gaining hands-on experience in Python, machine learning algorithms, and data science workflows. Additionally, I have successfully completed the Java Programming course offered by Great Learning Academy, further strengthening my programming foundation and versatility across technologies.",
      skills: [
        "Python",
        "Machine Learning",
      
        "Java Programming",
        "Professional Development"
      ],
      link: "https://olympus.mygreatlearning.com/courses/12385/certificate?pb_id=581"
    },
    {
      id: 4,
      img: greatlearningLogo,
      role: "Android Application Development  Foundations",
      company: "Great Learning",
      date: "2025",
      desc: "Successfully completed the Android Application Development and Data Science Foundations courses at Great Learning. Gained hands-on experience in building Android apps, understanding core data science concepts, statistics, and Python programming. Developed practical skills in mobile development and data-driven problem solving.",
      skills: [
        "Android Development",
      "kotlin",
        "Statistics",
       
        "Mobile App Development",
       
      ],
      link: "https://olympus.mygreatlearning.com/courses/21871/certificate?pb_id=581"
    },

    {
      id: 9,
      img: unknownLogo, // uses learning.jpg as imported above
      role: "What is Software Development?",
      company: "Simplilearn",
      date: "Jan 20, 2025",
      desc: "Successfully completed the 'What is Software Development?' course, gaining a foundational understanding of the software development lifecycle, methodologies, and best practices.",
      skills: [
        "Software Development",
        "SDLC",
        "Development Methodologies",
        "Professional Development"
      ],
      link: "https://simpli-web.app.link/e/9Z4pmQ0KfUb"
    },
    {
      id: 5,
      img: greatlearningLogo,
      role: "OOPs in Java",
      company: "Great Learning",
      date: "2025",
      desc: "Successfully completed the OOPs in Java course at Great Learning, gaining a strong foundation in object-oriented programming concepts, Java syntax, and practical application development.",
      skills: [
        "Java",
        "OOPs Concepts",
        "Object-Oriented Programming",
        "Encapsulation",
        "Inheritance",
        "Polymorphism",
        "Abstraction",
       
      ],
      link: "https://olympus.mygreatlearning.com/courses/31723/certificate?pb_id=581"
    },
    {
      id: 6,
      img: greatlearningLogo,
      role: "Front End Development - HTML",
      company: "Great Learning",
      date: "2025",
      desc: "Successfully completed the Front End Development - HTML course at Great Learning. Gained practical experience in building responsive and accessible web pages using HTML5, and developed a strong understanding of web standards and best practices.",
      skills: [
        "HTML",
        "Web Development",
        "Responsive Design",
        "Accessibility",
        "Front End Development",
     
      ],
      link: "https://olympus.mygreatlearning.com/courses/12761/certificate?pb_id=581"
    },
    {
      id: 7,
      img: greatlearningLogo,
      role: "Front End Development - CSS",
      company: "Great Learning",
      date: "2025",
      desc: "Successfully completed the Front End Development - CSS course at Great Learning. Developed expertise in creating visually appealing, responsive, and accessible web interfaces using modern CSS techniques and best practices.",
      skills: [
        "CSS",
        "Web Design",
        "Responsive Design",
        "Flexbox",
        "Grid Layout",
        "Accessibility",
        "Front End Development",
  
      ],
      link: "https://olympus.mygreatlearning.com/courses/12761/certificate?pb_id=581"
    },

    {
      id: 11,
      img: iotLogo, // uses iot.png as imported above
      role: "Introduction to IoT",
      company: "Simplilearn",
      date: "2025",
      desc: "Successfully completed the 'Introduction to IoT' course, gaining foundational knowledge of the Internet of Things, its applications, and core technologies.",
      skills: [
        "IoT",
        "Internet of Things",
        "Embedded Systems",
        "Connected Devices",
        "Professional Development"
      ],
      link: "https://simpli-web.app.link/e/gweSx7FLfUb"
    },
    {
      id: 12,
      img: unknownLogo, // uses Unknown.png as imported above
      role: "Introduction to MEAN Stack",
      company: "Simplilearn",
      date: "2025",
      desc: "Successfully completed the 'Introduction to MEAN Stack' course, gaining foundational knowledge of MongoDB, Express.js, Angular, and Node.js for full-stack web development.",
      skills: [
        "MEAN Stack",
        "MongoDB",
        "Express.js",
        "Angular",
        "Node.js",
        "Full Stack Development",
        "Professional Development"
      ],
      link: "https://simpli-web.app.link/e/VLeLz2ULfUb"
    },
    {
      id: 13,
      img: unknownLogo, // uses Unknown.png as imported above
      role: "Introduction to Artificial Intelligence",
      company: "Simplilearn",
      date: "2025",
      desc: "Successfully completed the 'Introduction to Artificial Intelligence' course, gaining foundational knowledge of AI concepts, techniques, and real-world applications.",
      skills: [
        "Artificial Intelligence",
        "AI Concepts",
        "Machine Learning",
        "Professional Development"
      ],
      link: "https://simpli-web.app.link/e/WeSTiL1LfUb"
    },
  ];
  
  export const education = [
    
    
      // ...existing entries...
      {
        id: 5,
        img: sliitLogo,
        school: "Sri Lanka Institute of Information Technology (SLIIT)",
        date: "2023 - 2027",
      
        desc: `Pursuing a Bachelor of Science in Information Technology at SLIIT, focusing on software engineering, and modern web technologies. Actively involved in tech clubs . Served as a sub-committee member of the Faculty of Computing Student Community for the 2025/26 academic year, contributing to student engagement and community initiatives.`,
        degree: "BSc (Hons) in Information Technology"
      },
   
  
    {
      id: 4,
      img: sschoolLogo,
  
      date: "2011 - 2022",
   
      desc: `Studied in the Commerce Stream for GCE Advanced Level (2011–2022), achieving C grades in Accounting and Business Studies, and completed Information and Communication Technology. Passed GCE O/L in 2018. Served as Head Prefect in 2020, President of the ICT Club, and an active member of the Media Unit. Volunteered at the Leo Club and participated in numerous extracurricular activities. Actively took part in and won prizes at annual sports meets, as well as zonal, provincial, island, and national championships in athletics, football, rugby, and chess. Achieved victories at zonal, Southern Province, and national levels in music and art competitions. Participated in new invention competitions at zonal, provincial, and all-island levels, winning several prizes. Also, won prizes and championships as an active member of the Youth Club.`,
      degree: "ST.Servatius Collage-Matara"
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "fabfarm clothing flatform ui ux design",
      image:figmaLogo,
      description:"FabFarm is a modern clothing platform UI/UX project designed in Figma. The app features a clean, user-friendly interface for browsing, selecting, and purchasing clothing items. Built with a focus on seamless shopping experiences and stylish design.",
      tags: ["figma", "design", "ui/ux" ],
      github: "https://github.com/codingmastr/GitHub-Profile-Search-App-Using-React-JS",
      webapp: "https://www.figma.com/proto/AfBZ5DJSAkk7Ab281MELa6/fabfam-clothing?node-id=0-1&t=YioewTts45zAysyN-1",
    },
    {
      id: 1,
      title: "Online Laundry Management System ",
      date: "Aug 2024 - Oct 2024",
      
      description: "PAT PAT CLEANING is an online platform that streamlines laundry management for customers and staff. Users can schedule pickups, select services, make payments, and track orders easily. The system simplifies operations for staff and administrators, ensuring a smooth and efficient laundry experience.",
      image: homeImage,
      
      tags: ["MySQL", "Express", "HTML", "CSS", "Java","Bootstrap (Framework)"],
      github: "",
      webapp: homeImage,
    },
    {
      id: 2,
      title: "Movie Recommendation App",
      description:
        "A React-based web application that provides movie recommendations based on different criteria, such as genres, user preferences, and popular trends. The intuitive design and smooth experience make it a go-to app for movie enthusiasts.",
      image: movierecLogo,
      tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/codingmastr/Movie-Recommendation-App",
      webapp: "https://movie-recommendation-app-jet.vercel.app/",
    },
    
    
    
    
  ];
  
  export const services = [
  {
    title: "Mobile Application Development",
    description: "Custom mobile application development for Android and iOS platforms using modern technologies like React Native, Kotlin, and Java. From concept to deployment, I deliver intuitive and performant mobile experiences.",
    icon: "mobile", // or your icon component
  },
  {
    title: "Web Development",
    description: "Full-stack web development services with modern frameworks and technologies. I specialize in creating responsive, scalable, and optimized web applications with clean code and best practices.",
    icon: "web",
  },
  {
    title: "UI/UX Engineering",
    description: "User interface and experience design with a focus on user-centered principles. I create visually appealing and intuitive designs that enhance user engagement and satisfaction.",
    icon: "uiux",
  },
  // --- Add your new service below ---
  
];