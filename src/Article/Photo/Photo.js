import PhotoTemplate from "./PhotoTemplate";
import { useState } from "react";
import { Field,reduxForm } from "redux-form";
import Input from "../../Bricks/LoginInput";
import { requiredField } from "../../Validates/ValidateForText";

let Photo=(props)=>{
    let [editMode,changeMode]=useState(false)
    let toEditMode=()=>{
        changeMode(true)
    }
    let goOutEditMode=()=>{
        changeMode(false)
    }
    let AddPhoto=(value)=>{
        props.AddPhoto(value.namePhoto,value.urlPhoto)
    }
    return<div>
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
                    Add photo
                </span>
                <button className="btn btn-outline-success">+
                </button>
            </div>}
        </div>
        <div>
            {editMode && <PhotoReduxForm onSubmit={AddPhoto}/>}
        </div>
        <br />
        <div className="row mx-2 my-2">
            {props.photoData}
        </div>
    </div>
}

let PhotoForm=(props)=>{
    return<form className="Login" onSubmit={props.handleSubmit}>
        <div className="d-flex">
            Name Photo: <Field name={"namePhoto"} component={Input}
            validate={[requiredField]} />
        </div>
        <div className="d-flex">
            URL Photo: <Field name={"urlPhoto"} component={Input}
            validate={[requiredField]} />
        </div>
        <button className="w-100 btn btn-success">
            Add
        </button>
    </form>
}
let PhotoReduxForm=reduxForm({form:"forPhoto"})(PhotoForm)

export default Photo