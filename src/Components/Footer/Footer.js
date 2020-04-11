import React from 'react';
import Logo from '../../images/wlogo.png';
import './Footer.css';
const ItemDetails = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <img src={Logo} alt="white footer"  className="img-fluid footer-img"/>
                    </div>
                    <div className="col-lg-3">
                        <ul className="footer-list">
                            <li>About Online Food</li>
                            <li>Read Our Blog</li>
                            <li>Sign Up To Deliver</li>
                            <li>Add Your Restaurant</li>
                        </ul>
                    </div>
                    <div className="col-lg-3">
                        <ul className="footer-list" >
                            <li>Get Help</li>
                            <li>Read FAQ</li>
                            <li>View All Cities</li>
                            <li>Restaurant Near Me</li>
                        </ul>
                    </div>
               
               
                </div>
                <div className="copy-right">
                    <div className="row">
                        <div className="col-lg-6">
                            <p>Copyright ©  2020 Online Food</p>
                        </div>
                        <div className="col-lg-6">
                            <ul className="terms-condition">
                                <li className="list-inline-item">Privacy Policy</li>
                                <li className="list-inline-item">Terms of Use</li>
                                <li className="list-inline-item">Pricing</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default ItemDetails;