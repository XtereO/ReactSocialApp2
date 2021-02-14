import { NavLink } from "react-router-dom"
import React from "react";

type PropsType={}

let aside:React.FC<PropsType> =(props)=>{
    return<div className="Aside">
        <ul className="list-group" >
            <li className="list-group-item">
                <NavLink to="/Main" className="Link" activeClassName="LinkActive">
                    Main
                </NavLink>
            </li>
            <li className="list-group-item">
                <NavLink to="/Message" className="Link" activeClassName="LinkActive">
                    Message
                </NavLink>
            </li>
            <li className="list-group-item">
                <NavLink to="/Friends" className="Link" activeClassName="LinkActive">
                    Friends
                </NavLink>
            </li>
            <li className="list-group-item">
                <NavLink to="/Groups" className="Link" activeClassName="LinkActive">
                    Groups
                </NavLink>
            </li>
            <li className="list-group-item">
                <NavLink to="/Audio" className="Link" activeClassName="LinkActive">
                    Audio
                </NavLink>
            </li>
            <li className="list-group-item">
                <NavLink to="/Video" className="Link" activeClassName="LinkActive">
                    Video
                </NavLink>
            </li>
            <li className="list-group-item">
                <NavLink to="/Photo" className="Link" activeClassName="LinkActive">
                    Photo
                </NavLink>
            </li>
        </ul>
    </div>
}

export default aside
