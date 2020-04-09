import React from 'react';
import logo from '../../images/logo.png'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import './Header.css'

const Header = () => {
    return (
 <div className="header">
            <div className="container">
            <div className="row">
                <div className="col-lg-4">
                        <Link to="/" className="logo">
                            <img src={logo} alt="red onion" className="img-fluid" />
                        </Link>
                
                </div>
                <div className="col-lg-8 d-flex justify-content-end">
                    <nav className="d-flex align-items-center">
                    <a href="#">Cart</a>
                    <a href="#">Login</a>
                    <a href="#">Sign Up</a>
                    </nav>
                    
                </div>
            </div>
        </div>
 </div>
    );
};

export default Header;