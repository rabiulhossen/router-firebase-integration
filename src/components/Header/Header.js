import { getAuth,signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import app from '../../firebase.init';
import useFirebase from '../../hooks/useFirebase/useFirebase';
import './Header.css'
const auth = getAuth(app)
const Header = () => {
   const[user] =useAuthState(auth)
    return (
        <div>
            <nav>
                <Link to="/home">Home</Link>
                <Link to="/products"> Products</Link>
                <Link to="/reviews">Reviews</Link>
                <Link to="/orders"> Orders</Link>
                <Link to="/register">Register</Link>
               {
                   user?.uid ? 
                   <button onClick={()=>signOut(auth)}>signOut</button>
                   :
                <Link to="/login"> Login</Link>
                }
            </nav>
        </div>
    );
};

export default Header;