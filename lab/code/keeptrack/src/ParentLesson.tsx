import React from "react";
import ChildLession from "./ChildLesson";

function handleParentButtonClick(){
    window.alert('Clicked parent button');
}

function handleChildButtonClickFromParent(){
    window.alert('Clicked child button but handled in Parent');
}

function handleChildButtonClickFromParentWithArgs(name: string){
    window.alert(`Clicked child button but handled in Parent: ${name}`);
}

interface ResultProps{
    value: number
}

const Result = (resultProps: ResultProps) => {
    return <div>Result: {resultProps.value}</div>;
};
  
function ParentLession(){
    const [counter, setCounter] = React.useState(0);

    const incrementCounter = () => {
        setCounter((prevCounter) => prevCounter + 1);
    }

    return (
    <div>        
        <button onClick={incrementCounter}>Lift Up</button>
        <Result value={counter}/>
        <button onClick={handleParentButtonClick}>Parent</button>
        <ChildLession 
            onRequest={handleChildButtonClickFromParent}
            onRequestWithArgs={handleChildButtonClickFromParentWithArgs}                
            />
        
    </div>
    );
}

export default ParentLession;