import React from "react"
import { NavLink } from "react-router-dom"
import { MessageType } from "./GlobalChat"



export let SingleMessage:React.FC<MessageType>=(props)=>{
    return<div style={{height:'20%'}} className="mt-3">
        <div className="row bg-light p-2" >
            <div className="col-2">
                <NavLink to={`Main/${props.userId}`}>
                <img src={props.photo}
                className="w-100 rounded"/>
                </NavLink>
            </div>
            <div className="col-8 my-3">
                    <h3>
                        <NavLink to={`Main/${props.userId}`} className="Link">
                        {props.userName}
                        </NavLink>
                    </h3>
                <div className="text-dark mt-4">
                    {props.message}
                </div>
            </div>
        </div>
    </div>
}