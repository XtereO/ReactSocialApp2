import {NavLink} from "react-router-dom";
import axios from "axios";
import { addFriendPage } from "../../../API/API";

let SuggestFriend=(props)=>{
    let doFollow=()=>{
        props.doFollow(props.id)
    }

    let doUnFollow=()=>{
        props.doUnFollow(props.id)
    }
    let path="/Main/"+props.id
    return<div>
        <div className="card mt-2">
            <div className="row">
                <div className="col-md-2">
                    <NavLink to={path}>
                    <img className="img w-100 rounded" src={
                    props.photos.small!=null ? 
                    props.photos.small: "https://yt3.ggpht.com/a/AATXAJxBIHeWWHukUiEPDTQi7B5rqpa8nZRUYARxyEGH=s900-c-k-c0x00ffffff-no-rj"}/>
                    </NavLink>
                </div>
                <div className="col-md-10">
                    <div className="card-body">
                        <h1 className="NavLink">{props.name}</h1>
                        Status: {props.status}
                    </div>
                </div>
            </div>
                {props.followed ? 
                <button onClick={doFollow} disabled={props.followingInProgress.some(id=>props.id==id)} className="btn btn-danger w-100">
                    UnFollow
                </button>
                :<button onClick={doUnFollow} disabled={props.followingInProgress.some(id=>props.id==id)} className="btn btn-success w-100">
                    Follow
                </button>}            
        </div>
    </div>
}
export default SuggestFriend