import React from "react";
import Order from "./Order";
import { orders } from './orders_db.js'
import '../styles/Order.css'

const OrderBox = ({popup}) => {
    return (
        <div className="orderBox">
            {orders.map((order) => {

                return(
                    <Order key={orders.indexOf(order)} orders = {
                        {
                            link: popup,
                            title: order.title,
                            description: order.description
                        }
                    }/>
                )
            })}
        </div>
  )
}
export default OrderBox;