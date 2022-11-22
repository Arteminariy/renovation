import React from "react";
import "./AboutList.css"
import Carousel from "./Carousel";

const Project = ({content}) => {
    let time;
    if(content.time >= 5) {
        time = 'недель'
    }
    if(content.time >= 2 && content.time <= 4) {
        time = 'недели'
    }
    if(content.time === 1) {
        time = 'неделя'
    }

    return (
        <div className="projectsPost">
            <Carousel>
                {content.pictures.map(picture => {
                    return (
                        <img className="projectsPic" key={content.pictures.indexOf(picture)} src={picture} alt=''/>
                    )
                })}
            </Carousel>
            <div className="projectsPropBox">
                <h4 className="projectsTitle">{content.title}</h4>

                <p className="projectsTime">Срок выполнения работ: {content.time + ' ' + time}</p>
                <p className="projectsService">{content.service}</p>
            </div>            
        </div>
    )
}
export default Project;