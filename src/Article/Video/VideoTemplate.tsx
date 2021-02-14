import React from "react";

type PropsType={
  id:number,
  vsrc:string,
  RemoveVideo:(id:number)=>void,
  compositor:string,
  name:string
}

let VideoTemplate:React.FC<PropsType>=(props:PropsType)=>{
    let RemoveVideo=()=>{
        props.RemoveVideo(props.id)
    }
    return<div>
        <div className="card w-100">
            <div className="card-body">
                <h1 className="Link">
                    {props.name} - {props.compositor}
                    <div className="right">
                        <button onClick={RemoveVideo} className="btn-close">
                        </button>
                    </div>
                </h1>
                <video controls={true}>
                    <source src={props.vsrc}>
                    </source>
                </video>
            </div>
        </div>
    </div>
}
export default VideoTemplate
