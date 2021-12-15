import { useParams } from 'react-router-dom';
import CategoryTag from './CategoryTag';
import projects from '../../projects';
import './Project.css';

const Project = () => {
    const { projectRoute } = useParams();
    let project = null;
    let i = 0;
    while (!project) {
        if (projects[i].route === projectRoute) project = projects[i];
        i++;
    }

    return (
        <div className="Project">
            <div className="Project-content">
                <h1 className="Project-title">{project.name.toUpperCase()}</h1>
                <h2 className="Project-subtitle">{project.tagline}</h2>
                <img className="Project-image" src={project.imageUrl} alt={`${projectRoute}`} />
                {project.longDescription.map((p, i) => <p key={i} className="Project-text">{p}</p>)}
                <CategoryTag category={project.category.toUpperCase()} />
            </div>
        </div>
    )
}

export default Project;
