import ProjectsPage from './projects/ProjectsPage'
import './App.css';
import Hello from './Hello';
import HelloWithStateAndEventHandlers from './HelloWithState';
import FruitLister, { FRUIT_LIST } from './Lists';
import EventsLesson from './EventsLesson';
import ProjectList from './projects/ProjectList';
import { MOCK_PROJECTS } from './projects/MockProjects';
import Clock from './StateLesson';
import ParentLesson from './ParentLesson';
import { Project } from './projects/Project';
import FormsLesson from './FormsLesson';
import ReactHookFormLesson from './ReactHookFormLesson';
import { useDebugValue, useState } from 'react';
function App() {
  const [projects, setProjects] = useState<Project[]>(MOCK_PROJECTS);

  const saveProject = (project: Project) => {
    let updatedProjects = projects.map((p: Project) => {
      return p.id === project.id ? project : p;
    });
    setProjects(updatedProjects);
  }

  return (
    <div className="container">       
       <Hello name="Warner" enthusiasmLevel={3}/>
       <Hello name="Pat From Components" enthusiasmLevel={3}/>
       <HelloWithStateAndEventHandlers name="WithState" enthusiasmLevel={3}/>
       <FruitLister fruits={FRUIT_LIST} />
       <EventsLesson fruits={FRUIT_LIST}/>
       <Clock/>
      <ParentLesson/>
      <FormsLesson />
      {/* <ReactHookFormLesson/> */}
       {/* <ProjectsPage/> */}
       <ProjectList
         onSave={saveProject}
         projects={projects}/>
      {/* <Hello name="Tim" enthusiasmLevel={0}/> */}
    </div>
  );
}

export default App;
