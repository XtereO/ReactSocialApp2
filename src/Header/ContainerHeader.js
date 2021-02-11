import {connect} from "react-redux"
import Header from "./Header";
import React from "react"
import { logoutThunk } from "../Redux/Reducers/reduceMenu";

class ContainerHeader extends React.Component{
    render(){
        return<Header show={this.props.show} toActive={this.props.toActive} toOff={this.props.toOff}
         isAuth={this.props.isAuth} data={this.props.data}
         logoutThunk={this.props.logoutThunk}/>
    }
}

let mapStateToProps=(state)=>{
    return {
        data:state.menu.data,
        isAuth:state.menu.isAuth
    }
}

export default connect(mapStateToProps,{
    logoutThunk})(ContainerHeader)