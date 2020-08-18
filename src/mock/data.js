import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello! My Name is ',
  name: 'Kashyap Aghera',
  subtitle: "I'm a Software Developer",
  cta: 'Know More',
};

// ABOUT DATA
export const aboutData = {
  img: 'IMG_5646.jpg',
  paragraphOne:
    "I'm a Full Stack Web Developer with a science background that has skills in both the front-end of web applications as well as the back-end.",
  paragraphTwo: 'I am very passionate about building software and creating effective solutions.',
  paragraphThree:
    'Always eager to learn new skills and knowledge related programming that I can share with the world to utilize.',
  resume:
    'https://docs.google.com/document/d/1hRItpmaSVKwzzA6ITeO0IIN3kXx9FZEE0u-w2cJLKXI/edit?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'recipeapp.png',
    title: 'Recipe Generator',
    info:
      '“What’s In My Fridge” is an easy to use application that grants any novice chef or culinary hobbyist a wide range of delectable recipes made from any of the ingredients found in their fridge.',
    info2: '',
    url: 'https://kaghera.github.io/Recipe_API/',
    repo: 'https://github.com/Kaghera/Recipe_API', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'dayplanner.png',
    title: 'Day Planner',
    info:
      'A simple calendar application that allows the user to save events for each hour of the day.',
    info2: '',
    url: 'https://kaghera.github.io/Day-Planner/',
    repo: 'https://github.com/Kaghera/Day-Planner', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: "Let's Connect!",
  email: 'kashyapaghera@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'facebook',
      url: 'https://www.facebook.com/kashyapaghera',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://codepen.io/Kashmoney',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/kashyap-aghera-8070a01a4/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Kaghera',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
