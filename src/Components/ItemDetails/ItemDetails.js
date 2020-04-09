import React, {useState} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";
  import fakeData from '../../fakeData';

 
const ItemDetails = () => {
    const  { foodKey } = useParams();
    const [foodItems,setFoodItems] = useState(fakeData);
   const foodItem =  foodItems.find( item => item.key ==foodKey )

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <h2>{ foodItem.name }</h2>
                    <p></p>
                </div>
                <div className="col-lg-6"></div>
            </div>
        </div>
    );
};

export default ItemDetails;