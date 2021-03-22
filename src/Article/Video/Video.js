import VideoTemplate from "./VideoTemplate";
import { useState } from "react"
import { reduxForm, Field } from "redux-form"
import Input from "../../Bricks/LoginInput"
import {requiredField} from "../../Validates/ValidateForText"

let Video = (props) => {
    let [editMode, setEditMode] = useState(false)
    let toEditMode = () => {
        setEditMode(true)
    }
    let goOutEditMode = () => {
        setEditMode(false)
    }
    let AddVideo=(value)=>{
        props.AddVideo(value.nameVideo,value.nameCompositor,value.urlVideo)
    }
    return <div>
        <div className="right">
            {editMode ?
            <div onClick={goOutEditMode}>
                <span className="Link">
                    Cancel
                </span>
                <button className="btn btn-close btn-outline-danger">
                </button>
            </div> :
            <div onClick={toEditMode}>
                <span className="Link">
                    Add Video
                </span>
                <button className="btn btn-outline-success">+
                </button>
            </div>}
        </div>
        <div>
        {editMode &&
            <div >
                <br />
                <VideoReduxForm onSubmit={AddVideo}/>
            </div>}
        </div>
        {props.videoData.length>0 ? [...props.videoData].reverse():
        <div className="card w-100" onClick={toEditMode}>
            <h1 className="text-primary" align="center">
            You steel dont have any video...
            </h1>
        </div>}
    </div>
}

let VideoForm = (props) => {
    return <form className="Login" onSubmit={props.handleSubmit}>
        <div className="d-flex">
            Name Video: <Field validate={[requiredField]} 
            name={"nameVideo"} component={Input}/>
        </div>
        <div className="d-flex">
            Name Compositor: <Field name={"nameCompositor"}
            component={Input}/>
        </div>
        <div className="d-flex">
            URL video: <Field name={"urlVideo"}
            component={Input} validate={[requiredField]}/>
        </div>
        
            <button className="w-100 btn btn-success">
                Add
            </button>
        
    </form>
}
let VideoReduxForm=reduxForm({form:"video"})(VideoForm)

export default Video