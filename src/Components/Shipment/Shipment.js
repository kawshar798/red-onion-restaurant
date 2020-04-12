import React,{useState} from 'react'
import './Shipment.css'

function Shippment(props) {
    // const [qty,setQty]= useState(props.cart.quantity)
    // const handleQuantity = (currentItem) =>{
    //    const  new_qty = currentItem.quantity -1;
    //    setQty(new_qty);
    // }
    // console.log(qty)
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8">

                </div>
                <div className="col-lg-4">
                    <p>From <strong>Gulshan Plaza Restaura GPR</strong></p>
                    <p>Arriving in 20-30min</p>
                    <p>107 Rd No 8</p>
                    <div className="cart">

                        {props.cart.map(item => (
                            <div className="single-cart-item">
                                <div className="item-info">
                                    <div className="item-img">
                                        <img src={item.img} alt="" className="img-fluid" />
                                    </div>
                                    <div className="item-des">
                                        <h3>{item.name}</h3>
                                        <h2>${item.price}</h2>
                                    </div>


                                </div>


                                <div className="item-quantity">
                                {item.quantity > 0 ? 
                                    <button onClick={() => props.handleCheckout(item.key, (item.quantity - 1)) }>-</button>
                                    :
                                    <button >-</button>}
                                    <span>{item.quantity}</span> 
                                    <button  onClick={() => props.handleCheckout(item.key, (item.quantity+1)) }>+</button>
                                
                                </div>
                            </div>

                        ))}

                        <div className="cart-calculate">
                            <ul>
                                <li>Subtotla<span className="item-qty">4 item</span><span>$4</span></li>
                                <li> Tax<span>$4</span></li>
                                <li>Delivery fee<span>$4</span></li>
                                <li>Total<span>$4</span></li>
                            </ul>
                        </div>


                    </div>

                </div>
            </div>

        </div>
    )
}

export default Shippment
