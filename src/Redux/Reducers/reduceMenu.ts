import {mainPage,loginPage,security} from "../../API/API";
import { stopSubmit } from "redux-form";
import {ThunkAction} from "redux-thunk";
import { AppStateType } from "../Redux";
import { DataType } from "../../Types/types";
import { ResultCode,ResultCodeWithCapthca } from "../../API/API";

type ThunkType=ThunkAction<Promise<void>, AppStateType,unknown,ActionType>
let set_Auth:"Menu/setAuth"="Menu/setAuth"
let set_Captcha_Success:"Menu/setCaptcha/Success"="Menu/setCaptcha/Success"

let initialState={
    data:{
        login:null,
        email:null,
        id:null
    } as DataType,
    captchaUrl:null as null | string, //if null then dont required
    isAuth:false as boolean
}

type InitialStateType=typeof initialState
type ActionType = SetCaptchaSuccessType | SetAuthType

let reduceAside=(state=initialState,action:ActionType):InitialStateType=>{
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

export type SetCaptchaSuccessType={
  type:typeof set_Captcha_Success,
  url:string | null
}
let setCaptchaSuccess=(url:string | null):SetCaptchaSuccessType=>{
    return{
        type:set_Captcha_Success,
        url
    }
}

export type SetAuthType={
  type: typeof set_Auth,
  log:boolean,
  data:DataType
}
export let setAuth=(id:number | null,email:string | null,login:string | null,log:boolean):SetAuthType=>{
    return{
        type:set_Auth,
        log,
        data:{
        id,email,login
        }
    }
}

export let setAuthThunk=(log=false):ThunkType=> async (dispatch:any)=>{
    if(log===false){
        return dispatch(setAuth(null,null,null,false))
    }
    let response= await mainPage.getMyProfile()
    if (response.data.resultCode===ResultCode.Success){
        let {id,login,email} = response.data.data
        dispatch(setAuth(id,email,login,log))
    }else{
        dispatch(setAuth(null,null,null,false))
    }
}
export let loginThunk=(email:string,password:string,rememberMe=false,captcha:null | string=null):ThunkType=> async (dispatch:any)=>{
    let response=await loginPage.logIn(email,password,rememberMe,captcha)
    if (response.data.resultCode==ResultCode.Success){
        dispatch(setAuthThunk(true))
        dispatch(setCaptchaSuccess(null))
    }else {
        if(response.data.resultCode==ResultCodeWithCapthca.Captha){
            dispatch(getCaptcha())
        }
        if (response.data.messages.length>0){
            dispatch(stopSubmit("login",{_error:response.data.messages[0]}))
        }else{
            dispatch(stopSubmit("login",{_error:"Some error..."}))
        }
    }
}
export let logoutThunk=():ThunkType=> async (dispatch:any)=>{
    let response= await loginPage.logOut()
    if(response.data.resultCode==ResultCode.Success){
        dispatch(setAuthThunk(false))
    }
}
export let getCaptcha=():ThunkType=>async (dispatch:any)=>{
    let response = await security.getCaptcha()
    dispatch(setCaptchaSuccess(response.data.url))
}

export default reduceAside
