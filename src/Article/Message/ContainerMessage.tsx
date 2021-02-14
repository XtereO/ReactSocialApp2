import withCheckAuth from "../../HOCS/withCheckAuth";
import Message from "./Message";
import { connect } from "react-redux";
import { doMessage,changeDialog } from "../../Redux/Reducers/reduceMessage";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { getCurDialog, getPeopleData,getMessageData } from "../../Redux/Selectors/messageSelector";
import React from "react";
import { AppStateType } from "../../Redux/Redux";

type OwnProps={}
type MDTPType={
  doMessage:(p:string,text:string)=>void
  changeDialog:(curDialog:number)=>void
}
type MSTPType={
  peopleData:any // Array with jsx
  messageData:any // Array with jsx
  curDialog:number
}
let mapStateToProps=(state:AppStateType):MSTPType=>{
    return{
        peopleData:getPeopleData(state),
        messageData:getMessageData(state),
        curDialog:getCurDialog(state)
    }
}
export default compose(
    withCheckAuth,
    withRouter,
    connect<MSTPType,MDTPType,OwnProps,AppStateType>(mapStateToProps,{doMessage,
    changeDialog})
)(Message)
