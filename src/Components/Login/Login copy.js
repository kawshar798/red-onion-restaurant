import React from 'react';
import Auth from './useAuth';
import logo from '../../images/logo.png'
import './Login.css'
const Login = () => {
    const auth = Auth();
    const handleSignIn = () =>{
        auth.signInWithGoogle()
        .then(res =>{
            window.location.pathname = '/shipment';
           
            
           
        })
    }

     const handleSignOut = () => {
        auth.signOut()
        .then(res => {
            window.location.pathname = '/';
        });
    }
    
    return (
        <div className="sign-up-area">
            <div className="container pt-5 pb-5">
                <h2>login page</h2>
                {
                    auth.user ? <button onClick={handleSignOut}>Sign in Out { auth.user.name} </button> : 
                    <button onClick={handleSignIn}>Sign in with google </button>
                }

                <div className="row">
                    <div className="col-4 offset-4">
                        <div className="singup-form pt-3 pb-3">
                            <img src={logo} alt="logo" className="img-fluid" />
                            <form className="mt-5">
                                <div className="form-group">
                                    <input className="form-control" type="text" name="name" placeholder="Enter Name" />
                                </div>
                                <div className="form-group">
                                    <input className="form-control" type="email" name="email" placeholder="Enter Email" />
                                </div>
                                <div className="form-group">
                                    <input className="form-control" type="password" name="name" placeholder="Enter Password" />
                                </div>
                                <div className="form-group">
                                    <input className="form-control" type="text" name="name" placeholder="Enter Confirm Password" />
                                </div>

                                <button className="btn btn-danger btn-block" type="submit">Sign Up</button>
                                <div className="option text-center">
                                    <label >Already Have an Account</label>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default Login;