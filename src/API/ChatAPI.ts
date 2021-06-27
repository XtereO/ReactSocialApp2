import { MessageType } from "../Article/GlobalChat/Types"


let ws:WebSocket
type SubscriberMessageType=(messages:MessageType[])=>void
type SubscriberInitType=(isInit:boolean)=>void
let subscribers={
    message:[] as SubscriberMessageType[],
    init:[] as SubscriberInitType[]
}

/*
    {
        'messages':[] as MessageSubscriberType[],
        'init':[] as InitSubscriberType[]
    }
*/

const messageHandler=(e:MessageEvent)=>{
    let newMessages=JSON.parse(e.data)
    subscribers.message.forEach(s=>s(newMessages))
}
const initHandler=(isInit:boolean)=>()=>{
    subscribers.init.forEach(s=>s(isInit))
}
let closeHandler=()=>{
    initHandler(false)()
    setTimeout(createChannel,3000)
}
let createChannel=()=>{
    ws?.removeEventListener('open',initHandler(false))
    ws?.removeEventListener('close',closeHandler)
    ws?.removeEventListener('message',messageHandler)
    ws?.close()
    ws=new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
    ws.addEventListener('close',closeHandler)
    ws.addEventListener('message',messageHandler)
    ws.addEventListener('open',initHandler(true))
}

type EventType="message" | "init"

type SubscriberType={
    event:EventType,
    callback:SubscriberMessageType | SubscriberInitType
}

export const ChatAPI={
    subscribe:(subscriber:SubscriberType)=>{
        if (subscriber.event=="message"){ 
            subscribers.message.push(subscriber.callback as SubscriberMessageType)
        }else{
            subscribers.init.push(subscriber.callback as SubscriberInitType)
        }
    },
    unsubscribe:(subscriber:SubscriberType)=>{
        if (subscriber.event=="message"){
            subscribers.message=subscribers.message.filter(c=>c!==subscriber.callback)
        }else{
            subscribers.init=subscribers.init.filter(c=>c!==subscriber.callback)
        }
    },
    send:(message:string)=>{
        ws.send(message)
    },
    start:()=>{
        createChannel()
    },
    stop:()=>{
        ws.removeEventListener('close',closeHandler)
        ws.removeEventListener('message',messageHandler)
        ws.removeEventListener('open',initHandler(true))
        ws.removeEventListener('open',initHandler(true))
        ws.close()
    }
}