
let LoginInput=({input,meta, ...props})=>{
    let hasError=meta.error && meta.touched
    return<div className="d-flex mt-2">
        <div>
            <input className={hasError ? "form-control is-invalid" : "form-control"}
            {...props} {...input} placeholder="..."  />
        </div>
        <div className="">{hasError && meta.error}</div>
    </div>
}

export default LoginInput