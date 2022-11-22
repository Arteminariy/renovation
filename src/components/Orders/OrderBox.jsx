import React from "react";
import Order from "./Order";
import './Order.css'

const OrderBox = ({popup}) => {
    return (<div className="orderBox">
      
    <Order orders = {
      {
        link: popup,
        title: `Консультация`,
        description: `Специалист поможет вам в составлении плана ремонта, проконсультирует по материалам и сразу предоставит смету`
      }
    }/>
    <Order orders = {
          {
            link: popup,
            title: `Ремонт`,
            description: `Заключаем договор на работы. Работы оплачиваются поэтапно`
          }
    }/>
    <Order orders = {
      {
        link: popup,
        title: `Дизайн-проект`,
        description: `После консультации с нашим дизайнером проводится замер помещения и в течении 7-10 дней подготовим дизайн-проект`
      }
    }/>
    <Order orders = {
      {
        link: popup,
        title: `Доставка стройматериалов`,
        description: `Бесплатно разгрузим материалы для ремонта`
      }
    }/>

    

    
    
  </div>
  )
}
export default OrderBox;