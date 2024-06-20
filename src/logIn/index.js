import './index.css'
import { useState } from 'react';
import { login } from './utils'


const Login = () => {
    const [Username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    console.log((Username));
    console.log((password));

    const handleLogin = async (e) => {
        e.preventDefault();

        console.log('are we here?');
        const result = await login ({username: Username, password});
        console.log({result})
    }
    return(
        <form onSubmit={handleLogin}>
            <h2>Login</h2>
            <input placeholder ="Enter Username" type="text" onChange = {(e)=>setUsername(e.target.value)}/> 
            <br/>
            <input placeholder="Enter Password" type="password" onChange= {(e)=>setPassword(e.target.value)}/>
            <br/>
            <button type="submit">LogIn</button>
        </form>
    );

} 

export default Login;