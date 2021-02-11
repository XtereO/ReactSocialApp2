
let VideoTemplate=(props)=>{
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
                <video controls="controls">
                    <source src={props.vsrc}>
                    </source>
                </video>
            </div>
        </div>
    </div>
}
export default VideoTemplate