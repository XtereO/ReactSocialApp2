import React from "react";

type PropsType={
  name:string
  message:string
}

let singleMessage:React.FC<PropsType>=(props)=>{
    return<div>
        <div className="card row mt-2 ">
            <div className="container">
                <h1>
                    {props.name}
                </h1>
                <div className="card-body">
                    {props.message}
                </div>
            </div>
        </div>
    </div>
}

export default singleMessage
