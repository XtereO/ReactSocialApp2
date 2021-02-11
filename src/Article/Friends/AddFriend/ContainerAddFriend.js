import { connect } from "react-redux";
import { requestFriendsThunk,doUnFollowThunk,doFollowThunk,setProgress,setButtonDisabled,setFetching,doFollow,doUnFollow,showMore,changePage,setCountPage } from "../../../Redux/Reducers/reduceAddFriend";
import AddFriend from "./AddFriend";
import React, { useEffect } from "react";
import { getUsersData,getCurPage,getCountPage,getIsFetching,getFollowingInProgress } from "../../../Redux/Selectors/userSelector";
import *  as axios from "axios";
import SuggestedFriend from "./SuggestFriend";
import Loader from "../../../Loader";

let AddFriendAPIHoocks=(props)=>{
    useEffect(()=>{
        requestFriends()
    },[])
    let requestFriends=()=>{
        props.requestFriendsThunk(props.curPage)
    }
    
    let changePage=(page)=>{
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
        doUnFollow={props.doUnFollowThunk} id={u.id} setProgress={props.setProgress}
        setButtonDisabled={props.setButtonDisabled} followingInProgress={props.followingInProgress}  />
        })
    return<div>
        { props.isFetching?<Loader/>: 
        <AddFriend usersData={usersData} curPage={props.curPage}
        changePage={changePage} requestFriends={requestFriends}  
        requestFriends={requestFriends} countPage={props.countPage}/>
        }
    </div>
}    

class AddFriendAPI extends React.Component{

    componentDidMount(){
        this.requestFriends()

    }

    requestFriends=()=>{
        this.props.requestFriendsThunk(this.props.curPage)
    }
    
    changePage=(page)=>{
        this.props.changePage(page.target.id)
        this.requestFriends()
    }

    render=()=>{
        let curPages=[]
        for(let i=1;i<=this.props.countPage;i++){
            let e=null;
            if (this.props.curPage==i){
                e=<button id={i} className="btn btn-light" onClick={this.changePage}>{i}</button>
            }
            else{
                e=<button id={i} className="btn btn-primary" onClick={this.changePage}>{i}</button>
            }
            curPages.push(e)
        }

        let usersData=this.props.usersData.map(u=>{
            return <SuggestedFriend name={u.name} status={u.status}
            followed={u.followed} photos={u.photos} doFollow={this.props.doFollowThunk}
            doUnFollow={this.props.doUnFollowThunk} id={u.id} setProgress={this.props.setProgress}
            setButtonDisabled={this.props.setButtonDisabled} followingInProgress={this.props.followingInProgress}  />
            })
        return<div>
            { this.props.isFetching?<Loader/>: 
            <AddFriend usersData={usersData} 
            curPages={curPages} 
            requestFriends={this.requestFriends}/>
            }
        </div>
    }
}

let mapStateToProps=(state)=>{
    console.log(state.addFriendPage)
    return{
    usersData:getUsersData(state),
    curPage:getCurPage(state),
    countPage:getCountPage(state),
    isFetching:getIsFetching(state),
    followingInProgress:getFollowingInProgress(state)
    }
}

export default connect(mapStateToProps,{
    changePage,setCountPage,
    doFollowThunk,doUnFollowThunk,
    requestFriendsThunk
    })(AddFriendAPIHoocks)
