import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/nav/NavBar';
import ProjectList from './components/project-list/ProjectList';
import Project from './components/project/Project';
import projects from './projects';
import './App.css';

function App() {
  const design = [];
  const video = [];
  const motionGraphics = [];
  const illustration = [];
  const audioProduction = [];
  const marketing = [];
  const projectManagement = [];

  for (let project of projects) {
    switch (project.category) {
      case 'Design':
        design.push(project);
        break;
      case 'Video':
        video.push(project);
        break;
      case 'Motion Graphics':
        motionGraphics.push(project);
        break;
      case 'Illustration':
        illustration.push(project);
        break;
      case 'Audio Production':
        audioProduction.push(project);
        break;
      case 'Marketing':
        marketing.push(project);
        break;
      case 'Project Management':
        projectManagement.push(project);
        break;
    }
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <div>
          <Routes>
            <Route exact path="/" element={<ProjectList projects={projects} />} />
            <Route exact path="/design" element={<ProjectList projects={design} />} />
            <Route exact path="/video" element={<ProjectList projects={video} />} />
            <Route exact path="/motion-graphics" element={<ProjectList projects={motionGraphics} />} />
            <Route exact path="/illustration" element={<ProjectList projects={illustration} />} />
            <Route exact path="/audio-production" element={<ProjectList projects={audioProduction} />} />
            <Route exact path="/marketing" element={<ProjectList projects={marketing} />} />
            <Route exact path="/project-management" element={<ProjectList projects={projectManagement} />} />
            <Route exact path="/projects/:projectRoute" element={<Project />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
