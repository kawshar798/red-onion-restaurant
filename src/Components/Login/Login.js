import React, { useState } from 'react';
import Auth from './useAuth';
import { useForm } from 'react-hook-form';
import logo from '../../images/logo.png'
import './Login.css'
const Login = () => {

    //Use react hook form 
    const [returnUser, setReturnUser] = useState(false);
    const { register, handleSubmit, watch, errors } = useForm();

    const auth = Auth();

    const onSubmit = data => {
        if (returnUser) {
            if (data.email && data.password) {
                auth.signIn(data.email, data.password);
               
            }
        } else {
            if (data.name && data.email && data.password && data.confirm_password) {
                auth.signUp(data.email, data.confirm_password, data.name)
               
            }
        }

    }

    return (
        <div className="sign-up-area">
            <div className="container pt-5 pb-5">
                <div className="row">
                    <div className="col-4 offset-4">
                        <div className="singup-form pt-3 pb-3">
                            <img src={logo} alt="logo" className="img-fluid" />

                            {
                                returnUser ?
                                    <form onSubmit={handleSubmit(onSubmit)} className="py-5">
                                        {
                                            auth.user != null && <p className="text-danger">* {auth.user.error}</p>
                                        }
                                        <div className="form-group">
                                            <input name="email" className="form-control" ref={register({ required: true })} placeholder="Email" />
                                            {errors.email && <span className="error">Email is required</span>}
                                        </div>
                                        <div className="form-group">
                                            <input type="password" name="password" className="form-control" ref={register({ required: true })} placeholder="Password" />
                                            {errors.password && <span className="error">Password is required</span>}
                                        </div>

                                        <div className="form-group">
                                            <button className="btn btn-danger btn-block" type="submit">Sign In</button>
                                        </div>
                                        <div className="option text-center">
                                            <label onClick={() => setReturnUser(false)}>Create a new Account</label>
                                        </div>
                                    </form>
                                    :
                                    <form onSubmit={handleSubmit(onSubmit)} className="py-5">
                                        {
                                            auth.user != null && <p className="text-danger">* {auth.user.error}</p>
                                        }
                                        <div className="form-group">
                                            <input name="name" className="form-control" ref={register({ required: true })} placeholder="Name" />
                                            {errors.name && <span className="error">Name is required</span>}
                                        </div>
                                        <div className="form-group">
                                            <input name="email" className="form-control" ref={register({ required: true })} placeholder="Email" />
                                            {errors.email && <span className="error">Email is required</span>}
                                        </div>
                                        <div className="form-group">
                                            <input type="password" name="password" className="form-control" ref={register({ required: true })} placeholder="Password" />
                                            {errors.password && <span className="error">Password is required</span>}
                                        </div>
                                        <div className="form-group">
                                            <input type="password" name="confirm_password" className="form-control" ref={register({
                                                validate: (value) => value === watch('password')
                                            })} placeholder="Confirm Password" />
                                            {errors.confirm_password && <span className="error">Passwords don't match.</span>}
                                        </div>
                                        <div className="form-group">
                                            <button className="btn btn-danger btn-block" type="submit">Sign Up</button>
                                        </div>
                                        <div className="option text-center">
                                            <label onClick={() => setReturnUser(true)}>Already Have an Account</label>
                                        </div>
                                    </form>

                            }

                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default Login;