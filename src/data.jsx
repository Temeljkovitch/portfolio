import { nanoid } from "nanoid";
import {
  FaHtml5,
  FaJs,
  FaReact,
  FaLinkedin,
  FaBehance,
  FaGithub,
  FaGithubSquare,
  FaCss3Alt,
} from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiNetlify } from "react-icons/si";

export const links = [
  { id: nanoid(), href: "#home", text: "Início" },
  { id: nanoid(), href: "#skills", text: "habilidades" },
  { id: nanoid(), href: "#about", text: "sobre" },
  { id: nanoid(), href: "#projects", text: "projetos" },
];

export const skills = [
  {
    id: nanoid(),
    title: "HTML & CSS",
    icon: <FaHtml5 className="h-16 w-16 text-sky-600" />,
    icon2: <FaCss3Alt className="h-16 w-16 text-sky-600" />,
    text: "Vasta experiência com HTML e CSS, criando com eficiência sites visualmente atraentes e responsivos que prezam pela experiência do usuário.",
  },
  {
    id: nanoid(),
    title: "Javascript",
    icon: <FaJs className="h-16 w-16 text-sky-600" />,
    text: "Possuo expertise em Javascript, desenvolvendo aplicações web interativas e dinâmicas que priorizam uma experiência de usuário fluida.",
  },
  {
    id: nanoid(),
    title: "React",
    icon: <FaReact className="h-16 w-16 text-sky-600" />,
    text: "Profiência em React, projetando aplicações front-end eficientes e interativas com ênfase na arquitetura baseada em componentes.",
  },
  {
    id: nanoid(),
    title: "MongoDB",
    icon: <SiMongodb className="h-16 w-16 text-sky-600" />,
    text: "Competente em MongoDB, criando e gerenciando bancos de dados eficientes e escaláveis, com armazenamento de dados otimizado e consultas de alto desempenho.",
  },
];

export const socialLinks = [
  {
    id: nanoid(),
    icon: <FaGithub className="h-10 w-10" />,
    href: "https://github.com/Temeljkovitch",
  },
  {
    id: nanoid(),
    icon: <FaLinkedin className="h-10 w-10" />,
    href: "https://www.linkedin.com/in/goran-temeljkovitch-58b059226/",
  },
  {
    id: nanoid(),
    icon: <FaBehance className="h-10 w-10" />,
    href: "https://www.behance.net/",
  },
];

export const projects = [
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "https://react-projects.netlify.app/",
    github: "https://github.com/john-smilga",
    title: "first project",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
    icon1: <SiNetlify className="h-10 w-10" />,
    icon2: <FaGithubSquare className="h-10 w-10" />,
  },
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/2148222/pexels-photo-2148222.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "https://react-projects.netlify.app/",
    github: "https://github.com/john-smilga",
    title: "second project",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
    icon1: <SiNetlify className="h-10 w-10" />,
    icon2: <FaGithubSquare className="h-10 w-10" />,
  },
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "https://react-projects.netlify.app/",
    github: "https://github.com/john-smilga",
    title: "third project",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
    icon1: <SiNetlify className="h-10 w-10" />,
    icon2: <FaGithubSquare className="h-10 w-10" />,
  },
];

