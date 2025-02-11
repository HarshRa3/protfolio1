import HtmlIcon from "../../public/SkillIcon/html-1.svg";
import JsIcon from "../../public/SkillIcon/logo-javascript.svg";
import CSSIcon from "../../public/SkillIcon/css-3.svg";
import TailwindIcon from "../../public/SkillIcon/tailwind-css-2.svg";
import BootStrapIcon from "../../public/SkillIcon/bootstrap-4.svg";
import ReactIcon from "../../public/SkillIcon/react-2.svg";
import NextIcon from "../../public/SkillIcon/next-js.svg";
import materialIcon from "../../public/SkillIcon/material-ui-1.svg";
import GitIcon from "../../public/SkillIcon/github-icon.svg";

import NodeJSIcon from "../../public/SkillIcon/nodejs.svg";
import ExpressJSIcon from "../../public/SkillIcon/expressjs.svg";
import MongoDbIcon from "../../public/SkillIcon/mongodb.svg";
import Portfolio from "../../public/ExperienceImg/image.png";

export const SkillStaticData = [
  {
    name: "HTML",
    icon: HtmlIcon,
  },
  {
    name: "CSS",
    icon: CSSIcon,
  },
  {
    name: "JavaScript",
    icon: JsIcon,
  },
  {
    name: "Bootstrap",
    icon: BootStrapIcon,
  },
  {
    name: "Tailwind CSS",
    icon: TailwindIcon,
  },
  {
    name: "Material UI",
    icon: materialIcon,
  },
  {
    name: "React JS",
    icon: ReactIcon,
  },
  {
    name: "React Native",
    icon: ReactIcon,
  },
  {
    name: "Next JS",
    icon: NextIcon,
  },
  {
    name: "GITHUB",
    icon: GitIcon,
  },

  {
    name: "Express JS",
    icon: ExpressJSIcon,
  },

  {
    name: "Node JS",
    icon: NodeJSIcon,
  },
  {
    name: "MongoDb",
    icon: MongoDbIcon,
  },
];

export const ProjectsData = [
  {
    img: "https://harshrastogi.netlify.app/assets/AlignXImg-CMC2ynLK.png",
    title: "AlignX",
    desc: "A client-facing web app built with React.js, Redux Toolkit, and Material UI, offering a seamless user experience",
    url: "https://alignxupdated.netlify.app/",
    techStack: ["React JS", "MUI", "Redux/Tookit", "Formik"],
  },
  {
    img: "https://harshrastogi.netlify.app/assets/AdminDashboard-BxNtANgr.png",
    title: "Admin Dashboard",
    desc: "An Admin Dashboard created with Next.js and Material UI for user authentication and data management.",
    url: "https://github.com/HarshRa3/userAuthentication-typescript/tree/branch1",
    techStack: ["HTML", "CSS", "Tailwind CSS", "Next JS", "MUI", "Formik"],
  },
  {
    img: "https://harshrastogi.netlify.app/assets/PollImg-CpYD1VOM.png",
    title: "Poll Management",
    desc: "A React.js app for creating and managing polls with full CRUD functionality, powered by Redux Toolkit",
    url: "https://pollmangement.netlify.app/",
    techStack: ["React JS", "MUI", "Redux/Tookit", "Formik"],
  },
  {
    img: "https://harshrastogi.netlify.app/assets/todo-jSiN1psC.png",
    title: "Todo App",
    desc: "A CRUD Todo app built with React.js and Material UI, using Redux Toolkit for state management.",
    url: "https://todoappf.netlify.app/",
    techStack: ["React JS", "MUI", "Redux/Tookit", "Formik"],
  },
  {
    img: Portfolio.src,
    title: "Portfolio",
    desc: "A personal portfolio showcasing my web development skills, built with React.js and Material UI.",
    url: "https://harshrastogi.netlify.app/",
    techStack: ["React JS", "MUI"],
  },
];
