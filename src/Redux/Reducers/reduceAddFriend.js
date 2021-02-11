import {addFriendPage} from "./../../API/API"

let show_More="addFriend/showMore"
let do_Follow="addFriend/doFollow"
let do_UnFollow="addFriend/doUnFollow"
let change_Page="addFriend/changePage"
let set_Count_Page="addFriend/setCountPageAC"
let set_Fetching="addFriend/setFetching"
let set_Button_Disabled="addFriend/buttonDisabled"
let set_Progress="addFriend/isProgress"

let initialState={
    Property:{
        Suggested:[
        ],
        curPage:1,
        _totalCount:0,
        _countAcOnPage:1000,
        countPage:0,
        isFetching:false,
        followingInProgress:[],
        isProgress:false
    }
}

let reduceAddFriend=(state=initialState,action)=>{
    let curState={...state,Property:{...state.Property}};
    switch (action.type){
        case show_More:
            curState.Property={...state.Property,
                Suggested:[...state.Property.Suggested,...action.users]}    
            return curState 
        case do_UnFollow:
            curState.Property.Suggested=state.Property.Suggested.map((u)=>{
                if(action.curId===u.id){
                    return {...u,followed:true}
                }
                return u
            })
            return curState
        case do_Follow:
            curState.Property.Suggested=state.Property.Suggested.map((u)=>{
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
            curState.Property.countPage={...state.Property.countPage}
            curState.Property._totalCount={...state.Property._totalCount}
            curState.Property._totalCount=action.count
            curState.Property.countPage=Math.ceil(action.count/state.Property._countAcOnPage)
            return curState
        case set_Fetching:
            curState.Property.isFetching={...state.Property.isFetching}
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

export let showMore=(users)=>{
    return {
        type:show_More,
        users
    }
}
export let doFollow=(curId)=>{
    return {
        curId,
        type:do_Follow
    }
}
export let doUnFollow=(curId)=>{
    return{
        type:do_UnFollow,
        curId
    }
}
export let changePage=(curPage)=>{
    return{
        curPage,
        type:change_Page
    }
}
export let setCountPage=(count)=>{
    return {
        type:set_Count_Page,
        count
    }
}
export let setFetching=(isLoad)=>{
    return{
        type:set_Fetching,
        isLoad
    }
}
export let setProgress=(progress)=>{
    return {
        type:set_Progress,
        progress
    }
}
export let setButtonDisabled=(id)=>{
    return{
        type:set_Button_Disabled,
        id
    }
}
let doFollowDRY= async (dispatch,request,action,id)=>{
    dispatch(setProgress(true))
    dispatch(setButtonDisabled(id))  
    let response = await request(id)

    dispatch(setProgress(false))
    dispatch(setButtonDisabled(id))
    if(response.data.resultCode==0){
        dispatch(action(id))
    }
}
export let doFollowThunk=(id)=> async (dispatch)=>{
    doFollowDRY(dispatch,addFriendPage.doFollow,doFollow,id)
}
export let doUnFollowThunk=(id)=> async (dispatch)=>{
    doFollowDRY(dispatch,addFriendPage.doUnFollow,doUnFollow,id)
}
export let requestFriendsThunk=(page)=> async (dispatch)=>{
        dispatch(setFetching(true))
        let response=await addFriendPage.requestFriends(page)
        
        dispatch(setCountPage(response.data.totalCount))
        dispatch(showMore(response.data.items))
        dispatch(setFetching(false))
}

export default reduceAddFriend