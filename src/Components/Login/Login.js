import React from 'react';
import Auth from './use.auth';

const Login = () => {
    const auth = Auth();
    console.log(auth.signInWithGoogle);
    return (
        <div>
            <h2>login page</h2>
            {
                auth.user ? <button onClick={auth.signOut}>Sign in Out </button>:<button onClick={auth.signInWithGoogle}>Sign in with google </button>
            }
            
        </div>
    );
};

export default Login;