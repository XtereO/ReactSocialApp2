import { Dispatch } from "redux";
import { ChatAPI } from "../../API/ChatAPI";
import { MessageType } from "../../Article/GlobalChat/Types";

let MESSAGE_RECEIVED:"chatReducer/MESSAGE_RECEIVED"="chatReducer/MESSAGE_RECEIVED"
let MESSAGE_CLEAN:"chatReducer/MESSAGE_CLEAN"="chatReducer/MESSAGE_CLEAN"
let SET_INIT:"chatReducer/SET_INIT"="chatReducer/SET_INIT"

let initialState={
    messages:[] as MessageType[],
    isInit:false as boolean
} 

type InitialStateType=typeof initialState
type ActionType=MessageReceivedType | MessageCleanType | SetInitType

export const reduceChat=(state=initialState,action:ActionType):InitialStateType=>{
    switch(action.type){
        case MESSAGE_RECEIVED:
            return{...state,
            messages:[...state.messages,...action.messages]}
        case MESSAGE_CLEAN:
            return{...state,
                messages:[]
            }
        case SET_INIT:
            return{...state,
            isInit:action.isInit
        }
        default:
            return state
    }
}
type SetInitType={
    type:typeof SET_INIT
    isInit:boolean
}
const setInit=(isInit:boolean):SetInitType=>{
    return{
        type:SET_INIT,
        isInit
    }
}
type MessageCleanType={
    type:typeof MESSAGE_CLEAN
}
const messageClean=():MessageCleanType=>{
    return{
        type:MESSAGE_CLEAN
    }
}
type MessageReceivedType={
    type:typeof MESSAGE_RECEIVED
    messages:MessageType[]
}

const messageReceived=(messages:MessageType[]):MessageReceivedType=>{
    return{
        type:MESSAGE_RECEIVED,
        messages
    }
}

//memorization
let _newMessageHandler:((messages:MessageType[])=>void) | null =null
const newMessageHandlerCreator=(dispatch:Dispatch)=>{
    if (_newMessageHandler===null){
        _newMessageHandler=(messages:MessageType[])=>{
            dispatch(messageReceived(messages))
        }
    }
    return _newMessageHandler
}
let _newInitHandler:((isInit:boolean)=>void) | null =null
const newInitHandlerCreator=(dispatch:Dispatch)=>{
    if (_newInitHandler===null){
        _newInitHandler=(isInit:boolean)=>{
            dispatch(setInit(isInit))
        }
    }
    return _newInitHandler
}


export const messageStartListhening=()=>async (dispatch:Dispatch)=>{
    ChatAPI.subscribe({
        callback:newMessageHandlerCreator(dispatch),
        event:"message"
    })
    ChatAPI.subscribe({
        callback:newInitHandlerCreator(dispatch),
        event:"init"
    })
    ChatAPI.start()
}
export const messageStopListhening=()=>async (dispatch:Dispatch)=>{
    ChatAPI.unsubscribe({
        callback:newMessageHandlerCreator(dispatch),
        event:"message"
    })
    ChatAPI.unsubscribe({
        callback:newInitHandlerCreator(dispatch),
        event:"init"
    })
    dispatch(messageClean())
    ChatAPI.stop()
}
export const sendMessage=(message:string)=>async (dispatch:Dispatch)=>{
    ChatAPI.send(message)
}
 