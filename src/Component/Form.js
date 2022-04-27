import React  from "react";
import Style from"./Form.module.css"

function Form (props){
   const value = props.value;
   const onChange = props.onChange;
   const onClick = props.onClick;
    return(
        <div className={Style.form}>
        <input placeholder="Enter your Task" value={value} onChange={onChange} />
        <button onClick={onClick}>Add Task</button>
        </div>
    )
}

export default Form ;