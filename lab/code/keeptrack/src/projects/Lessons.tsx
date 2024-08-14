import { useState } from "react";
import Hello from "../Hello";
import HelloWithStateAndEventHandlers from "../HelloWithState";
import FruitLister, { FRUIT_LIST } from "../Lists";
import EventsLesson from "../EventsLesson";
import ParentLesson from "../ParentLesson";
import FormsLesson from "../FormsLesson";
import Clock from "../StateLesson";
import Box from "../RenderPropsLesson";

export default function Lessons(){
    const [showLessons, setShowLessons] = useState(false);
    const toggleLessons = (event: any) => {
        const { checked } = event.target;
        setShowLessons(checked);
      };

      return (
        <>
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
     <Box render={()=> <h3>Injected from parent using render</h3>}/>
     <Box><h3>Injected from parent using children</h3></Box>
     {/* <ReactHookFormLesson/> */}
      {/* <ProjectsPage/> */}
      </>
    ): null

    }
        </>
      );
}