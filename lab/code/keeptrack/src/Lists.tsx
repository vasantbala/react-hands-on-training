import React from "react";
import ReactDOM from "react-dom";
import FruitItem, { Fruit } from "./FruitItem";




export interface Props{
    fruits: Fruit[];    
}

export const FRUIT_LIST = [
    {id: 1, name: 'Apple'},
    {id: 2, name: 'Orange'},
    {id: 3, name: 'Blueberry'},
    {id: 4, name: 'Banana'},
    {id: 5, name: 'Kiwi'},
    {id: 6, name: 'Raspberry'},
];    

class FruitLister extends React.Component<Props>{
    
    render(){
        const { fruits } = this.props;
        return FruitList(fruits);
    }
}

export default FruitLister;

function ForLoop(){
    const numbers = [1,2,3,4,5];
    const tens = [];

    for(let index=0; index < numbers.length; index++){
        const number = numbers[index];
        tens.push(number*10);
    }
    console.log(tens);
}

function ArrayForEach(){
    const numbers = [1,2,3,4,5];
    const tens = numbers.map(function (number){
        return number * 10;
    });

    console.log(tens);
}

function ArrayMap(){
    const numbers = [1,2,3,4,5];
    const tens = numbers.map((number) => number * 10);
    console.log(tens);   
}


function FruitList(fruits: Fruit[]){
    const fruitListItems = fruits.map((fruit, index) => (
        <FruitItem key={fruit.id}  fruit={fruit} />
    ));
    return <ul>{fruitListItems}</ul>
}