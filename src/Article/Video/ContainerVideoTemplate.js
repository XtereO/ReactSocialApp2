import { connect } from "react-redux";
import VideoTemplate from "./VideoTemplate";
import { RemoveVideo } from "../../Redux/Reducers/reduceVideo";

let mapStateToProps=(state)=>{
    return{

    }
}

export default connect(mapStateToProps,{RemoveVideo})(VideoTemplate)
