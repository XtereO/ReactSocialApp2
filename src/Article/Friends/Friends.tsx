import Friend from "./Friend";
import {NavLink} from "react-router-dom"
import React from "react";

type PropsType={
  friendsData:any //object with jsx
}

let Friends:React.FC<PropsType>=(props)=>{

    return<div>
        <div className="right">
            <NavLink to="/AddFriend" className="Link">
            Find Friend <span className="badge">+</span>
            </NavLink>
        </div>
        <br />
        {props.friendsData}
    </div>
}

export default Friends
