import { connect } from "react-redux";
import {setStatusThunk,deletePost,getStatusThunk,setAccountThunk,changeStatus,changeText,doPost, doLike, setAccount} from "../../Redux/Reducers/reduceMain"
import { withRouter } from "react-router-dom";
import Main from "./Main"
import MainHooks from "./MainHooks";
import WithCheckAuth from "../../HOCS/withCheckAuth";
import { compose } from "redux";
import { getAccount, getMyId, getPosts, getStatus, getText } from "../../Redux/Selectors/mainSelector";


let mapStateToProps=(state)=>{
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
    connect(mapStateToProps,{
        changeStatus,changeText,getStatusThunk,
        doPost,doLike,setAccount,setAccountThunk,
        setStatusThunk,deletePost
    })
)(MainHooks)