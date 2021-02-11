import { connect } from "react-redux"
import { RemovePhoto } from "../../Redux/Reducers/reducePhoto";
import PhotoTemplate from "./PhotoTemplate";

let mapStateToProps=(state)=>{
    return{

    }
}

export default connect(mapStateToProps,{RemovePhoto})(PhotoTemplate)