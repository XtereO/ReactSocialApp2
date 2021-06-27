import {AudioType} from "../../Types/types";
import React from "react";

type FuncType= {deleteAudio:(id:number)=>void}
type PropsType=AudioType & FuncType;

let AudioTemplate:React.FC<PropsType>=(props:PropsType)=>{
    let deleteAudio=()=>{
        props.deleteAudio(props.id)
    }
    return<div>
        <div className="card mt-2">
            <div className="row">
                <div className="col-md-2">
                    <img className="w-100" src={props.img} />
                </div>
                <div className="col-md-10">
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
