import { NavLink } from "react-router-dom";
import React from "react";

type PropsType={
  name:string
  count:number
  changeDialog:(id:number)=>void
  id:number
}

let People:React.FC<PropsType>=(props)=>{

    let p="/Message/"+props.id
    let changeDialog=()=>{
        props.changeDialog(props.id)
    }
    return<div>
        <li className="list-group-item" onClick={changeDialog}>
            <NavLink className="Link" to={p}>{props.name}
            <div className="right badge">{props.count}</div></NavLink>
        </li>
    </div>
}

export default People
