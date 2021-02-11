import { connect } from "react-redux"
import { setPhoto,setAccountThunk,setEditAccountThunk } from "../../Redux/Reducers/reduceEdit";
import Edit from "./Edit";

let mapDispatchToProps=(state)=>{
    return{
        Account:state.editPage.Property.Account,
        successfullMessage:state.editPage.Property.successMessagePhoto,
        userId:state.menu.data.id
    }
}

export default connect(mapDispatchToProps,{
    setPhoto,setAccountThunk,setEditAccountThunk})(Edit)