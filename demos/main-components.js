// function HelloWorld(){
//     return <div className="container">Hello Function Component</div>;
// }

// function App(){
//     return (
//         <div>
//             <HelloWorld/>
//             <HelloWorld/>
//             <HelloWorld/>
//             <HelloWorld/>
//         </div>
//     );
// }

class HelloWorld extends React.Component{
    render(){
        return <div className="container">Hello Class Container</div>;
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HelloWorld />);