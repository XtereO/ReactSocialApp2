import {connect} from "react-redux"
import Header from "./Header";
import React from "react"
import { logoutThunk } from "../Redux/Reducers/reduceMenu";
import { AppStateType } from "../Redux/Redux";

type PropsType=OwnPropsType & MDTPType & MSTPType

class ContainerHeader extends React.Component<PropsType>{
    render(){
        return<Header show={this.props.show} toActive={this.props.toActive} toOff={this.props.toOff}
         isAuth={this.props.isAuth}
         logoutThunk={this.props.logoutThunk}/>
    }
}

type OwnPropsType={
  show:boolean,
  toActive:()=>void
  toOff:()=>void
}
type MDTPType={logoutThunk:()=>void}
type MSTPType={
  isAuth:boolean
}
let mapStateToProps=(state:AppStateType)=>{
    return {
        data:state.menu.data,
        isAuth:state.menu.isAuth
    }
}

export default connect<MSTPType,MDTPType,OwnPropsType,AppStateType>(mapStateToProps,{
    logoutThunk})(ContainerHeader)
