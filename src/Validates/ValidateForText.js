//Validate - its function for field ,which work with value and 
//looking for a error
export let requiredField=value=>{
    if(value) return undefined

    return "Field is required"
}

export let maxLengthCreator=(maxLengtn)=>(value)=>{
    if(value && value.length>maxLengtn) return `Max length is ${maxLengtn}`

    return undefined
}