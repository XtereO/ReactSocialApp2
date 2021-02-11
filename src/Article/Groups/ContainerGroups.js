import {connect} from "react-redux";
import { getGroups } from "../../Redux/Selectors/groupSelector";
import Groups from "./Groups";

let mapStateToProps=(state)=>{
    return{
        groupsData:getGroups(state)
    }
} 

let mapDispatchToProps=(dispatch)=>{
    return{

    }
}

let prepare=connect(mapStateToProps,mapDispatchToProps)(Groups)

export default prepare