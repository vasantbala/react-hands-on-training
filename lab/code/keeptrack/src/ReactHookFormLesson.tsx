import React from "react";
import { useForm, Resolver } from "react-hook-form"

function ReactHookFormLesson(){

    const { register, handleSubmit } = useForm();

    // const [username, setUsername] = React.useState('');
    // const [password, setPassword] = React.useState('');
    // const handleSubmit = (event: any) => {
    //     event.preventDefault();
    //     console.log(username, password);
    // };

    const signIn = (data: any) => {
        console.log(data);
    };

    console.log({ ...register("username") });

    return(
        <form onSubmit={handleSubmit(signIn)}>
            <input type="text" {...register('username')} placeholder="Username" />
            <input
                type="password"
                {...register('password')}
                placeholder="Password"
            />
            {/* <select {...register('department')}>
                <option value="">Select...</option>
                <option value="hr">Human Resources</option>
                <option value="pr">Public Relations</option>
                <option value="support">Support</option>
            </select>
            <br />
            <p className="alert"></p>
            <br />
            <textarea {...register('message')} />
            <br />
            <input {...register('agreeToTerms')} type="checkbox" />
            I agree to the terms and conditions.
            <br />
            <button>Send</button>
            <pre>{JSON.stringify(watch())}</pre> */}
            <button type="submit">Sign In</button>
        </form>
    //     <form onSubmit={handleSubmit}>
    //   <input
    //     type="text"
    //     name="username"
    //     value={username}
    //     onChange={(event) => setUsername(event.target.value)}
    //   />
    //   <input
    //     type="password"
    //     name="password"
    //     value={password}
    //     onChange={(event) => setPassword(event.target.value)}
    //   />
    //   <button type="submit">Sign In</button>
    // </form>
    );
}

export default ReactHookFormLesson;