import {mainPage,loginPage,security} from "../../API/API";
import { stopSubmit } from "redux-form";

let set_Auth="Menu/setAuth"
let set_Captcha_Success="Menu/setCaptcha/Success"

let initialState={
    data:{
        login:null,
        email:null,
        id:null
    },
    captchaUrl:null, //if null then dont required
    isAuth:false
}

let reduceAside=(state=initialState,action)=>{
    let curState={...state}

    if(action.type===set_Auth){
        curState.data={...state.data}
        curState.data={...action.data}
        curState.isAuth=action.log
        return curState
    }

    if(action.type===set_Captcha_Success){
        curState.captchaUrl=state.captchaUrl
        curState.captchaUrl=action.url
        return curState
    }
    
    return state
}

let setCaptchaSuccess=(url)=>{
    return{
        type:set_Captcha_Success,
        url
    }
}
export let setAuth=(id,email,login,log)=>{
    return{
        type:set_Auth,
        log,
        data:{
        id,email,login
        }
    }
}
export let setAuthThunk=(log=false)=> async (dispatch)=>{
    if(log===false){
        return dispatch(setAuth(null,null,null,false))
    }
    let response= await mainPage.getMyProfile()
    if (response.data.resultCode===0){
        let {id,login,email} = response.data.data
        dispatch(setAuth(id,email,login,log))
    }else{
        dispatch(setAuth(null,null,null,false))
    }
}
export let loginThunk=(email,password,rememberMe=false,captcha=null)=> async (dispatch)=>{
    let response=await loginPage.logIn(email,password,rememberMe,captcha)
    if (response.data.resultCode==0){
        dispatch(setAuthThunk(true))
        dispatch(setCaptchaSuccess(null))
    }else {
        if(response.data.resultCode==10){
            dispatch(getCaptcha())
        }
        if (response.data.messages.length>0){
            dispatch(stopSubmit("login",{_error:response.data.messages[0]}))
        }else{
            dispatch(stopSubmit("login",{_error:"Some error..."}))
        }
    }
}
export let logoutThunk=()=> async (dispatch)=>{
    let response= await loginPage.logOut()
    if(response.data.resultCode==0){
        dispatch(setAuthThunk(false))
    }
}
export let getCaptcha=()=>async (dispatch)=>{
    let response = await security.getCaptcha()
    dispatch(setCaptchaSuccess(response.data.url))
}

export default reduceAside