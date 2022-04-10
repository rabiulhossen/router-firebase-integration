import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase/useFirebase';
import './Header.css'

const Header = () => {
    const {user} =useFirebase();
    return (
        <div>
            <nav>
                <Link to="/home">Home</Link>
                <Link to="/products"> Products</Link>
                <Link to="/reviews">Reviews</Link>
                <Link to="/orders"> Orders</Link>
                <Link to="/register">Register</Link>
               {
                   user.uid ? 
                   <button>signOut</button>
                   :
                <Link to="/login"> Login</Link>
                }
            </nav>
        </div>
    );
};

export default Header;