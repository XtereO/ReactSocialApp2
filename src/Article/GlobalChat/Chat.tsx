import React from "react";
import { ChatType } from "./GlobalChat";
import { SingleMessage } from "./SingleMessage";

export let Chat:React.FC<ChatType>=(props)=>{
    let messages=props.messages.map(m=><SingleMessage 
    photo={m.photo} userName={m.userName} userId={m.userId}
    message={m.message} key={m.userName+m.message}/>)
    return<div>
        {messages}
    </div>
}
