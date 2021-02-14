import { deleteAudio } from "../../Redux/Reducers/reduceAudio";
import { connect } from "react-redux";
import AudioTemplate from "./AudioTemplate";
import { AppStateType } from "../../Redux/Redux";
import {AudioType} from "../../Types/types";

type OwnPropsType=AudioType
type MDTPType={
  deleteAudio:(id:number)=>void
}
type MSTPType={

}
let mapStateToProps=(state:AppStateType):MSTPType=>{
    return{

    }
}
//StateProps,DispatchProps,OwnProps,State
export default connect<MSTPType,MDTPType,OwnPropsType,AppStateType>(mapStateToProps,{deleteAudio})(AudioTemplate)
