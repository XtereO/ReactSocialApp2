import Audio from "./Audio";
import {connect} from "react-redux";
import { getAudio } from "../../Redux/Selectors/audioSelector";
import { addAudio } from "../../Redux/Reducers/reduceAudio";
import { AppStateType } from "../../Redux/Redux";

type MSTPType={
  audioData:any // its array with jsx
}
type MDTPType={
  addAudio:(name:string,compositor:string,asrc:string,img:string)=>void
}
type OwnPropsType={

}
let mapStateToProps=(state:AppStateType):MSTPType=>{
    return{
        audioData:getAudio(state)
    }
}

//StateProps,DispatchProps,OwnProps,State
export default connect<MSTPType,MDTPType,OwnPropsType,AppStateType>(mapStateToProps,{addAudio})(Audio)
