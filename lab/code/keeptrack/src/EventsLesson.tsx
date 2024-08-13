import React from "react";
import { Fruit } from "./FruitItem";

interface Props{
    fruits: Fruit[];
}

class EventsLesson extends React.Component<Props>{
    
    handleClickInClass(){
        window.alert('This doesnt work because ???? ');
    }

    handleClickInClass2(){
        window.alert('This works but not recommended because it is verbose');
    }

    handleClickInClass3 = () => {
        window.alert('This works and is recommended');
    }

    
    constructor(props: Props){
        super(props);
        //This can work but it is verbose and not recommended
        //This binding happens only once when the component is instantiated
        this.handleClickInClass2 = this.handleClickInClass2.bind(this);
    }
    
    
    render(){
        return(
            <div>
                <button onClick={handleClick}>Button with no args!</button>
                <button onClick={() => handleClickWithId(this.props.fruits[0].name)}>Button with args!</button>
                <button onClick={this.handleClickInClass}>Doesn't work because binding not same as in native JS </button>
                <button onClick={this.handleClickInClass2}>Works not recommended </button>
                <button onClick={this.handleClickInClass3}>Works and recommended</button>
                <button onClick={this.handleClickInClass.bind(this)}>Not recommended. runs everytime the component updates</button>
            </div>
        )
    }
}

export default EventsLesson;

function handleClick(){
    window.alert('click handled.');
}

function handleClickWithId(selectedFruit: string){
    window.alert(`Selected the first fruit: ${selectedFruit}`);
}