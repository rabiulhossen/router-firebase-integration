import React from 'react';
import useFirebase from '../../hooks/useFirebase/useFirebase';

const Login = () => {
    const {signInGoogle}= useFirebase();
    return (
        <div>
            <h1>welcome login</h1>
            <form action="">
                
                <input type="email"  placeholder='enter your email' /> <br />
                <input type="password" placeholder='enter password' /> <br />
                <button>Login</button> 
            </form>
            <button onClick={signInGoogle}>Google sign in</button>
        </div>
    );
};

export default Login;