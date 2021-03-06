import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';
import useFirebase from '../../hooks/useFirebase/useFirebase'
const auth = getAuth(app)
const Home = () => {
const [user] = useAuthState(auth)

    return (
        <div>
            <h1>This is home </h1>
            <h5>Current user ;{user? user.displayName:"none"}</h5>
        </div>
    );
};

export default Home;