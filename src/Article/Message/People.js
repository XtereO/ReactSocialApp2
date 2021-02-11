import { NavLink } from "react-router-dom";

let People=(props)=>{
    
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