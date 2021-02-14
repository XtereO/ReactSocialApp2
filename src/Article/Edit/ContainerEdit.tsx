import { connect } from "react-redux"
import { setPhoto,setAccountThunk,setEditAccountThunk } from "../../Redux/Reducers/reduceEdit";
import Edit from "./Edit";
import { AccountType } from "../../Types/types";
import { AppStateType } from "../../Redux/Redux";

type OwnPropsType={}
type MDTPType={
  setPhoto:(photos:any)=>void
  setAccountThunk:(userId:number)=>void
  setEditAccountThunk:(values:AccountType,setSave:any)=>void
}
type MSTPType={
  Account:AccountType
  successfullMessage:string | null
  userId:number | null
}
let mapStateToProps=(state:AppStateType):MSTPType=>{
    return{
        Account:state.editPage.Property.Account,
        successfullMessage:state.editPage.Property.successMessagePhoto,
        userId:state.menu.data.id
    }
}

//StateProps,DispatchProps,OwnProps,State
export default connect<MSTPType,MDTPType,OwnPropsType,AppStateType>(mapStateToProps,{
    setPhoto,setAccountThunk,setEditAccountThunk})(Edit)
