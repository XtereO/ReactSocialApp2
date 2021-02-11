
let PhotoTemplate=(props)=>{
    let removePhoto=()=>{
        props.RemovePhoto(props.id)
    }
    return<div className="col-md-6 card mt-2">
        <div className="card-body">
            <h1 className="Link">{props.name}
            <div>
                <button onClick={removePhoto} className="btn-close"></button>
            </div>
            </h1>
            <img className="img w-100 rounded" src={props.img} />
        </div>
    </div>
}

export default PhotoTemplate