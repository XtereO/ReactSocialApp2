
let Textarea=({input,meta, ...props})=>{
    let hasError=meta.touched && meta.error
    return<div>
        <textarea className={hasError ? "form-control  is-invalid" : "form-control"} 
        {...input} {...props}  />
        <span className="text-danger">{hasError && meta.error}</span>
    </div>
}

export default Textarea