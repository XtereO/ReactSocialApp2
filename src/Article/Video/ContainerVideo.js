import { connect } from "react-redux";
import Video from "./Video";
import { AddVideo } from "../../Redux/Reducers/reduceVideo";
import { getVideo } from "../../Redux/Selectors/videoSelector";

let mapStateToProps=(state)=>{
    return{
        videoData:getVideo(state)
    }
}

export default connect(mapStateToProps,{AddVideo})(Video)

