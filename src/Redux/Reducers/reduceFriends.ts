import { addFriendPage } from "../../API/API";
import { ThunkAction } from "redux-thunk";
import { AppStateType } from "../Redux";
let Get_Friends:"reduceFriends/getFriends"="reduceFriends/getFriends"
let Remove_Friends:"reduceFrieds/RemoveFriends"="reduceFrieds/RemoveFriends"

type ThunkType=ThunkAction<Promise<void>,AppStateType,unknown,ActionType>

export type FriendType={
    id:number
    name:string
    status:string | null
    photos:{
        small:string | null
        large:string | null
    }
    followed:boolean
}
let initialState={
    Property:{
        friendsData:[
        ] as Array<FriendType>
    }
}

export type InitialStateType=typeof initialState
type ActionType=GetFriendsType | RemoveFriendsType

let reduceFriends=(state=initialState,action:ActionType):InitialStateType=>{
    switch(action.type){
        case Get_Friends:
            return{...state,Property:
                {friendsData:[...action.users]}}
        case Remove_Friends:
            return{...state,Property:
                {friendsData:state.Property.friendsData.filter(f=>f.id!=action.id)}}
        default:
            return state
    }
}

type RemoveFriendsType={
    id:number
    type:typeof Remove_Friends
}
let removeFriends=(id:number):RemoveFriendsType=>{
    return{
        type:Remove_Friends,
        id
    }
}
type GetFriendsType={
   users:Array<FriendType>
   type:typeof Get_Friends 
}
let getFriends=(users:Array<FriendType>):GetFriendsType=>{
    return{
        type:Get_Friends,
        users
    }
}
export let getFriendsThunk=(term:string=""):ThunkType=>async (dispatch:any)=>{
    let response= await addFriendPage.requestRealFriends(term)

    dispatch(getFriends(response.data.items))
}
export let removeFriendsThunk=(id:number):ThunkType=>async (dispatch:any)=>{
    let response= await addFriendPage.doFollow(id)

    dispatch(removeFriends(id))
}

export default reduceFriends
