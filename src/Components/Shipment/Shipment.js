import React,{useState} from 'react'
import { useForm } from 'react-hook-form';
import './Shipment.css'
import { useAuth } from '../Login/useAuth';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function Shippment(props) {
    
    const [deliveryInfo,setDeliveryInfo] = useState(false)
    const auth = useAuth();
    const cart = props.cart;
    const { register, handleSubmit, watch, errors } = useForm([]);
    const onSubmit = data => {
    
       setDeliveryInfo(true);
    };

//Cart product  calculate 
    const subtotal = cart.reduce((subtotal,item) => subtotal + (item.price * item.quantity),0);
    const totalQuantity = cart.reduce((qty,item) => qty + item.quantity,0);
    const tax = subtotal / 10;
    let deliveryFee = 0;
    if(subtotal> 500 ){
        deliveryFee = 0;
    } else if( subtotal > 135){
        deliveryFee = 20;
    }else if(subtotal > 0){
        deliveryFee = 30;
    }

    const grandTotal = subtotal + deliveryFee + tax;


    return (
        <div className="container pt-5 pb-5">
            <div className="row">
                <div className="col-md-8">
                    {deliveryInfo.length > 0? <h2>ami kawshar</h2>:'kire'}
                <h4>Edit Delivery Details</h4>
                    <hr/>
                    <form  onSubmit={handleSubmit(onSubmit)} className="py-5">
                    
                        <div className="form-group">
                            <input name="todoor" className="form-control" ref={register({ required: true })}  placeholder="Delivery To Door"/>
                            {errors.todoor && <span className="error">This Option is required</span>}
                        </div>
                        <div className="form-group">
                            <input name="road" className="form-control" ref={register({ required: true })}  placeholder="Road No"/>
                            {errors.road && <span className="error">Road No is required</span>}
                        </div>
                        <div className="form-group">
                            <input name="flat" className="form-control" ref={register({ required: true })}  placeholder="Flat, Suite or Floor"/>
                            {errors.flat && <span className="error">Flat, Suite or Floor is required</span>}
                        </div>
                        <div className="form-group">
                            <input name="businessname" className="form-control" ref={register({ required: true })} placeholder="Business name"/>
                            {errors.businessname && <span className="error">Business name is required</span>}
                        </div>
                        <div className="form-group">
                            <textarea name="address" ref={register({ required: true })} placeholder="Address" className="form-control" cols="30" rows="2"></textarea>
                            {errors.address && <span className="error">Password is required</span>}
                        </div>
                        
                        <div className="form-group">
                            <button className="btn btn-danger btn-block" type="submit">Save & Continue</button>
                        </div>
                    </form>
                </div>
                <div className="col-lg-4">
                    <p>From <strong>Gulshan Plaza Restaura GPR</strong></p>
                    <p>Arriving in 20-30min</p>
                    <p>107 Rd No 8</p>
                    <div className="cart">

                        {props.cart.map(item => (
                            <div className="single-cart-item" key={item.key}>
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
                                <li><span>Subtotal. <span className="item-qty">{totalQuantity} item</span></span><span>${subtotal.toFixed(2)}</span></li>
                                <li> Tax<span>${tax.toFixed(2)}</span></li>
                                <li>Delivery fee<span>${deliveryFee.toFixed(2)}</span></li>
                                <li className="total">Total<span>${grandTotal.toFixed(2)}</span></li>
                            </ul>
                            {
                            deliveryInfo ?    <Link to="/ordercomplete" className="btn btn-danger btn-block">Check Out Your Food </Link>:
                            <button className="btn btn-secondary btn-block">Check Out Your Food</button>
                        }
                           
                        </div>


                    </div>

                </div>
            </div>

        </div>
    )
}
export default Shippment

