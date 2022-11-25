import React from "react";
import "../styles/Footer.css"
import tgphoto from "../img/tgIconBlack.svg"
import waphoto from "../img/waIconBlack.svg"

const Footer = (props) => {
    
    return (
        <div className="footer">
          <div id="teleBlock">
            <div className="teleBlocks">
              <a href={"tel:" + props.contacts.number} className="snLinksA" id="tglogoLink" ><img className="snLinks" alt="Связаться в Telegram" src={tgphoto}></img></a>
              <a href={"tel:" + props.contacts.number} className="snLinksA" id="walogoLink" ><img className="snLinks" alt="Связаться в WhatsApp" src={waphoto}></img></a>
            </div>
            <a className="tel, teleBlocks" title="Позвонить" href={"tel:" + props.contacts.number}><p>{props.contacts.number}</p></a>
            <pre>    </pre>
            <a className="tel, teleBlocks" title="Написать" href={"mailto:" + props.contacts.email}><p>{props.contacts.email}</p></a>
          </div>
        </div>  
    )
}
export default Footer;