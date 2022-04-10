import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';
import useFirebase from '../../hooks/useFirebase/useFirebase';
const auth = getAuth(app)
const Products = () => {

const [user] = useAuthState(auth)
    return (
        <div>
            <h1>name:{user? user.displayName :"poooooori"}</h1>
        </div>
    );
};

export default Products;