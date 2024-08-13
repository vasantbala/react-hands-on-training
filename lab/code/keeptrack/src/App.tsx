import ProjectsPage from './projects/ProjectsPage'
import './App.css';
import Hello from './Hello';
import HelloWithStateAndEventHandlers from './HelloWithState';
import FruitLister, { FRUIT_LIST } from './Lists';
import EventsLession from './EventsLession';
import ProjectList from './projects/ProjectList';
import { MOCK_PROJECTS } from './projects/MockProjects';
import Clock from './StateLesson';
import ParentLession from './ParentLesson';
import { Project } from './projects/Project';
import FormsLession from './FormsLession';
function App() {

  const saveProject = (project: Project) => {
    console.log('Saving Project:', project);
  }

  return (
    <div className="container">       
       <Hello name="Warner" enthusiasmLevel={3}/>
       <Hello name="Pat From Components" enthusiasmLevel={3}/>
       <HelloWithStateAndEventHandlers name="WithState" enthusiasmLevel={3}/>
       <FruitLister fruits={FRUIT_LIST} />
       <EventsLession fruits={FRUIT_LIST}/>
       <Clock/>
      <ParentLession/>
      <FormsLession />
       {/* <ProjectsPage/> */}
       <ProjectList
         onSave={saveProject}
         projects={MOCK_PROJECTS}/>
      {/* <Hello name="Tim" enthusiasmLevel={0}/> */}
    </div>
  );
}

export default App;
