import {AudioType} from "../../Types/types";
import React from "react";

type FuncType= {deleteAudio:(id:number)=>void}
type PropsType=AudioType & FuncType;

let AudioTemplate:React.FC<PropsType>=(props:PropsType)=>{
    let deleteAudio=()=>{
        debugger
        props.deleteAudio(props.id)
    }
    return<div>
        <div className="card mt-2">
            <div className="row">
                <div className="">
                    <div className="card-body">
                        <h1 className="Link">
                            {props.name}-{props.compositor}
                            <div className="right">
                                <button onClick={deleteAudio}
                                className="btn btn-close"
                                title="delete audio">
                                </button>
                            </div>
                        </h1>
                        <audio className="mt-4" controls={true}>
                            <source src={props.asrc && props.asrc}></source>
                        </audio>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default AudioTemplate
