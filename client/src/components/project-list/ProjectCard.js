import './ProjectCard.css';

const ProjectCard = ({ project }) => {
    let style = null;
    if (project.imageUrl) style = {
        backgroundImage: `url("${project.imageUrl}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    };
    else style = { backgroundColor: `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})` };

    return (
        <div className="ProjectCard" style={style}>
            <div className="ProjectCard-container">
                <div className="ProjectCard-content">
                    <h4 className="ProjectCard-title">{project.name.toUpperCase()}</h4>
                    <p className="ProjectCard-description">{project.shortDescription}</p>
                    <a href={`/projects/${project.route}`} className="ProjectCard-link">Learn more</a>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;
