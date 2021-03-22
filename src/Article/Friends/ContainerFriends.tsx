import Friends from "./Friends";
import { connect } from "react-redux";
import WithCheckAuth from "../../HOCS/withCheckAuth";
import { compose } from "redux";
import { getFriendsSelector } from "../../Redux/Selectors/friendSelector";
import { AppStateType } from "../../Redux/Redux";
import { FriendType, getFriendsThunk, removeFriendsThunk } from "../../Redux/Reducers/reduceFriends";
import { getFollowingInProgress } from "../../Redux/Selectors/userSelector";
import { doFollowThunk,doUnFollowThunk } from "../../Redux/Reducers/reduceAddFriend";

type MSTPType={
  friendsData:Array<FriendType> // here Array with jsx
  followingInProgress:Array<number>
}
type MDTPType={
    getFriendsThunk:(term?:string)=>void
    removeFriendsThunk:(id:number)=>void
    doUnFollowThunk:(id:number)=>void
}
type OwnPropsType={

}
let mapStateToProps=(state:AppStateType):MSTPType=>{
    return{
        friendsData:getFriendsSelector(state),
        followingInProgress:getFollowingInProgress(state)
    }
}

export default compose(
    WithCheckAuth,
    connect<MSTPType,MDTPType,OwnPropsType,AppStateType>
    (mapStateToProps,{getFriendsThunk,doUnFollowThunk,removeFriendsThunk})
    )(Friends)
