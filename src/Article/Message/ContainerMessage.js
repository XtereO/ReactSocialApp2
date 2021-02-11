import withCheckAuth from "../../HOCS/withCheckAuth";
import Message from "./Message";
import { connect } from "react-redux";
import { doMessage,changeDialog } from "../../Redux/Reducers/reduceMessage";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { getCurDialog, getPeopleData,getMessageData } from "../../Redux/Selectors/messageSelector";

let mapStateToProps=(state)=>{
    return{
        peopleData:getPeopleData(state),
        messageData:getMessageData(state),
        curDialog:getCurDialog(state)
    }
}
export default compose(
    withCheckAuth,
    withRouter,
    connect(mapStateToProps,{doMessage,
    changeDialog})
)(Message)

