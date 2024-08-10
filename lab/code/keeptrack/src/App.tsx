import ProjectsPage from './projects/ProjectsPage'
import './App.css';
import Hello from './Hello';
import HelloWithStateAndEventHandlers from './HelloWithState';

function App() {
  return (
    <div className="container">       
       <Hello name="Warner" enthusiasmLevel={3}/>
       <Hello name="Pat From Components" enthusiasmLevel={3}/>
       <HelloWithStateAndEventHandlers name="WithState" enthusiasmLevel={3}/>
       <ProjectsPage/>
      {/* <Hello name="Tim" enthusiasmLevel={0}/> */}
    </div>
  );
}

export default App;
