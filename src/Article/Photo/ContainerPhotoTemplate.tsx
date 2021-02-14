import { connect } from "react-redux"
import { RemovePhoto } from "../../Redux/Reducers/reducePhoto";
import PhotoTemplate from "./PhotoTemplate";
import {AppStateType} from "../../Redux/Redux"

type MSTPType={

}
type MDTPType={
  RemovePhoto:(id:number)=>void
}
type OwnProps={

}
let mapStateToProps=(state:AppStateType):MSTPType=>{
    return{

    }
}


export default connect<MSTPType,MDTPType,OwnProps,AppStateType>(mapStateToProps,{RemovePhoto})(PhotoTemplate)
