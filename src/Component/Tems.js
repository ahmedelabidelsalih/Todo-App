import React  from "react";
import "./Tems.css"

function  Tems(props){
    const todo = props.todo;
    const donetask = props.donetask;
    return  (<div className="items"> <li >
        { todo.title} <button onClick={donetask} >Done</button>
         </li></div>);
         
    
};
export default Tems;