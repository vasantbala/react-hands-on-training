import ProjectsPage from './projects/ProjectsPage'
import './App.css';
import HomePage from './home/HomePage';
import { BrowserRouter, NavLink, Route, Router, Routes } from 'react-router-dom';
import ProjectPage from './projects/ProjectPage';
import Lessons from './projects/Lessons';
function App() {
  return (
    <BrowserRouter>
         <header className="sticky">
        <span className="logo">
          <img src="/assets/logo-3.svg" alt="logo" width="49" height="99" />
        </span>
        <NavLink to="/"  className="button rounded">
          <span className="icon-home"></span>
          Home
        </NavLink>
        <NavLink to="/projects" className="button rounded">
          Projects
        </NavLink>
        <NavLink to="/lessons" className="button rounded">
          Lessons
        </NavLink>
      </header>
    <div className="container">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/projects/:id" element={<ProjectPage />} />
              <Route path="/lessons" element={<Lessons/>} />
            </Routes>
          </div>
    </BrowserRouter>
        
      );
}


export default App;
