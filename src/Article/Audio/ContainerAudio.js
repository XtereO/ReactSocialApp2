import Audio from "./Audio";
import {connect} from "react-redux";
import { getAudio } from "../../Redux/Selectors/audioSelector";
import { addAudio } from "../../Redux/Reducers/reduceAudio";

let mapStateToProps=(state)=>{
    return{
        audioData:getAudio(state)
    }
}

let prepare=connect(mapStateToProps,{addAudio})(Audio)

export default prepare