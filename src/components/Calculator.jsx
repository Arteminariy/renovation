import React from "react";
import Moscow from "../sum";
import "./Calculator.css"

const categoryPusher = (obj) => {
    const objArr = Array.from(obj);
    // for (let key in obj) {
    //     if (obj.hasOwnProperty(key)) {
    //         objArr.push(key)
    //     }
        
    // }
    // console.log(obj, objArr)
    const n = Array.from(obj).map((x) => {
        return x
    })
    console.log(n)
    for(let counter = 1; counter <= Object.keys(obj).length; counter++) {
        return (
            <ul>
                <li>
                    <p>{objArr[counter]}</p>
                    {console.log(objArr[counter], objArr)}
                </li>
            </ul>
        )
    }
    console.log(Object.key(Moscow).length)
}
    

const Calculator = (props) => {
    return (
        <div className="calculatorBox">
            <h3 className="calculatorTitle">{props.content.title}</h3>
            <div className="categories">
                <ul>
                    <li>
                        {categoryPusher(Moscow)}
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Calculator;