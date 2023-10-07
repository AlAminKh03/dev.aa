import data from "../../data/project.json";
import SingleProject from "./SingleProject";

const Projects = () => {
  const { projects } = data;
  return (
    <div className="my-20">
      <div className="grid gri-cols-2">
        <div></div>
        <div></div>
      </div>
      <div className="grid grid-cols-2 gap-10">
        {projects.map((project) => {
          return (
            <div key={project.id}>
              <SingleProject project={project} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
