import React, { useState } from 'react';
import './MenuItems.css'
import { Link } from 'react-router-dom';
import fakeData from '../../fakeData';
import Item from '../Item/Item';
const MenuItems = () => {
    const [foodItems,setFoodItems] = useState(fakeData);
    const [selectedItem, setSelectedItem] = useState("breakfast");
              const slectedItems =   foodItems.filter(item => item.category ===selectedItem)

            
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <ul className="menu-item-nav">
                        <li onClick={ ()=>setSelectedItem("breakfast")}>Break Fast</li>
                        <li onClick={ ()=>setSelectedItem("lunch")}>Lunch</li>
                        <li onClick={ ()=>setSelectedItem("dinner")}>Dinner</li>

                    </ul>
                </div>
                    
                {slectedItems.map(item => <Item item={item} key={item.key} />)}
              

            </div>
        </div>
    );
};

export default MenuItems;