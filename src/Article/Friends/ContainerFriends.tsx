import Friends from "./Friends";
import { connect } from "react-redux";
import WithCheckAuth from "../../HOCS/withCheckAuth";
import { compose } from "redux";
import { getFriends } from "../../Redux/Selectors/friendSelector";
import { AppStateType } from "../../Redux/Redux";

type MSTPType={
  friendsData:any // here Array with jsx
}
type MDTPType={

}
type OwnPropsType={

}
let mapStateToProps=(state:AppStateType):MSTPType=>{
    return{
        friendsData:getFriends(state)
    }
}

export default compose(
    WithCheckAuth,
    connect<MSTPType,MDTPType,OwnPropsType,AppStateType>(mapStateToProps,{})
    )(Friends)
