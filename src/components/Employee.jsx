import React from "react";
import "./AboutList.css"

const Employee = (props) => {
    return (
        <div className="employeePost">
            <img className="employeePic"  src={props.employee.pic} alt={"Фото " + props.employee.name} />
            <div className="employeePropBox">
                <h4 className="employeeName" >{props.employee.name}</h4>

                <p className="employeeFunc" >{props.employee.post}</p>

                {/* <p className="employeeExp">{props.employee.exp} лет</p> */}
            </div>            
        </div>
    )
}
export default Employee;