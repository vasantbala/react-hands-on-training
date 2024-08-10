import React from "react";

export interface Props{
    name: string;
    enthusiasmLevel?: number;
}

class Hello2 extends React.Component<Props>{
    render(){
        const { name, enthusiasmLevel = 1} = this.props;
        if(enthusiasmLevel <= 0){
            throw new Error("You could be more enthusiastic :D");
        }

        return(
            <div className="container">
                <div className="greeting">
                    Hello {name + getExclamationMark(enthusiasmLevel)}
                </div>
            </div>
        );
    };
}

export default Hello2;

function getExclamationMark(numChars: number){
    return Array(numChars + 1).join("!");
}