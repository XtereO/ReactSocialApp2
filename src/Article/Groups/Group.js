import { NavLink } from "react-router-dom"

let Group=(props)=>{
    return<div className="card mt-2">
        <div className="row">
        <div className="col-md-2">
            <img className="img w-100 rounded" src={props.img}/>
        </div>

        <div className="col-md-10">
            <div className="card-body">
                <a target="_blank" href={props.way} className="Link"><h1>
                    {props.name}
                </h1></a>
                {props.discription}<br />
                <div className="right mt-4">
                    followers <div className="badge">
                        {props.followers}</div>
                </div>
            </div>
        </div>
        </div>
    </div>
}

export default Group