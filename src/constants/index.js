import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  chromecast,
  disc02,
  figma,
  file02,
  github,
  homeSmile,
  linkedin,
  notification2,
  notification3,
  notification4,
  plusSquare,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  sliders04,
  twitter,
  yourlogo,
  react,
  typescript,
  javascript,
  tailwind,
  skill4,
  skill5,
  skill6,
  skill9,
  skill10,
  skill2,
  skill3,
  skill7,
  skill8,
  skill11,
  skill12,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Home",
    url: "#home",
  },
  {
    id: "1",
    title: "About",
    url: "#about",
  },
  {
    id: "2",
    title: "Skills",
    url: "#skills",
  },
  {
    id: "3",
    title: "Projects",
    url: "#projects",
  },
  {
    id: "4",
    title: "Contact",
    url: "#contact",
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Voice recognition",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Gamification",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Chatbot customization",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const aboutText =
  "Computer Science & AI student with expertise in modern web technologies. Passionate about building intuitive, performant user experiences.";

export const aboutContent = [
  {
    id: "0",
    title: "Education",
    text: "Pursuing BTech in Computer Science & AI at Newton School of Technology, Delhi",
  },
  {
    id: "1",
    title: "Frontend Focus",
    text: "Specializing in React, TypeScript, and responsive design",
  },
  {
    id: "2",
    title: "Full-stack Capable",
    text: "Experience with backend technologies and database systems",
  },
];

export const techStack = [
  {
    id: "0",
    title: "Skill 2",
    icon: skill2,
    width: 36,
    height: 36,
  },
  {
    id: "1",
    title: "Skill 3",
    icon: skill3,
    width: 36,
    height: 36,
  },
  {
    id: "2",
    title: "Skill 4",
    icon: skill4,
    width: 36,
    height: 36,
  },
  {
    id: "3",
    title: "Skill 5",
    icon: skill5,
    width: 36,
    height: 36,
  },
  {
    id: "4",
    title: "Skill 6",
    icon: skill6,
    width: 36,
    height: 36,
  },
  {
    id: "5",
    title: "Skill 7",
    icon: skill7,
    width: 36,
    height: 36,
  },
  {
    id: "6",
    title: "Skill 8",
    icon: skill8,
    width: 36,
    height: 36,
  },
  {
    id: "7",
    title: "Skill 9",
    icon: skill9,
    width: 36,
    height: 36,
  },
  {
    id: "8",
    title: "Skill 10",
    icon: skill10,
    width: 36,
    height: 36,
  },
  {
    id: "9",
    title: "Skill 11",
    icon: skill11,
    width: 36,
    height: 36,
  },
  {
    id: "10",
    title: "Skill 12",
    icon: skill12,
    width: 36,
    height: 36,
  }
];

export const projects = [
  {
    id: "0",
    title: "AI Chatbot Platform",
    description: "Next-gen conversational AI with natural language processing",
    tags: ["React", "Node.js", "NLP", "WebSockets"],
    features: [
      "Contextual conversation flow",
      "Multi-platform integration",
      "Sentiment analysis",
      "Customizable personas"
    ],
    imageUrl: "/src/assets/projects/chatbot.jpg",
    githubUrl: "https://github.com/rudrakshpathak/ai-chatbot",
    demoUrl: "https://chatbot.rudrakshpathak.com"
  },
  {
    id: "1",
    title: "Eventora - Event Management",
    description: "End-to-end event planning and ticketing platform",
    tags: ["Next.js", "TypeScript", "Stripe API"],
    features: [
      "Event creation wizard",
      "Ticket management",
      "Real-time analytics",
      "Attendee engagement tools"
    ],
    imageUrl: "/src/assets/projects/eventora.jpg",
    githubUrl: "https://github.com/rudrakshpathak/eventora",
    demoUrl: "https://eventora.rudrakshpathak.com"
  },
  {
    id: "2",
    title: "Task Management App",
    description: "Productivity application with drag-and-drop interface",
    tags: ["React", "TypeScript", "Firebase"],
    features: [
      "Kanban-style task boards",
      "Real-time collaboration",
      "Task prioritization",
      "Progress tracking"
    ],
    imageUrl: "/src/assets/projects/task-manager.jpg",
    githubUrl: "https://github.com/rudrakshpathak/task-manager",
    demoUrl: "https://tasks.rudrakshpathak.com"
  },
  {
    id: "3",
    title: "AI Image Generator",
    description: "Web app that generates images using AI models",
    tags: ["Next.js", "Tailwind", "OpenAI API"],
    features: [
      "Text-to-image generation",
      "Image editing tools",
      "Gallery of creations",
      "Download options"
    ],
    imageUrl: "/src/assets/projects/ai-generator.jpg",
    githubUrl: "https://github.com/rudrakshpathak/ai-image-generator",
    demoUrl: "https://ai-art.rudrakshpathak.com"
  },
  {
    id: "4",
    title: "Social Media Dashboard",
    description: "Analytics dashboard for social media metrics",
    tags: ["React", "D3.js", "Express"],
    features: [
      "Data visualization charts",
      "Multiple platform integration",
      "Custom reporting",
      "Real-time updates"
    ],
    imageUrl: "/src/assets/projects/social-dashboard.jpg",
    githubUrl: "https://github.com/rudrakshpathak/social-dashboard",
    demoUrl: "https://analytics.rudrakshpathak.com"
  },
  {
    id: "5",
    title: "Fitness Tracker",
    description: "Mobile-first workout tracking application",
    tags: ["React Native", "Redux", "MongoDB"],
    features: [
      "Exercise database",
      "Workout planning",
      "Progress charts",
      "Community features"
    ],
    imageUrl: "/src/assets/projects/fitness-tracker.jpg",
    githubUrl: "https://github.com/rudrakshpathak/fitness-tracker",
    demoUrl: "https://fit.rudrakshpathak.com"
  },
  {
    id: "6",
    title: "Recipe Finder",
    description: "AI-powered recipe recommendation engine",
    tags: ["Python", "Flask", "React"],
    features: [
      "Ingredient-based search",
      "Dietary preference filters",
      "Meal planning",
      "Shopping list generator"
    ],
    imageUrl: "/src/assets/projects/recipe-finder.jpg",
    githubUrl: "https://github.com/rudrakshpathak/recipe-finder",
    demoUrl: "https://recipes.rudrakshpathak.com"
  }
];

export const learningJourney = [
  {
    id: "0",
    title: "Computer Science Foundations",
    date: "2019-2020",
    description: "Mastered core CS concepts including algorithms, data structures, and OOP principles",
    iconUrl: benefitIcon1,
  },
  {
    id: "1",
    title: "Web Development Bootcamp",
    date: "2020-2021", 
    description: "Completed intensive training in modern web technologies (HTML, CSS, JavaScript, React)",
    iconUrl: benefitIcon2,
    light: true,
  },
  {
    id: "2",
    title: "Full-Stack Specialization",
    date: "2021-2022",
    description: "Developed expertise in backend technologies (Node.js, Express, MongoDB)",
    iconUrl: benefitIcon3,
  },
  {
    id: "3",
    title: "AI/ML Exploration",
    date: "2022-2023",
    description: "Studied machine learning fundamentals and applied AI concepts to projects",
    iconUrl: benefitIcon4,
    light: true,
  },
  {
    id: "4",
    title: "Advanced Frontend",
    date: "2023",
    description: "Mastered TypeScript, advanced React patterns, and performance optimization",
    iconUrl: benefitIcon1,
  },
  {
    id: "5",
    title: "Professional Experience",
    date: "Present",
    description: "Applying skills in real-world projects and continuous learning",
    iconUrl: benefitIcon2,
  },
];

export const socials = [
  {
    id: "0",
    title: "GitHub",
    iconUrl: github,
    url: "https://github.com/rudrakshpathak",
  },
  {
    id: "1",
    title: "LinkedIn",
    iconUrl: linkedin,
    url: "https://linkedin.com/in/rudrakshpathak",
  },
  {
    id: "2",
    title: "Twitter",
    iconUrl: twitter,
    url: "https://twitter.com/rudrakshpathak",
  },
];
