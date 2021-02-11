
let TextareaUp=({input,meta, ...props})=>{
    let hasError=meta.error && meta.touched
    return<div>
        <div className="text-danger">
            {hasError && meta.error}
        </div>
        <div>
            <textarea className={hasError ? "form-control is-invalid" : "form-control"} 
            {...input} {...props}/>
        </div>
    </div>
}

export default TextareaUp