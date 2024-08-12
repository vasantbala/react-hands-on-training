import { Project } from "./Project";
import ProjectListItem from "./ProjectListItem";

interface ProjectListProps{
    projects: Project[];
}

function ProjectList({ projects }: ProjectListProps){
    // return <pre>{JSON.stringify(projects, null, ' ')}</pre>;
    return(
        <div className="cols-sm">
            {projects.map((project) => (
                <ProjectListItem project={project} />
            ))}
            
        </div>        
        
        // <ul className="row">
        //     {projects.map((project) => (
        //         <li key={project.id}>{project.name}</li>
        //     ))}
        // </ul>
    );
}

export default ProjectList;