import React from 'react';
import logo from '../../images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import './Header.css'
import { useAuth } from '../Login/useAuth';

const Header = (props) => {
 const auth = useAuth();
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
                            <Link to="/shipment"><FontAwesomeIcon className="cart-icon" icon={faCartArrowDown} /><span>{props.cart.length}</span></Link>
                            {auth.user ? <Link to="">{auth.user.displayName}</Link> :
                                <Link to="/login">Login </Link>
                            }
                            {auth.user ?
                              <Link to="/" className="nav-link">
                                <button onClick={() => {auth.signOut()}} className="btn btn-danger btn-rounded">Sign Out</button>
                            </Link>
                            :
                              <Link to="/login" className="signup-btn">Sign Up</Link>
                            }
                        </nav>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;