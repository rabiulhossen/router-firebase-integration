import React from 'react';
import useFirebase from '../../hooks/useFirebase/useFirebase';
import {useSignInWithGoogle} from 'react-firebase-hooks/auth'
import { getAuth } from 'firebase/auth';
import app from '../../firebase.init';
const auth = getAuth(app)
const Login = () => {
 const [signWithGoole] = useSignInWithGoogle(auth);
    return (
        <div>
            <h1>welcome login</h1>
            <form action="">
                
                <input type="email"  placeholder='enter your email' /> <br />
                <input type="password" placeholder='enter password' /> <br />
                <button>Login</button> 
            </form>
            <button onClick={()=>signWithGoole()}>Google sign in</button>
        </div>
    );
};

export default Login;