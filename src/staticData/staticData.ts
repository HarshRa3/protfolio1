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
import DocGenesys from "../../public/ExperienceImg/docGenesys.png";
import IDM from "../../public/ExperienceImg/IDM.png";
import StarEnablerImg from "../../public/ExperienceImg/starenabler.webp";
import BSquareImg from "../../public/ExperienceImg/bsquare.png";

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
    img: StarEnablerImg.src,
    title: "Star Enabler",
    desc: "An e-commerce seller account management & growth platform empowering brands to scale on Amazon, Flipkart, Meesho, & global marketplaces.",
    url: "https://starenabler.com/",
    techStack: [
      "Next.js",
      "React JS",
      "Tailwind CSS",
      "Framer Motion",
      "Node.js",
    ],
  },
  {
    img: BSquareImg.src,
    title: "BSquare IT Solutions",
    desc: "Enterprise IT solutions, cloud services & digital transformation portal featuring cloud metrics, IT services, and interactive dashboards.",
    url: "https://bsquaress.com/",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Chart.js",
      "GSAP",
    ],
  },
  {
    img: IDM.src,
    title: "Docgenesys",
    desc: "A Document Management System designed for enterprises to upload, organize, search, and manage PDFs, MS Docs, and files securely.",
    url: "http://sandbox.docgenesys.com/",
    techStack: [
      "React JS",
      "MUI",
      "Tailwind CSS",
      "React Hook Form",
    ],
  },
  {
    img: DocGenesys.src,
    title: "DocGenesys",
    desc: "A core module of Document Management System transforming business documentation with automated workflow features.",
    url: "https://docgenesys.com/",
    techStack: ["React JS", "MUI", "Tailwind CSS"],
  },
  {
    img: "https://harshrastogi.netlify.app/assets/AlignXImg-CMC2ynLK.png",
    title: "AlignX",
    desc: "A client-facing web application built with React.js, Redux Toolkit, and Material UI for streamlined client interaction.",
    url: "https://alignxupdated.netlify.app/",
    techStack: ["React JS", "MUI", "Redux Toolkit", "Formik"],
  },
  {
    img: "https://harshrastogi.netlify.app/assets/AdminDashboard-BxNtANgr.png",
    title: "Admin Dashboard",
    desc: "A full-featured Admin Dashboard with user authentication, data management, and responsive analytics widgets.",
    url: "https://github.com/HarshRa3/userAuthentication-typescript/tree/branch1",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "MUI"],
  },
  {
    img: Portfolio.src,
    title: "Personal Portfolio",
    desc: "Personal portfolio website built with modern web technologies, showcasing skills, experience, and key projects.",
    url: "https://harshrastogi.netlify.app/",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    img: "https://harshrastogi.netlify.app/assets/PollImg-CpYD1VOM.png",
    title: "Poll Management",
    desc: "A React.js application for creating, managing, and tracking polls with real-time state management using Redux Toolkit.",
    url: "https://pollmangement.netlify.app/",
    techStack: ["React JS", "MUI", "Redux Toolkit", "Formik"],
  },
];
