import React, { useState } from 'react';
import './MenuItems.css'
import { Link } from 'react-router-dom';
import fakeData from '../../fakeData';
import Item from '../Item/Item';
const MenuItems = (props) => {
    const [foodItems,setFoodItems] = useState(fakeData);
    const [selectedItem, setSelectedItem] = useState("breakfast");
              const slectedItems =   foodItems.filter(item => item.category ===selectedItem)

            
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <ul className="menu-item-nav">
                        <li className={selectedItem==="breakfast"?'active':''} onClick={ ()=>setSelectedItem("breakfast")} >Break Fast</li>
                        <li className={selectedItem==="lunch"?'active':''} onClick={ ()=>setSelectedItem("lunch")}>Lunch</li>
                        <li className={selectedItem==="dinner"?'active':''} onClick={ ()=>setSelectedItem("dinner")}>Dinner</li>

                    </ul>
                </div>
                    
                {slectedItems.map(item => <Item item={item} key={item.key} />)}
              
                <div className="text-center checkout-btn-area">
                   
                    {
                        props.cart.length ? 
                        <Link to="/checkout">
                            <button  className="btn btn-danger btn-secondary">Check Out Your Food</button>
                        </Link>
                        :
                        <button disabled className="btn btn-secondary">Check Out Your Food</button>

                    }

                      
                </div>
            </div>
        </div>
    );
};

export default MenuItems;