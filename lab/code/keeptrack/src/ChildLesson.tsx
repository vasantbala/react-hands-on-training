interface Props{    
    onRequest: () => void;
    onRequestWithArgs: (name: string) => void;
};


function ChildLession(props: Props){    
    const handleClick = () => {
        props.onRequest();
    };

    const handleClickWithArgs = () => {
        props.onRequestWithArgs('Hi');
    }
    return (
        <>
        <button onClick={handleClick}>Child</button>
        <button onClick={handleClickWithArgs}>Child with args</button>
        </>
    );
}

export default ChildLession;