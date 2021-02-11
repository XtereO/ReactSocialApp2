import { NavLink } from "react-router-dom";

let Post=(props)=>{
    let doLike=()=>{
        return props.doLike(props.doLike(props.name,props.message,props.like))
    }
    let deletePost=()=>{
        return props.deletePost(props.deletePost(props.name,props.message,props.like))
    }
    return<div className="mt-2">
        <div className="card">
            <div className="row">
                <div className="col-md-2">
                    <img className="img w-100 rounded" src={props.img}/>
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