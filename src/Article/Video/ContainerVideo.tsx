import { connect } from "react-redux";
import Video from "./Video";
import { AddVideo } from "../../Redux/Reducers/reduceVideo";
import { getVideo } from "../../Redux/Selectors/videoSelector";
import {AppStateType} from "../../Redux/Redux"

type MSTPType={
  videoData:any //array with jsx
}
type MDTPType={
  AddVideo:(name:string | null,compositor:string | null,vsrc:string | null)=>void
}
type OwnPropsType={

}
let mapStateToProps=(state:AppStateType):MSTPType=>{
    return{
        videoData:getVideo(state)
    }
}

//PState,PDispatch,OwnProps,State
export default connect<MSTPType,MDTPType,OwnPropsType,AppStateType>(mapStateToProps,{AddVideo})(Video)
