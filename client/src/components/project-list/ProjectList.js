import { useDispatch } from 'react-redux';
import { setActiveNavLink } from '../actions/navLinks';
import ProjectCard from './ProjectCard';
import './ProjectList.css';

const ProjectList = ({ projects }) => {
    const dispatch = useDispatch();

    const url = window.location.href;
    const route = url.slice(url.lastIndexOf('/') + 1);
    switch (route) {
        case '':
            dispatch(setActiveNavLink('home'));
            break;
        case 'design':
            dispatch(setActiveNavLink('design'));
            break;
        case 'video':
            dispatch(setActiveNavLink('video'));
            break;
        case 'motion-graphics':
            dispatch(setActiveNavLink('motionGraphics'));
            break;
        case 'illustration':
            dispatch(setActiveNavLink('illustration'));
            break;
        case 'audio-production':
            dispatch(setActiveNavLink('audioProduction'));
            break;
        case 'marketing':
            dispatch(setActiveNavLink('marketing'));
            break;
        case 'project-management':
            dispatch(setActiveNavLink('projectManagement'));
            break;
        case 'contact':
            dispatch(setActiveNavLink('contact'));
            break;
    }

    return (
        <div className="ProjectList-container">
            <div className="ProjectList">
                {projects.map(project => <ProjectCard key={project.id} project={project} />)}
            </div>
        </div>
    )
}

export default ProjectList;
