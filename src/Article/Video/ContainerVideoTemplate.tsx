import { connect } from "react-redux";
import VideoTemplate from "./VideoTemplate";
import { RemoveVideo } from "../../Redux/Reducers/reduceVideo";
import { AppStateType } from "../../Redux/Redux";
import { VideoType } from "../../Types/types";

type OwnPropsType=VideoType
type MDTPType={RemoveVideo:(id:number)=>void}
type MSTPType={}
let mapStateToProps=(state:AppStateType)=>{
    return{

    }
}
//StateProps,DispatchProps,OwnProsps,State
export default connect<MSTPType,MDTPType,OwnPropsType,AppStateType>(mapStateToProps,{RemoveVideo})(VideoTemplate)
