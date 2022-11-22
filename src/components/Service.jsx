import React from "react";
import "./Service.css"

const Service = (props) => {
    return (
        <div className = "service">
            <h3 className = "serviceName">{props.service.name}</h3>
            <img className = "servicePhoto" src={props.service.photo} alt={props.altPhoto}></img>
            {/* <p className = "servicePrice"> Стоимость услуги от <span>{props.service.price}₽</span> за м²</p> */}
            <p className = "serviceDescription">{props.service.description}</p>
        </div>
    )
}
export default Service;