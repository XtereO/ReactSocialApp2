import React from "react";

export type PhotoType={
  RemovePhoto:(id:number)=>void
  name:string
  id:number
  img:string
}

let PhotoTemplate:React.FC<PhotoType>=(props:PhotoType)=>{
    let removePhoto=()=>{
        props.RemovePhoto(props.id)
    }
    return<div className="col-md-6 card mt-2">
        <div className="card-body">
            <h1 className="Link">{props.name}
            <div className="right">
                <button onClick={removePhoto} className="btn-close"></button>
            </div>
            </h1>
            <img className="img w-100 rounded" src={props.img} />
        </div>
    </div>
}

export default PhotoTemplate
