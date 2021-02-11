import React,{useState,useEffect} from "react";
import { Field, reduxForm } from "redux-form";
import Input from "../../Bricks/LoginInput";
import { requiredField } from "../../Validates/ValidateForText";


let Audio=(props)=>{
    
    let [addMode,setMode]=useState(false)
    let changeMode=()=>{
        if(addMode){
            setMode(false)
        }else{
            setMode(true)
        }
    }
    let addAudio=(value)=>{
        props.addAudio(value.nameMusic,value.nameCompositor
            ,value.musicURL,value.imgURL)
    }
    return<div>
        <div>
            <div onClick={changeMode} className="right d-flex">
                {addMode?
                <span className="Link">Cancel</span>
                :
                <span className="Link">Add Music</span>}
                <div className="ml-1">
                <button className={addMode ? 
                    "btn btn-close btn-outline-danger" 
                    :"btn btn-outline-success"}>
                    {!addMode && "+"}
                </button>
                </div>
            </div>
            <div>
            {addMode &&
                <AudioReduxForm onSubmit={addAudio}/>
            }
            </div>
        </div>
        <br />
        <div>
            {props.audioData}
        </div>
    </div>
}

let AudioForm=(props)=>{
    return<form onSubmit={props.handleSubmit} className="Login">
        <div className="d-flex">
            Name Music:
            <Field component={Input} validate={[requiredField]} 
            name={"nameMusic"} placeholder={"..."}/>
        </div>
        <div className="d-flex">
            Name Compositor:
            <Field component={Input} validate={[requiredField]}
            name={"nameCompositor"} placeholder={"..."} />
        </div>
        <div className="d-flex">
            URL image:
            <Field component={Input} name={"imgURL"} placeholder={"..."}/>
        </div>
        <div className="d-flex">
            URL music:
            <Field component={Input} name={"musicURL"} placeholder={"..."}/>
        </div>
        <button className="w-100 btn btn-success">
            Add
        </button>
    </form>
}
let AudioReduxForm=reduxForm({form:"audio"})(AudioForm)

export default Audio