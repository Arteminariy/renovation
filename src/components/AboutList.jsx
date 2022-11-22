import React from "react";
import "../styles/AboutList.css"
// import Employee from "./Employee";
import Project from "./Project";
import { projects } from './content.js'

const AboutList = () => {
    return (
        <div className="aboutList">
            <div className="target">
                <h3 className="aboutListTitle">Наш опыт:</h3>
                <ul>
                    <li><p className="targetDescription">Мы работаем на рынке больше <strong>15 лет</strong> и успешно закончили более <strong>120</strong> проектов.</p></li>
                    <li><p className="targetDescription">Работаем по договору. Предоставляем гарантию.</p></li>
                    <li><p className="targetDescription">Выполняли сложные дизайнерские решения.</p></li>
                    <li><p className="targetDescription">Предоставляем фотоотчёт о доставленных материалах.</p></li>
                    <li><p className="targetDescription">Оплата по этапам выполненых работ.</p></li>
                    {/* <li><p className="targetDescription"></p></li> */}
                </ul>
                
                
            </div>  
            {/* <div className="target">
                <h3 className="aboutListTitle">Наши преимущества:</h3>
                <ul>
                    <li><p className="targetDescription">Главной нашей целью является выполнение поставленных клиентом задач</p></li>
                    <li><p className="targetDescription">Главной нашей целью является выполнение поставленных клиентом задач</p></li>
                    <li><p className="targetDescription">Главной нашей целью является выполнение поставленных клиентом задач</p></li>
                    <li><p className="targetDescription">Главной нашей целью является выполнение поставленных клиентом задач</p></li>
                </ul>
            </div>   */}
            {/* <div className="aboutUs">
                <h3 className="aboutListTitle">{props.employees.title}</h3>
                <div className="employeeBox">
                    <Employee employee = {{
                        name: props.employees.employeeList[0].name,
                        exp: props.employees.employeeList[0].exp,
                        post: props.employees.employeeList[0].post,
                        pic: props.employees.employeeList[0].pic
                    }}/>
                    <Employee employee = {{
                        name: props.employees.employeeList[1].name,
                        exp: props.employees.employeeList[1].exp,
                        post: props.employees.employeeList[1].post,
                        pic: props.employees.employeeList[1].pic
                    }}/>
                </div>
            </div>   */}
            <div className="projectList">
                <h3 className="aboutListTitle">Наши Проекты:</h3>
                <div className="projectBox">
                {projects.map(project => {
                    return (
                        <Project key={projects.indexOf(project)} content={project}/>
                    )
                })}

                    {/* <Project content={{
                        title: props.employees.projectList[0].title,
                        time: props.employees.projectList[0].time,
                        service: props.employees.projectList[0].service,
                        pic: props.employees.projectList[0].pic
                    }}/>
                    <Project content={{
                        title: props.employees.projectList[1].title,
                        time: props.employees.projectList[1].time,
                        service: props.employees.projectList[1].service,
                        pic: props.employees.projectList[1].pic
                    }}/>
                    <Project content={{
                        title: props.employees.projectList[2].title,
                        time: props.employees.projectList[2].time,
                        service: props.employees.projectList[2].service,
                        pic: props.employees.projectList[2].pic
                    }}/> */}
                </div>      
            </div>
        </div>
    )
}
export default AboutList;