import React from "react";

function FormsLession(){
    const [value, setValue] = React.useState('');       
    const handleChange = (event: any) => {
        setValue(event.target.value.toUpperCase());
    }

    const [username, setUsername] = React.useState('');    
    const [password, setPassword] = React.useState('');
    const handleSubmit = (event: any) => {
        event.preventDefault();

        const isValid = usernameError.trim() != '' && passwordError.trim() != '';
        if(!isValid){
            return;
        }

        console.log(username, password);
    }

    const [usernameError, setUsernameError] = React.useState('');
    const [passwordError, setPasswordError] = React.useState('');

    React.useEffect(() => {
        validate();
    }, [username, password]);

    function validate(){
        setUsernameError('');
        setPasswordError('');
        if(username === ''){
            setUsernameError('Username is required.');
        }

        if(password === ''){
            setPasswordError('Password is required.');
        }
    }

    function stateToString(){
        return JSON.stringify(
            {
                errors: {usernameError, passwordError}
            },
            null,
            ' '
        );
    }

    //uncontrolled components: form data is handled by DOM itself
    // const inputRef = React.useRef();

    // const handleSubmitUncontrolledComp = (event: any) =>{
    //     event.preventDefault();
    //     console.log(inputRef.current);
    //     //console.log(inputRef.current.value);
    // }
    

    return (
        <>
        <form>
            <input type="text" value={value} onChange={handleChange} />
            <pre>{value}</pre>
        </form>
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            name="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            />

            <input
            type="password"
            name="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            />
            <button type="submit">Sign In</button>
            <pre>{stateToString()}</pre>
        </form>

        {/* <form onSubmit={handleSubmitUncontrolledComp}>
            <input defaultValue="initial value" type="text" ref={inputRef} />
            <button>Submit</button>
        </form> */}
        </>
    );
}

export default FormsLession;