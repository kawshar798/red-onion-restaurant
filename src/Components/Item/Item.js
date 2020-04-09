import React from 'react';
import { Link } from 'react-router-dom';

const Item = (props) => {
    const { img, name, des, price, key } = props.item

    return (
        <>
            <div className="col-lg-4">
                <Link to={"/food/" + key}>
                    <div className="singleItem">
                        <img src={img} alt="" className="img-fluid" />
                        <h2>{name}</h2>
                        <p>{des}</p>
                        <p className="price">${price}</p>
                    </div>
                </Link>
            </div>
        </>
    );
};

export default Item;