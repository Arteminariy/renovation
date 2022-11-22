import React from "react";
import './Order.css';


const Order = (props) => {
    let setPopup = props.link
    return (
        <div className="order">
            <h3 className="orderTitle">{props.orders.title}</h3>
            <p className="orderDescription">{props.orders.description}</p>
            <button onClick={() => setPopup(true)}><p>Заказать</p></button>
            
        </div>    
    )
}
export default Order;