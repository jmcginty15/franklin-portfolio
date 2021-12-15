import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import './NavBar.css';

const NavBar = () => {
    const navigate = useNavigate();
    const linkClasses = useSelector(state => state.navLinks);

    return (
        <div className="NavBar">
            <div className="NavBar-logo">
                DF
            </div>
            <div name="home" onClick={() => navigate('/')} className={linkClasses.home}>HOME</div>
            <div name="design" onClick={() => navigate('/design')} className={linkClasses.design}>DESIGN</div>
            <div name="video" onClick={() => navigate('/video')} className={linkClasses.video}>VIDEO</div>
            <div name="motion-graphics" onClick={() => navigate('/motion-graphics')} className={linkClasses.motionGraphics}>MOTION GRAPHICS</div>
            <div name="illustration" onClick={() => navigate('/illustration')} className={linkClasses.illustration}>ILLUSTRATION</div>
            <div name="audio-production" onClick={() => navigate('/audio-production')} className={linkClasses.audioProduction}>AUDIO PRODUCTION</div>
            <div name="marketing" onClick={() => navigate('/marketing')} className={linkClasses.marketing}>MARKETING</div>
            <div name="project-management" onClick={() => navigate('/project-management')} className={linkClasses.projectManagement}>PROJECT MANAGEMENT</div>
            <div name="contact" onClick={() => navigate('/contact')} className={linkClasses.contact}>CONTACT</div>
        </div>
    )
}

export default NavBar;
