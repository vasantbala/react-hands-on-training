import React, { SyntheticEvent } from "react";

export interface Props{
    name: string;
    enthusiasmLevel?: number;
}

interface State {
    currentEnthusiasm: number;
}

class HelloWithStateAndEventHandlers extends React.Component<Props, State>{
    state = { currentEnthusiasm: this.props.enthusiasmLevel || 1 };

    onIncrement = () => {
        this.updateEnthusiasm(1);
    }

    onDecrement = () => {
        this.updateEnthusiasm(-1);
    }
   
    onIncrement2 = (event: SyntheticEvent) => {
        console.log(event);
        this.updateEnthusiasm(1);
    }

    onDecrement2 = (event: SyntheticEvent) => {
        console.log(event.target);
        this.updateEnthusiasm(-1);
    }

    render(){
        const { name } = this.props;


        if(this.state.currentEnthusiasm <= 0){
            throw new Error("You could be more enthusiastic :D");
        }

        return(
            <div className="hello">
                <div className="greeting">
                    Hello {name + getExclamationMark(this.state.currentEnthusiasm)}
                </div>
                <button onClick={this.onDecrement}>-</button>
                <button onClick={this.onIncrement}>+</button>
                <button onClick={this.onDecrement}>SyntheticEvent -</button>
                <button onClick={this.onIncrement}>SyntheticEvent +</button>
            </div>
        );
    }

    updateEnthusiasm(change: number){
        this.setState((currentState) => {
            return { currentEnthusiasm: currentState.currentEnthusiasm + change };
        });
    }
}

export default HelloWithStateAndEventHandlers;

function getExclamationMark(numChars: number){
    return Array(numChars + 1).join("!");
}