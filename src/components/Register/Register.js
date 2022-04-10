import React from 'react';

const Register = () => {
    return (
        <div>
            <h1>please Register</h1>
          
            <form action="">
                <input type="text" placeholder='enter your name'className='input-value' /> <br />
                <input type="email"  placeholder='enter your email'className='input-value' /> <br />
                <input type="password" placeholder='enter password' className='input-value'/> <br />
                <button>Login</button> <button>Google sign in</button>
            </form>
        </div>
    );
};

export default Register;