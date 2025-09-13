export const navLinks = [
  { id: 1, name: 'Home', href: '#home' },
  { id: 2, name: 'About', href: '#about' },
  { id: 3, name: 'Projects', href: '#work' },
  { id: 4, name: 'Experience', href: '#work' },
  { id: 5, name: 'Contact', href: '#contact' },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Hackoverflow Jury Panel',
    position: 'NIT Durgapur Hackathon - April 2024',
    img: 'assets/review1.png',
    review:
      'Ayush secured 1st place among 100+ participants by developing a secure generative AI application using GPT API and Llama Guard. His innovation in addressing security and compliance issues in GPT-based systems earned recognition for innovation.',
  },
  {
    id: 2,
    name: 'Forest & Wildlife Department',
    position: 'Government of NCT of Delhi',
    img: 'assets/review2.png',
    review:
      'As an App Developer Intern, Ayush delivered exceptional mobile applications using Ionic and Angular that reduced load time by 25% and boosted user engagement by 30%, positively impacting over 500+ users in our department.',
  },
  {
    id: 3,
    name: 'Mozilla Phoenix Club',
    position: 'Student Technical Community',
    img: 'assets/review3.png',
    review:
      'In his role as Joint Secretary, Ayush demonstrated excellent leadership by organizing 10+ technical workshops and 15+ team meetings, reaching 300+ students and faculty while improving overall team productivity by 20%.',
  },
];

export const myProjects = [
  {
    title: 'Workout Master - Fitness Tracker',
    desc: 'A full-stack workout generator and tracker system with responsive UI, dark mode, and secure authentication.',
    subdesc:
      'Built using React, Node.js, Express, MongoDB, and Clerk authentication. Features dynamic workout plans based on muscle groups/goals and workout history tracker. Deployed on Vercel with responsive UI (Tailwind CSS) and dark mode toggle for enhanced UX.',
    href: 'https://github.com/ayushmati2004/workout-master',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      { id: 1, name: 'React.js', path: '/assets/react.svg' },
      { id: 2, name: 'Node.js', path: '/assets/nodejs.png' },
      { id: 3, name: 'MongoDB', path: '/assets/mongodb.png' },
      { id: 4, name: 'TailwindCSS', path: '/assets/tailwindcss.png' },
    ],
  },
  {
    title: 'Farmfolio - Crop & Marketplace Platform',
    desc: 'A crop recommendation and e-commerce platform that enables farmers to plan crops and sell produce online.',
    subdesc:
      'Built a crop recommendation system using React, Flask, and SQL that enables farmers to plan crops and sell produce online. Integrated Web3 smart contracts for secure farmer-to-buyer transactions, creating a comprehensive agricultural marketplace.',
    href: 'https://github.com/ayushmati2004/farmfolio',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      { id: 1, name: 'React.js', path: '/assets/react.svg' },
      { id: 2, name: 'Flask', path: '/assets/flask.png' },
      { id: 3, name: 'SQL', path: '/assets/sql.png' },
      { id: 4, name: 'Web3', path: '/assets/web3.png' },
    ],
  },
];

export const workExperiences = [
  {
    id: 1,
    name: 'University of Florida',
    pos: 'Student Research Intern (Onsite)',
    duration: 'May 2025 – Jul 2025',
    title:
      'Developed multi-layer neural networks for pattern space segmentation and image classification. Planned and executed project using Agile methods with Gantt-based task scheduling and sprint cycles. Presented findings through midterm demos and co-authored a 10-page technical report.',
    icon: '/assets/framer.svg',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Forest & Wildlife Dept., Govt. of NCT Delhi',
    pos: 'App Developer Intern',
    duration: 'Dec 2023 – Feb 2024',
    title:
      'Developed and launched 2+ mobile apps using Ionic and Angular, impacting 500+ users. Optimized performance by reducing load time by 25% and integrated key web features into the mobile app, improving user engagement by 30%.',
    icon: '/assets/figma.svg',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Mozilla Phoenix Club',
    pos: 'Joint Secretary',
    duration: 'Aug 2023 – Aug 2025',
    title:
      'Organized 15+ team meetings, increasing productivity by 20%. Conducted 10+ workshops, reaching 300+ students and faculty to promote open-source technologies and web development skills.',
    icon: '/assets/notion.svg',
    animation: 'salute',
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};
