import {mainPage} from "../../API/API"

let change_Status="Main/ChangeStatus";
let change_Text="Main/ChangeText";
let do_Post="Main/DoPost";
let do_Like="Main/DoLike";
let set_Account="Main/setAccount";
let set_Status="Main/setStatus";
let delete_Post="Main/deletePost";
let SET_PHOTO_SUCCESS="Main/setPhotoSuccess"

let initialState={
    Property:{
        Account:null,
        text:"...I",
        posts:[],
        status:"..."
    }
}


let reduceMain=(state=initialState,action)=>{
    let curState={...state};
    curState.Property={...state.Property};
    if(action.type===set_Status){
        curState.Property.status=action.status
        return curState
    }
    if(action.type==change_Status){
        curState.Property.status={...state.Property.status};
        curState.Property.status=action.curText;
        return curState;
    }
    if(action.type==change_Text){
        curState.Property.text={...state.Property.text};
        curState.Property.text=action.curText;
        return curState
    }
    if(action.type==do_Post){
        curState.Property.posts=[...state.Property.posts]
        curState.Property.posts.push(
            {name:curState.Property.Account.fullName,
            message:action.text,
            img:curState.Property.Account.photos.large,
            like:0,ableLike:true}
        )
        curState.Property.text=" ";
        return curState;
    }
    if(action.type==do_Like){
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
    }
    if(action.type==set_Account){
        curState.Property.Account={...state.Property.Account}
        curState.Property.Account=action.data
        return curState
    }
    if(action.type==delete_Post){
        curState.Property.posts=[...state.Property.posts]
        let newPosts=curState.Property.posts.filter(p=>((action.like!=p.like) || (action.message!=p.message) || (action.name!=p.name) ))
        curState.Property.posts=newPosts
        return curState;
    }
    return state
}
export let changeStatus=(t)=>{
    return {
        type:change_Status,
        curText:t
    }
}
export let changeText=(t)=>{
    return{
        type:change_Text,
        curText:t
    }
}
export let doPost=(text)=>{
    return{
        type:do_Post,
        text
    }
}
export let doLike=(n,m,l)=>{
    return {
        type:do_Like,
        name:n,
        message:m,
        like:l
    }
} 
export let setAccount=(data)=>{
    return{
    type:set_Account,
    data
    }
}
export let deletePost=(name,message,like)=>{
    return{
        type:delete_Post,
        name,
        message,like
    }
}
let setStatus=(status)=>{
    return{
        type:set_Status,
        status
    } 
}
export let setAccountThunk=(userId)=> async (dispatch)=>{
    let responce= await mainPage.getProfile(userId)
    dispatch(setAccount(responce.data))
}
export let getStatusThunk=(id)=> async (dispatch)=>{
    let response=await mainPage.getStatus(id)
    dispatch(setStatus(response.data))
}
export let setStatusThunk=(status)=> async (dispatch)=>{
    let response= await mainPage.setStatus(status)
    dispatch(setStatus(status))
}


export default reduceMain
