
let LoginInput=({input,meta, ...props})=>{
    let hasError=meta.error && meta.touched
    return<div className="row mt-2">
        <div className="col-md-8">
            <input className={hasError ? "form-control is-invalid w-100" : "form-control w-100"}
            {...props} {...input} placeholder="..."  />
        </div>
        <div className="col-md-3">{hasError && meta.error}</div>
    </div>
}

export default LoginInput