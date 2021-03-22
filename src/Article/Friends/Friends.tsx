import Friend from "./Friend";
import {NavLink} from "react-router-dom"
import React,{useEffect} from "react";
import SuggestedFriend from "./AddFriend/SuggestFriend"
import { FriendType } from "../../Redux/Reducers/reduceFriends";
import SearchBar from "./AddFriend/SearchBar"

type PropsType={
  friendsData:Array<FriendType>//object with jsx
  followingInProgress:Array<number>
  getFriendsThunk:(term?:string)=>void
  removeFriendsThunk:(id:number)=>void
  doUnFollowThunk:(id:number)=>void
}

let Friends:React.FC<PropsType>=(props)=>{
    useEffect(()=>{
        props.getFriendsThunk()
    },[])
    let friendsData=props.friendsData.map(u=>{
        return <SuggestedFriend name={u.name} status={u.status}
        followed={u.followed} photos={u.photos} doFollow={props.removeFriendsThunk}
        doUnFollow={props.doUnFollowThunk} id={u.id}
        followingInProgress={props.followingInProgress}  />
        })
    return<div>
        <div className="right">
            <NavLink to="/AddFriend" className="Link">
                Would you like looking for a friend?
                <span className="badge">+</span>
            </NavLink>
        </div>
        <br />
            <span className="text-light">
                Friends
            </span>
        <br />
        <SearchBar requestFriends={props.getFriendsThunk} />
        <div>
            {friendsData}
        </div>
    </div>
}

export default Friends
