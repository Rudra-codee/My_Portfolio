import { github as githubIcon, externalLink } from "../assets";
import { projects } from "../constants";
import Button from "./Button";

const ProjectsList = () => {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <div
          key={project.id}
          className="p-6 bg-n-8 border border-n-6 rounded-3xl hover:border-n-5 transition-colors"
        >
          <div className="flex flex-col h-full">
            {project.imageUrl && (
              <div className="mb-4 overflow-hidden rounded-xl">
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
              </div>
            )}
            <h3 className="h3 mb-4">{project.title}</h3>
            <p className="body-2 mb-6 text-n-1/70">{project.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <span 
                  key={tag}
                  className="px-3 py-1 text-xs font-code font-bold rounded-full bg-n-7 text-n-1"
                >
                  {tag}
                </span>
              ))}
            </div>

            <ul className="flex-1 mb-6">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start mb-3">
                  <span className="text-n-1 mr-2">•</span>
                  <p className="body-2">{feature}</p>
                </li>
              ))}
            </ul>

            <div className="flex gap-4">
              <Button
                href={project.githubUrl}
                className="flex items-center gap-2"
                white
              >
                <img src={githubIcon} width={16} height={16} alt="GitHub" />
                View Code
              </Button>
              {project.demoUrl && (
                <Button
                  href={project.demoUrl}
                  className="flex items-center gap-2"
                >
                  <img src={externalLink} width={16} height={16} alt="Demo" />
                  Live Demo
                </Button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectsList;
