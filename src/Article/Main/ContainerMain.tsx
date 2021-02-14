import { connect } from "react-redux";
import {setStatusThunk,deletePost,getStatusThunk,setAccountThunk,changeStatus,changeText,doPost, doLike, setAccount} from "../../Redux/Reducers/reduceMain"
import { withRouter } from "react-router-dom";
import Main from "./Main"
import MainHooks from "./MainHooks";
import WithCheckAuth from "../../HOCS/withCheckAuth";
import { compose } from "redux";
import { getAccount, getMyId, getPosts, getStatus, getText } from "../../Redux/Selectors/mainSelector";
import { AccountType } from "../../Types/types";
import { AppStateType } from "../../Redux/Redux";

type MSTPType={
  Account:AccountType
  text:string
  posts:any //its array with jsx
  status:string
  myId:number | null
}
type MDTPType={
  changeStatus:(t:string)=>void
  changeText:(t:string | null)=>void
  getStatusThunk:(id:number)=>void
  doPost:(text:string | null)=>void
  doLike:(name:string | null,message:string | null,like:number)=>void
  setAccount:(data:AccountType )=>void
  setAccountThunk:(userId:number)=>void
  setStatusThunk:(status:string )=>void
  deletePost:(name:string | null,message:string | null,like:number)=>void
}
type OwnPropsType={}
let mapStateToProps=(state:AppStateType):MSTPType=>{
    return{
    Account:getAccount(state),
    text:getText(state),
    posts:getPosts(state),
    status:getStatus(state),
    myId:getMyId(state)
    }
}

export default compose(
    WithCheckAuth,
    withRouter,
    connect<MSTPType,MDTPType,OwnPropsType,AppStateType>(mapStateToProps,{
        changeStatus,changeText,getStatusThunk,
        doPost,doLike,setAccount,setAccountThunk,
        setStatusThunk,deletePost
    })
)(MainHooks)
