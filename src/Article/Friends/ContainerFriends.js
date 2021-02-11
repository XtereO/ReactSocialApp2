import Friends from "./Friends";
import { connect } from "react-redux";
import WithCheckAuth from "../../HOCS/withCheckAuth";
import { compose } from "redux";
import { getFriends } from "../../Redux/Selectors/friendSelector";

let mapStateToProps=(state)=>{
    return{
        friendsData:getFriends(state)
    }
} 

let mapDispatchToProps=(dispatch)=>{
    return{

    }
}
export default compose(
    WithCheckAuth,
    connect(mapStateToProps,mapDispatchToProps)
    )(Friends)
