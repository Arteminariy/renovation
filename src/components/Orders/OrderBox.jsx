import React from "react";
import Order from "./Order";
import { orders } from './orders_db.js'
import './Order.css'

const OrderBox = ({popup}) => {
    return (
        <div className="orderBox">
            {orders.map((order) => {

                console.log(order)
                return(
                    <Order orders = {
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