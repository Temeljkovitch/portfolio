import { SiNetlify } from "react-icons/si";
import { FaGithubSquare } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  const { img, netlifyUrl, githubUrl, title, description } = project;
  return (
    <article className="bg-white rounded-lg shadow-md hover:shadow-xl hover:scale-105 duration-300">
      <img
        className="w-full rounded-t-lg object-cover h-64"
        src={img}
        alt={title}
      />
      <div className="p-8">
        <h2 className="text-sky-600 capitalize text-xl tracking-wide font-medium">
          {title}
        </h2>
        <p className="text-slate-600 mt-4 leading-loose">{description}</p>
        <div className="flex gap-x-4 mt-4">
          <a
            className="text-slate-500 hover:text-sky-600 duration-300"
            href={netlifyUrl}
          >
            <SiNetlify className="h-10 w-10" />
          </a>
          <a
            className="text-slate-500 hover:text-sky-600 duration-300"
            href={githubUrl}
          >
            <FaGithubSquare className="h-10 w-10" />
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
