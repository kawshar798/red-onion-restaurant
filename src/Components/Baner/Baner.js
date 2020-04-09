import React from 'react';
import './Baner.css'
const Banner = () => {
    return (
        <div className="banner d-flex align-items-center">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="baner-inner text-center">
                            <h2>Best food waiting for your belly</h2>
                            <div className="search-form">
                                <input  type="text" placeholder="Search food items" />
                                <button className="search-btn">search</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;