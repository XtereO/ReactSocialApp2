import { connect } from "react-redux";
import { requestFriendsThunk,doUnFollowThunk,doFollowThunk,setProgress,setButtonDisabled,setFetching,doFollow,doUnFollow,showMore,changePage,setCountPage } from "../../../Redux/Reducers/reduceAddFriend";
import AddFriend from "./AddFriend";
import React, { useEffect } from "react";
import { getUsersData,getCurPage,getCountPage,getIsFetching,getFollowingInProgress } from "../../../Redux/Selectors/userSelector";
import *  as axios from "axios";
import SuggestedFriend from "./SuggestFriend";
import Loader from "../../../Loader";
import { AppStateType } from "../../../Redux/Redux";

type PropsType=MDTPType & MSTPType
let AddFriendAPIHoocks:React.FC<PropsType>=(props)=>{
    useEffect(()=>{
        requestFriends()
    },[])
    let requestFriends=(term:string="")=>{
        props.requestFriendsThunk(props.curPage,term)
    }

    let changePage=(page:any):void=>{ //Html element
        if(!page.target){
            props.changePage(page)
            requestFriends()
        }else{
            props.changePage(page.target.id)
            requestFriends()
        }
    }

    let usersData=props.usersData.map(u=>{
        return <SuggestedFriend name={u.name} status={u.status}
        followed={u.followed} photos={u.photos} doFollow={props.doFollowThunk}
        doUnFollow={props.doUnFollowThunk} id={u.id}
        followingInProgress={props.followingInProgress}  />
        })
    return<div>
        { props.isFetching?<Loader/>:
        <AddFriend usersData={usersData} curPage={props.curPage}
        changePage={changePage} requestFriends={requestFriends}
        countPage={props.countPage}/>
        }
    </div>
}

// class AddFriendAPI extends React.Component{
//
//     componentDidMount(){
//         this.requestFriends()
//
//     }
//
//     requestFriends=()=>{
//         this.props.requestFriendsThunk(this.props.curPage)
//     }
//
//     changePage=(page)=>{
//         this.props.changePage(page.target.id)
//         this.requestFriends()
//     }
//
//     render=()=>{
//         let curPages=[]
//         for(let i=1;i<=this.props.countPage;i++){
//             let e=null;
//             if (this.props.curPage==i){
//                 e=<button id={i} className="btn btn-light" onClick={this.changePage}>{i}</button>
//             }
//             else{
//                 e=<button id={i} className="btn btn-primary" onClick={this.changePage}>{i}</button>
//             }
//             curPages.push(e)
//         }
//
//         let usersData=this.props.usersData.map(u=>{
//             return <SuggestedFriend name={u.name} status={u.status}
//             followed={u.followed} photos={u.photos} doFollow={this.props.doFollowThunk}
//             doUnFollow={this.props.doUnFollowThunk} id={u.id}
//             setButtonDisabled={this.props.setButtonDisabled} followingInProgress={this.props.followingInProgress}  />
//             })
//         return<div>
//             { this.props.isFetching?<Loader/>:
//             <AddFriend usersData={usersData}
//             curPages={curPages}
//             requestFriends={this.requestFriends}/>
//             }
//         </div>
//     }
// }

type MSTPType={
  usersData:Array<any>, // i dont remember what here the object:)
  curPage:number,
  countPage:null | number,
  isFetching:boolean,
  followingInProgress:Array<number>
}
type MDTPType={
  changePage:(curPage:number)=>void
  setCountPage:(count:number)=>void
  doFollowThunk:(id:number)=>void
  doUnFollowThunk:(id:number)=>void
  requestFriendsThunk:(page:number,term?:string)=>void
}
type OwnPropsType={}
let mapStateToProps=(state:AppStateType):MSTPType=>{
    return{
    usersData:getUsersData(state),
    curPage:getCurPage(state),
    countPage:getCountPage(state),
    isFetching:getIsFetching(state),
    followingInProgress:getFollowingInProgress(state)
    }
}
//StateProps,DispatchProps,OwnProps,State
export default connect<MSTPType,MDTPType,OwnPropsType,AppStateType>(mapStateToProps,{
    changePage,setCountPage,
    doFollowThunk,doUnFollowThunk,
    requestFriendsThunk
    })(AddFriendAPIHoocks)
