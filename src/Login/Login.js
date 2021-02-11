import { reduxForm,Field } from "redux-form";
import { requiredField,maxLengthCreator } from "../Validates/ValidateForText";
import LoginInput from "../Bricks/LoginInput";
import { Redirect } from "react-router-dom";

let maxLength100=maxLengthCreator(100)

let LoginForm =(props)=>{
    return<form onSubmit={props.handleSubmit}>
    <div className="Login container px-4">
        <h1 align="center" color="white">Login</h1>
        <div className="d-flex mt-2">
            Email: 
            <Field name={"email"} component={LoginInput} 
            placeholder="Enter Email"  
            validate={[requiredField,maxLength100]}/>
        </div>
        <div className="d-flex mt-2">
            Password: 
            <Field name={"password"} component={LoginInput}
            placeholder="Enter Password" 
            type="password" validate={[requiredField,maxLength100]}/>
        </div>
        <div className="d-flex mt-2">
            Remember Me <Field name={"rememberMe"} component={"input"}
            className="form-check-input" type="checkbox"/>
        </div>
        <div className="mt-2">
            {props.captcha && <img className="rounded" 
            src={props.captcha} />}
        </div>
        <div className="d-flex mt-2">
            {props.captcha && <Field name={"captcha"} component={LoginInput}
            validate={[requiredField]}/>}
        </div>
        <div className="text-danger">
            {props.error}
        </div>
        <button className="btn btn-success w-100 btnInMessage">
            Success
        </button>
    </div>
    </form>
}
let LoginReduxForm=reduxForm({form:"login"})(LoginForm)

let Login=(props)=>{

    let login=(value)=>{
        props.loginThunk(value.email,value.password,value.rememberMe,value.captcha)
    }

    if(props.isAuth===true){
        return <Redirect to="/Main" />
    }

    return<div>
        <LoginReduxForm captcha={props.captcha} onSubmit={login}/>
    </div>
}

export default Login