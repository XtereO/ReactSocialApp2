import { connect } from "react-redux";
import { getPhoto } from "../../Redux/Selectors/photoSelector";
import Photo from "./Photo";
import { AddPhoto } from "../../Redux/Reducers/reducePhoto";
import {AppStateType} from "../../Redux/Redux"

type OwnPropsType={
  name:string,
  img:string,
  id:number
}
type MSTPType={
  photoData:any //Its array with jsx
}
type MDTPType={
  AddPhoto:(name:string,img:string)=>void
}
let mapStateToProps=(state:AppStateType):MSTPType=>{
    return{
        photoData:getPhoto(state)
    }
}

//State,Dispatch,OwnProps,AppStateType
let prepare=connect<MSTPType,MDTPType,OwnPropsType,AppStateType>(mapStateToProps,{AddPhoto})(Photo)
export default prepare
