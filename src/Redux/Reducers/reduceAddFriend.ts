import {addFriendPage} from "./../../API/API"
import { ThunkAction } from "redux-thunk";
import { AppStateType } from "../Redux";

let show_More:"addFriend/showMore"="addFriend/showMore"
let do_Follow:"addFriend/doFollow"="addFriend/doFollow"
let do_UnFollow:"addFriend/doUnFollow"="addFriend/doUnFollow"
let change_Page:"addFriend/changePage"="addFriend/changePage"
let set_Count_Page:"addFriend/setCountPageAC"="addFriend/setCountPageAC"
let set_Fetching:"addFriend/setFetching"="addFriend/setFetching"
let set_Button_Disabled:"addFriend/buttonDisabled"="addFriend/buttonDisabled"
let set_Progress:"addFriend/isProgress"="addFriend/isProgress"

type ThunkType=ThunkAction<Promise<void>, AppStateType, unknown, ActionType>

let initialState={
    Property:{
        Suggested:[
        ]as any, //Users which show on the page
        curPage:1 as number,
        _totalCount:0 as number,
        _countAcOnPage:1000 as number,  //Count Account on Page
        countPage:0 as number,
        isFetching:false as boolean,
        followingInProgress:[] as Array<number>,
        isProgress:false as boolean
    }
}

type InititalStateType=typeof initialState
type ActionType=ShowMoreType | DoFollowType | DoUnFollowType | ChangePageType | SetCountPageType |
SetFetchingType | SetProgressType | SetButtonDisabledType

let reduceAddFriend=(state=initialState,action:ActionType):InititalStateType=>{
    let curState={...state,Property:{...state.Property}};
    switch (action.type){
        case show_More:
            curState.Property={...state.Property,
                Suggested:[...state.Property.Suggested,...action.users]}
            return curState
        case do_UnFollow:
            curState.Property.Suggested=state.Property.Suggested.map((u:any)=>{
                if(action.curId===u.id){
                    return {...u,followed:true}
                }
                return u
            })
            return curState
        case do_Follow:
            curState.Property.Suggested=state.Property.Suggested.map((u:any)=>{
                if(action.curId===u.id){
                    return {...u,followed:false}
                }
                return u
            })
            return curState
        case change_Page:
            curState.Property.Suggested=[...state.Property.Suggested]
            curState.Property.Suggested=[]
            curState.Property.curPage=action.curPage
            return curState
        case set_Count_Page:
            curState.Property.countPage=state.Property.countPage
            curState.Property._totalCount=state.Property._totalCount
            curState.Property._totalCount=action.count
            curState.Property.countPage=Math.ceil(action.count/state.Property._countAcOnPage)
            return curState
        case set_Fetching:
            curState.Property.isFetching=state.Property.isFetching
            curState.Property.isFetching=action.isLoad
            return curState
        case set_Progress:
            curState.Property.isProgress=state.Property.isProgress
            curState.Property.isProgress=action.progress
            return curState
        case set_Button_Disabled:
            curState.Property.followingInProgress=[...state.Property.followingInProgress]
            if(state.Property.isProgress){
                curState.Property.followingInProgress.push(action.id)
            }else{
                curState.Property.followingInProgress=curState.Property.followingInProgress.filter(e=>e!=action.id)
            }
            return curState
        default:
            return state
    }
}

export type ShowMoreType={
  type:typeof show_More,
  users:any
}
export let showMore=(users:any):ShowMoreType=>{
    return {
        type:show_More,
        users
    }
}

export type DoFollowType={
  type:typeof do_Follow,
  curId:number
}
export let doFollow=(curId:number)=>{
    return {
        curId,
        type:do_Follow
    }
}

export type DoUnFollowType={
  type:typeof do_UnFollow,
  curId:number
}
export let doUnFollow=(curId:number):DoUnFollowType=>{
    return{
        type:do_UnFollow,
        curId
    }
}

export type ChangePageType={
  curPage:number,
  type:typeof change_Page
}
export let changePage=(curPage:number):ChangePageType=>{
    return{
        curPage,
        type:change_Page
    }
}

export type SetCountPageType={
  type:typeof set_Count_Page,
  count:number
}
export let setCountPage=(count:number):SetCountPageType=>{
    return {
        type:set_Count_Page,
        count
    }
}

export type SetFetchingType={
  type:typeof set_Fetching,
  isLoad:boolean
}
export let setFetching=(isLoad:boolean):SetFetchingType=>{
    return{
        type:set_Fetching,
        isLoad
    }
}

export type SetProgressType={
  type:typeof set_Progress,
  progress:boolean
}
export let setProgress=(progress:boolean):SetProgressType=>{
    return {
        type:set_Progress,
        progress
    }
}

export type SetButtonDisabledType={
  type:typeof set_Button_Disabled,
  id:number
}
export let setButtonDisabled=(id:number):SetButtonDisabledType=>{
    return{
        type:set_Button_Disabled,
        id
    }
}
let doFollowDRY= async (dispatch:any,request:any,action:any,id:number)=>{
    dispatch(setProgress(true))
    dispatch(setButtonDisabled(id))
    let response = await request(id)

    dispatch(setProgress(false))
    dispatch(setButtonDisabled(id))
    if(response.data.resultCode==0){
        dispatch(action(id))
    }
}
export let doFollowThunk=(id:number):ThunkType=> async (dispatch:any)=>{
    doFollowDRY(dispatch,addFriendPage.doFollow,doFollow,id)
}
export let doUnFollowThunk=(id:number):ThunkType=> async (dispatch:any)=>{
    doFollowDRY(dispatch,addFriendPage.doUnFollow,doUnFollow,id)
}
export let requestFriendsThunk=(page:number):ThunkType=> async (dispatch:any)=>{
        dispatch(setFetching(true))
        let response=await addFriendPage.requestFriends(page)

        dispatch(setCountPage(response.data.totalCount))
        dispatch(showMore(response.data.items))
        dispatch(setFetching(false))
}

export default reduceAddFriend
