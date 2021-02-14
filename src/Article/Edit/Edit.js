import { reduxForm,Field } from "redux-form";
import Input from "../../Bricks/LoginInput";
import { useEffect, useState } from "react";
import { requiredField } from "../../Validates/ValidateForText";

let Edit=({Account,successfullMessage, ...props})=>{
    let [isUpdatePhoto,setUpdatePhoto]=useState(false);
    let [isSaved,setSave]=useState(false);
    useEffect(()=>{
        props.setAccountThunk(props.userId)
    },[])
    let setEditAccount=(value)=>{
        props.setEditAccountThunk(value,setSave)
    }
    let onChangePhoto=(e)=>{
        props.setPhoto(e.target.files[0])
        setUpdatePhoto(true)
    }
    return<div>
        <div className="container text-light">
            Edit profile
            <div className="right">
            {isUpdatePhoto && "Photo have updated"}
            </div>
        </div>
        <div className="text-light">
            ChangePhoto:
            <div className="right">
            <input onChange={onChangePhoto} type={"file"} className="form-control" />
            </div>
        </div>
        {Account.fullName && <EditReduxForm isSaved={isSaved}
        initialValues={Account} onSubmit={setEditAccount} Account={Account}/>}
    </div>
}

let EditForm=(props)=>{
    return<form onSubmit={props.handleSubmit}>
        <ul className="list-group">
        <li className="list-group-item d-flex">
            Looking for a job: <Field className="form-check-input mt-1" type={"checkbox"}
            component={"input"} name={"lookingForAJob"}/>
        </li>
        <li className="list-group-item d-flex">
            Description job: <Field component={Input} name={"lookingForAJobDescription"}
            validate={[requiredField]}/>
        </li>
        <li className="list-group-item d-flex">
            About Me: <Field component={Input} name={"aboutMe"}
            validate={[requiredField]}/>
        </li>
        <li className="list-group-item d-flex">
            fullName: <Field  component={Input} name={"fullName"} validate={[requiredField]}/>
        </li>
        <li className="list-group-item d-flex">
            <details className="w-100">
                <summary>Contacts</summary>
                <ul className="list-group">
                    {Object.keys(props.Account.contacts).map(key=>{
                        return<li className="list-group-item d-flex">
                        {key}: <Field component={Input} name={`contacts.${key}`} />
                    </li>
                    })}
                </ul>
            </details>
        </li>
        </ul>
        <div className="right mt-2">
            {props.isSaved ? <span className="text-success">Save successfull</span>:
            <span className="text-danger">{props.error}</span>}
            <button className="btn btn-success">
                Save
            </button>
        </div>
    </form>
}

let EditReduxForm=reduxForm({form:"forEdit"})(EditForm)

export default Edit
