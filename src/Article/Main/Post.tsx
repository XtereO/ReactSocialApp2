import { NavLink } from "react-router-dom";
import React from "react";

type PropsType={
  doLike:(name:string,message:string,like:number)=>void
  deletePost:(name:string,message:string,like:number)=>void
  img:string | null
  name:string
  message:string
  like:number
  ableLike:boolean
}

let Post:React.FC<PropsType>=(props)=>{
    let doLike=()=>{
        return props.doLike(props.name,props.message,props.like)
    }
    let deletePost=()=>{
        return props.deletePost(props.name,props.message,props.like)
    }
    return<div className="mt-2">
        <div className="card">
            <div className="row">
                <div className="col-md-2">
                    <img className="img w-100 rounded" src={props.img ? props.img : "https://yt3.ggpht.com/ytc/AAUvwniy7j4PC5ul7yauPrWqVsh5f4FfNtbWT5k3n6kj=s900-c-k-c0x00ffffff-no-rj"}/>
                </div>
                <div className="col-md-10">

                    <div className="right">
                        <button className="btn-close" onClick={deletePost}>
                        </button>
                    </div>

                    <h1 className="Link">{props.name}</h1>

                    <div className="card-body">
                        {props.message}
                    </div>
                    <div className="right">
                        {props.ableLike ? <button onClick={doLike} className="btn btn-outline-danger">
                            like
                        </button>
                        :
                        <button onClick={doLike} className="btn btn-danger">
                            like
                        </button>}
                        <span className="badge likeBg mx-2">{props.like}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Post
