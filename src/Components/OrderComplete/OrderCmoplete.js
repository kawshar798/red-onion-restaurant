import React from 'react'
import Bike from '../../images/bike.png'
import Rider from '../../images/helmet.png'
// import Bike from '../../images/bike.png'
import './OrderComplete.css'
function OrderCmoplete() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-6 offset-2">
                    <div className="order-complete">
                        <h2>order complete success</h2>
                    </div>
                </div>
                <div className="col-lg-4 mt-5 mb-5">
                    <div className="order-complete bg-light p-3 rounded ">
                        <img src={Bike} alt="bike" className="img-fluid biker"/>
                        <div className="bg-white  rounded p-3 my-3">
                            <ul className="location-info">
                                <li>Your Location

                                    <p> Dhanmondi 32</p>
                                </li>
                                <li>Shop Address

                                    <p>Gulshan Plaza Restaura GPR</p>
                                </li>
                            </ul>
                            </div>

                            <div className="delivery-time">
                                <h3>09:30</h3>
                                <p>Estimated delivery time</p>
                            </div>

                            <div className="bg-white  rounded p-3 my-3">
                            <div className=" d-flex align-items-center rider-info">
                                <img src={Rider} alt="rider"  />
                                <div className="rider-des">
                                    <h2>Hamim </h2>
                                    <p>Your rider</p>
                                </div>
                            </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderCmoplete
