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
import { useDebugValue, useEffect, useState } from 'react';
import { projectAPI } from './projects/projectAPI';
function App() {
  //const [projects, setProjects] = useState<Project[]>(MOCK_PROJECTS);
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(false);
  const [showLessons, setShowLessons] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);

  const saveProject = (project: Project) => {
    // let updatedProjects = projects.map((p: Project) => {
    //   return p.id === project.id ? project : p;
    // });
    // setProjects(updatedProjects);

    projectAPI.put(project)
    .then((updatedProject) => {
      let updatedProjects = projects.map((p: Project) => {
        return p.id === project.id ? new Project(updatedProject) : p;
      });
      setProjects(updatedProjects);
    })
    .catch((e) => {
      if(e instanceof Error){
        setError(e.message);
      }
    });
  }

  const toggleLessons = (event: any) => {
    const { checked } = event.target;
    setShowLessons(checked);
  };

  useEffect(() => {
  async function loadProjects() {
          setLoading(true);
          try {
            const data = await projectAPI.get(1);
            setError('');
            setProjects(data);
          }
           catch (e) {
            if (e instanceof Error) {
              setError(e.message);
            }
            } finally {
            setLoading(false);
          }
        }
        loadProjects();
      }, []);

  return (
    <div className="container">     
       <h1>Projects</h1>
       {error && (
        <div className="row">
          <div className="card large error">
            <section>
              <p>
                <span className="icon-alert inverse "></span>
                {error}
              </p>
            </section>
          </div>
        </div>
      )}
       <ProjectList
         onSave={saveProject}
         projects={projects}/>

      {
        loading && (
          <div className='center-page'>
            <span className="spinner primary"></span>
            <p>Loading...</p>
          </div>
        )}

<label htmlFor="chkShowLessons">Show Lessons</label>
    <input type="checkbox" id="chkShowLessons" checked={showLessons} onChange={toggleLessons} />
    
    { showLessons ? (
      <>
      <Hello name="Warner" enthusiasmLevel={3}/>
      <Hello name="Pat From Components" enthusiasmLevel={3}/>
     {/* <Hello name="Tim" enthusiasmLevel={0}/> */}
      <HelloWithStateAndEventHandlers name="WithState" enthusiasmLevel={3}/>
      <FruitLister fruits={FRUIT_LIST} />
      <EventsLesson fruits={FRUIT_LIST}/>
      <Clock/>
     <ParentLesson/>
     <FormsLesson />
     {/* <ReactHookFormLesson/> */}
      {/* <ProjectsPage/> */}
      </>
    ): null

    }
    </div>
  );
}


export default App;
