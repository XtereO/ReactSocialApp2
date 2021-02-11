let singleMessage=(props)=>{
    return<div>
        <div className="card row mt-2 ">
            <div className="col-2">
                <img className="img w-100 rounded" src={props.img}/>
            </div>
            <div className="col-10">
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