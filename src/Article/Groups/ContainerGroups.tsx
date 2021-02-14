import {connect} from "react-redux";
import { getGroups } from "../../Redux/Selectors/groupSelector";
import Groups from "./Groups";
import { AppStateType } from "../../Redux/Redux";

type OwnPropsType={}
type MDTPType={}
type MSTPType={groupsData:any} //array with jsx
let mapStateToProps=(state:AppStateType):MSTPType=>{
    return{
        groupsData:getGroups(state)
    }
}

//StateProps,DispatchProps,OwnPropsType,State
export default connect<MSTPType,MDTPType,OwnPropsType,AppStateType>(mapStateToProps,{})(Groups)
