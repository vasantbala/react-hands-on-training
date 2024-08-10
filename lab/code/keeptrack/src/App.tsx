import React from 'react';
import ProjectsPage from './projects/ProjectsPage'
import './App.css';
import Hello from './Hello';

function App() {
  return (
    <div className="container">
      <ProjectsPage/>
      <Hello name="David"/>
      <Hello name="Warner" enthusiasmLevel={3}/>
      <Hello name="Tim" enthusiasmLevel={0}/>
    </div>
  );
}

export default App;
