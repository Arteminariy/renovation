import React from "react";
import '../styles/Order.css';


const Order = ({orders}) => {
    let setPopup = orders.link
    return (
        <div className="order">
            <h3 className="orderTitle">{orders.title}</h3>
            <p className="orderDescription">{orders.description}</p>
            <button onClick={() => setPopup(true)}><p>Заказать</p></button>
            
        </div>    
    )
}
export default Order;