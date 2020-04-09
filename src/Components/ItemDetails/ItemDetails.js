import React, { useState } from 'react';
import './ItemDetails.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";
import fakeData from '../../fakeData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown, faCheckCircle } from '@fortawesome/free-solid-svg-icons';


const ItemDetails = () => {
    const { foodKey } = useParams();
    const [foodItems, setFoodItems] = useState(fakeData);
    const foodItem = foodItems.find(item => item.key == foodKey)

    return (
        <div className="container pt-5 bp-5">
            <div className="row">
                <div className="col-lg-6">
                    <h2 className="mt-5 pb-3">{foodItem.name}</h2>
    <p>{foodItem.des}</p>
                    <div className="d-flex my-4">
                        <h2>${foodItem.price}</h2>
                     <div className="calculate-product">
                     <button className="btn-plus">+</button> 1 <button className=" btn-minus">-</button>
                     </div>
                    </div>
                    <button className="add-to-cart-btn">  <FontAwesomeIcon icon={faCartArrowDown} /> <span>Add</span> </button>
                </div>
                <div className="col-lg-6">
                    <img src={foodItem.img} alt={foodItem.name} className="img-fluid" />
                </div>
            </div>
        </div>
    );
};

export default ItemDetails;