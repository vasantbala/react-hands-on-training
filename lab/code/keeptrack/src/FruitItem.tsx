import React from "react";

export interface Fruit{
    id: number;
    name: string;
}

interface Props{
    fruit: Fruit
}

class FruitItem extends React.Component<Props>{
    render(){
        const {fruit} = this.props;
        return <li>{fruit.name}</li>
    }
}

export default FruitItem;