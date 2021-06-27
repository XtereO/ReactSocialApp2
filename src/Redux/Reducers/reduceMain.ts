import {mainPage} from "../../API/API"
import type {AccountType,ContactsType,PhotosType} from "../../Types/types"
import { ThunkAction } from "redux-thunk";
import { AppStateType } from "../Redux";

let change_Status:"Main/ChangeStatus"="Main/ChangeStatus";
let change_Text:"Main/ChangeText"="Main/ChangeText";
let do_Post:"Main/DoPost"="Main/DoPost";
let do_Like:"Main/DoLike"="Main/DoLike";
let set_Account:"Main/setAccount"="Main/setAccount";
let set_Status:"Main/setStatus"="Main/setStatus";
let delete_Post:"Main/deletePost"="Main/deletePost";
let SET_PHOTO_SUCCESS:"Main/setPhotoSuccess"="Main/setPhotoSuccess"

type ThunkType= ThunkAction<Promise<void>, AppStateType, unknown, ActionType>

export type PostType={
  name:string | null,
  message:string | null,
  img:null | string,
  like:number,
  ableLike:boolean
}
let initialState={
    Property:{
        Account:{
          userId:null,
          photos:{
            large:null,
            litle:null
          } as PhotosType,
          lookingForAJob:null,
          lookingForAJobDescription:null,
          fullName:null,
          contacts:null
        } as AccountType,
        text:"I ..." as string | null,
        posts:[] as Array<PostType>,
        status:"..." as string
    }
}

type InitialStateType=typeof initialState
type ActionType=ChangeTextType | DoPostType | DoLikeType | SetAccountType
  | DeletePostType | SetStatusType | ChangeStatusType

let reduceMain=(state=initialState,action:ActionType):InitialStateType=>{
    let curState={...state};
    curState.Property={...state.Property};
    switch(action.type){
    case set_Status:
        curState.Property.status=action.status
        return curState
    
    case change_Status:
        curState.Property.status=state.Property.status;
        curState.Property.status=action.curText;
        return curState;

    case change_Text:
        curState.Property.text=state.Property.text;
        curState.Property.text=action.curText;
        return curState

    case do_Post:
        curState.Property.posts=[...state.Property.posts]
        curState.Property.posts.push(
            {name:curState.Property.Account.fullName,
            message:action.text,
            img:curState.Property.Account.photos.large,
            like:0,ableLike:true}
        )
        curState.Property.text=" ";
        return curState;
    
    case do_Like:
        curState.Property.posts=[...state.Property.posts]
        let posts=[...state.Property.posts]
        for(let key in posts){
            if ((posts[key].like===action.like)&&(posts[key].message===action.message)&&(posts[key].name===action.name)){
                if(posts[key].ableLike==true){
                    curState.Property.posts[key].like++;
                    curState.Property.posts[key].ableLike=false
                }
                else{
                    curState.Property.posts[key].like--;
                    curState.Property.posts[key].ableLike=true
                }
            }
        }
        return curState
    
    case set_Account:
        curState.Property.Account={...state.Property.Account}
        curState.Property.Account=action.data
        return curState
    
    case delete_Post:
        curState.Property.posts=[...state.Property.posts]
        let newPosts=curState.Property.posts.filter(p=>((action.like!=p.like) || (action.message!=p.message) || (action.name!=p.name) ))
        curState.Property.posts=newPosts
        return curState;
    
        default:return state
    }
}

export type ChangeStatusType={
  type:typeof change_Status,
  curText:string
}
export let changeStatus=(t:string):ChangeStatusType=>{
    return {
        type:change_Status,
        curText:t
    }
}

export type ChangeTextType={
  type:typeof change_Text,
  curText:string | null
}
export let changeText=(t:string | null):ChangeTextType=>{
    return{
        type:change_Text,
        curText:t
    }
}

export type DoPostType={
  type:typeof do_Post,
  text:string | null
}
export let doPost=(text:string | null):DoPostType=>{
    return{
        type:do_Post,
        text
    }
}

export type DoLikeType={
  type:typeof do_Like,
  name:string | null,
  message:string | null,
  like:number
}
export let doLike=(n:string | null,m:string | null,l:number):DoLikeType=>{
    return {
        type:do_Like,
        name:n,
        message:m,
        like:l
    }
}

export type SetAccountType={
  type:typeof set_Account,
  data:AccountType
}
export let setAccount=(data:AccountType):SetAccountType=>{
    return{
    type:set_Account,
    data
    }
}

export type DeletePostType={
  type:typeof delete_Post,
  name:string | null,
  message:string | null,
  like:number
}
export let deletePost=(name:string | null,message:string | null,like:number):DeletePostType=>{
    return{
        type:delete_Post,
        name,
        message,like
    }
}

export type SetStatusType={
  type:typeof set_Status,
  status:string
}
let setStatus=(status:string):SetStatusType=>{
    return{
        type:set_Status,
        status
    }
}

export let setAccountThunk=(userId:number):ThunkType=> async (dispatch:any)=>{
    let responce= await mainPage.getProfile(userId)
    dispatch(setAccount(responce.data))
}
export let getStatusThunk=(id:number):ThunkType=> async (dispatch:any)=>{
    let response=await mainPage.getStatus(id)
    dispatch(setStatus(response.data))
}
export let setStatusThunk=(status:string):ThunkType=> async (dispatch:any)=>{
    let response= await mainPage.setStatus(status)
    dispatch(setStatus(status))
}


export default reduceMain
