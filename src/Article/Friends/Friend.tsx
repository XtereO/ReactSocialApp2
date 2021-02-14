import { NavLink } from "react-router-dom"
import React from "react";

type PropsType={
  name:string
  discription:string
  img:string
}

let Friend:React.FC<PropsType>=(props)=>{
    let p="/"+props.name
    return<div className="mt-2">
        <div className="card">
            <div className="row">
                <div className="col-md-2">
                    <img className="img w-100 rounded" src={props.img}/>
                </div>

                <div className="col-md-10 card-body">
                    <h1><NavLink className="Link" to={p}>{props.name}</NavLink></h1>
                    {props.discription}
                </div>
            </div>
        </div>
    </div>
}

export default Friend
