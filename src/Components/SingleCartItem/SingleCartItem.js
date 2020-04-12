import React from 'react'
import './SingleItemCart.css'
function SingleCartItem(props) {

    const {name,img,price,quantity} = props.item;
    return (
        <div>
            <div className="single-cart-item">
                <div className="item-info">
                    <div className="item-img">
                        <img src={img} alt="" className="img-fluid" />
                    </div>
                    <div className="item-des">
                        <h3>{name}</h3>
                        <h2>${price}</h2>
                    </div>


                </div>
                <div className="item-quantity">
                 <button >-</button><span>{quantity}</span> <button>+</button>
                </div>
            </div>
        </div>
    )
}

export default SingleCartItem
