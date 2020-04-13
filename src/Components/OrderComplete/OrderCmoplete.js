import React from 'react'
import Bike from '../../images/bike.png'
import Rider from '../../images/helmet.png'
import Map from '../../images/map.png'
import './OrderComplete.css'
function OrderCmoplete() {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-8 ">
                    <div className="order-complete">
                    <img src={Map} alt="bike" className="img-fluid"/>
                    </div>
                </div>
                <div className="col-lg-4">
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
                            <button className="btn btn-danger btn-block rounded mt-5 mb-2">Contact</button>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderCmoplete
