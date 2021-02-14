import { stopSubmit } from "redux-form";
import { mainPage } from "../../API/API";
import type {AccountType,ContactsType,PhotosType} from "../../Types/types"
import { ThunkAction } from "redux-thunk";
import { AppStateType } from "../Redux";
import { ResultCode } from "../../API/API";

let SET_PHOTO_SUCCESS:"edit/setPhotoSuccess" = "edit/setPhotoSuccess";
let set_Account:"edit/setAccount"="edit/setAccount"

type ThunkType=ThunkAction<Promise<void>,AppStateType,unknown,ActionType>

let initialState = {
    Property: {
        Account:{
          photos:{
            large:null,
            litle:null
          },
          lookingForAJob:null,
          lookingForAJobDescription:null,
          fullName:null,
          contacts:{
            github:null,
            vk:null,
            facebook:null,
            instagram:null,
            twitter:null,
            website:null,
            youtube:null,
            mainLink:null,
          } as ContactsType | null
        } as AccountType,
        successMessagePhoto:"" as string
    }
}

type InitialStateType=typeof initialState
type ActionType=SetAccountType | SetPhotoSuccessType

let reduceEdit = (state = initialState, action:ActionType):InitialStateType => {
    let curState = { ...state, Property: { ...state.Property } }
    switch (action.type) {
        case (SET_PHOTO_SUCCESS):
            curState.Property.successMessagePhoto=state.Property.successMessagePhoto
            curState.Property.Account.photos = action.photos
            curState.Property.successMessagePhoto="Photo have updated"
            return curState
        case set_Account:
            curState.Property.Account={...state.Property.Account}
            curState.Property.Account=action.data
            return curState
        default:
            return state
    }
}

export type SetPhotoSuccessType={
  type:typeof SET_PHOTO_SUCCESS,
  photos:PhotosType //Type files
}
let setPhotoSuccess = (photos:PhotosType):SetPhotoSuccessType => {
    return {
        type: SET_PHOTO_SUCCESS,
        photos
    }
}

export type SetAccountType={
  type:typeof set_Account,
  data:AccountType
}
let setAccount=(data:AccountType):SetAccountType=>{
    return{
    type:set_Account,
    data
    }
}

export let setPhoto = (photos:any):ThunkType => async (dispatch:any) => {
    let response = await mainPage.setPhoto(photos)
    dispatch(setPhotoSuccess(response.data.data.photos))
}
export let setAccountThunk=(userId:number):ThunkType=> async (dispatch:any)=>{
    let responce= await mainPage.getProfile(userId)
    dispatch(setAccount(responce.data))
}
export let setEditAccountThunk=(values:AccountType,setSave:any):ThunkType=> async (dispatch:any)=>{
    let response= await mainPage.setEditAccount(values)
    if(response.data.resultCode===ResultCode.Success){
        dispatch(setAccount(values))
        setSave(true)
    }else{
        dispatch(stopSubmit("forEdit",{_error:response.data.messages[0]}))
    }
}

export default reduceEdit
