import { stopSubmit } from "redux-form";
import { mainPage } from "../../API/API";
let SET_PHOTO_SUCCESS = "edit/setPhotoSuccess";
let set_Account="edit/setAccount"

let initialState = {
    Property: {
        Account:null,
        successMessagePhoto:""
    }
}

let reduceEdit = (state = initialState, action) => {
    let curState = { ...state, Property: { ...state.Property } }
    switch (action.type) {
        case (SET_PHOTO_SUCCESS):
            curState.Property.successMessagePhoto=state.Property.successMessagePhoto
            curState.Property.Account.photos = { ...state.Property.Account.photos }
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



let setPhotoSuccess = (photos) => {
    return {
        type: SET_PHOTO_SUCCESS,
        photos
    }
}
let setAccount=(data)=>{
    return{
    type:set_Account,
    data
    }
}
export let setPhoto = (photos) => async (dispatch) => {
    let response = await mainPage.setPhoto(photos)
    dispatch(setPhotoSuccess(response.data.data.photos))
}
export let setAccountThunk=(userId)=> async (dispatch)=>{
    let responce= await mainPage.getProfile(userId)
    dispatch(setAccount(responce.data))
}
export let setEditAccountThunk=(values,setSave)=> async (dispatch)=>{
    let response= await mainPage.setEditAccount(values)
    if(response.data.resultCode===0){
        dispatch(setAccount(values))
        setSave(true)
    }else{
        dispatch(stopSubmit("forEdit",{_error:response.data.messages[0]}))
    }
}

export default reduceEdit
