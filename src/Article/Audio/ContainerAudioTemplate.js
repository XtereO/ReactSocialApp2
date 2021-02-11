import { deleteAudio } from "../../Redux/Reducers/reduceAudio";
import { connect } from "react-redux";
import AudioTemplate from "./AudioTemplate";

let mapDispatchToProps=(state)=>{
    return{

    }
}

export default connect(mapDispatchToProps,{deleteAudio})(AudioTemplate)