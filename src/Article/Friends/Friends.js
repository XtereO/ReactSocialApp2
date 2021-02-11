import Friend from "./Friend";
import {NavLink} from "react-router-dom"

let Friends=(props)=>{

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