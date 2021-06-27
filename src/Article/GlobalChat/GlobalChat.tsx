import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { messageStartListhening, messageStopListhening } from "../../Redux/Reducers/chatReducer";
import { Chat } from "./Chat";
import { ChatInput } from "./ChatInput";
import { AppStateType } from "../../Redux/Redux";

export type MessageType={
    message:string
    photo:string
    userId:number
    userName:string
}


let GlobalChat=React.memo(()=>{

    const dispatch=useDispatch()
    let messages=useSelector((state:AppStateType)=>{
        return state.chat.messages
    })

    useEffect(()=>{
        dispatch(messageStartListhening())
        return(()=>{
            dispatch(messageStopListhening())
        })
    },[])

    let [isAutoScroll,setAutoScroll]=useState(true)
    let messageAnchorRef=useRef<HTMLDivElement>(null);

    const scrollHandler=(e:React.UIEvent<HTMLDivElement,UIEvent>)=>{
        const element=e.currentTarget
        let diff=Math.abs(element.scrollHeight - element.scrollTop-element.clientHeight)
        if (diff<300){
            setAutoScroll(true)
        }
        else{
            setAutoScroll(false)
        }
    }

    useEffect(()=>{
        if (isAutoScroll){
            messageAnchorRef.current?.scrollIntoView({behavior:'smooth'})
        }
    },[messages])


    return<div style={{height:'700px'}}>
        <div>
            <div style={{overflowX:"hidden",overflowY:"scroll",height:550}}
            onScroll={scrollHandler}>
                <Chat messages={messages} />
                <div ref={messageAnchorRef}/>
            </div>
            <div className="mt-4 w-100" style={{maxHeight:100,overflow:'hidden'}}>
                <ChatInput/>
            </div>
        </div>
    </div>
})
export type ChatType={
    messages:MessageType[]
}


export default GlobalChat

function withCheckAuth(arg0: () => JSX.Element): any {
    throw new Error("Function not implemented.");
}
