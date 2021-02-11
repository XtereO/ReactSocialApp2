import { connect } from "react-redux";
import { getPhoto } from "../../Redux/Selectors/photoSelector";
import Photo from "./Photo";
import { AddPhoto } from "../../Redux/Reducers/reducePhoto";

let mapStateToProps=(state)=>{
    return{
        photoData:getPhoto(state)
    }
}

let prepare=connect(mapStateToProps,{AddPhoto})(Photo)
export default prepare