import SectionTitle from "./SectionTitle";
import ProjectCard from "./ProjectCard";
import { useFetchProjects } from "../fetchProjects";

const Projects = () => {
  const { loading, projects } = useFetchProjects();

  if (loading) {
    return <section>
      <h2>Loading...</h2>
    </section>
  }
  return (
    <section className="bg-base-200">
    <div className=" mx-auto max-w-7xl px-8 py-24" id="projects">
      <SectionTitle title="projetos" />
      <div className="grid lg:grid-cols-2 xl:grid-cols-3 py-16 gap-8">
        {projects.map((project) => {
          return <ProjectCard project={project} key={project.id} />;
        })}
      </div>
    </div>
    </section>
  );
};

export default Projects;
