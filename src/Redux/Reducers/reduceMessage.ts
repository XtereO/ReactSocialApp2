
let do_Message:"message/doMessage"="message/doMessage";
let change_Dialog:"message/changeDialog"="message/changeDialog";

export type MessageType ={
  name:string,
  message:string,
  id:string
}
export type PeopleType={
  name:string,
  id:string
}
let initialState={
    Property:{
        text:"..." as string,
        peopleData:[
        {name:"Alex",id:"1"},
        {name:"Ivan",id:"2"},
        {name:"Max",id:"3"}],
        messageData:[
            {name:"Alex",message:"Hi, how are you?",id:"1",img:""},
            {name:"Hola",message:"Hello, Im okay and you?",id:"1"},
            {name:"Alex",message:"Im fine, are you free this saturday?",id:"1"},
            {name:"Hola",message:"Hello,whats up?",id:"2"},
            {name:"Ivan",message:"Hi,Im okay and you?",id:"2"},
            {name:"Max",message:"hello",id:"3"}] as Array<MessageType>,
        curDialog:1 as number
    }
}
type InitialStateType=typeof initialState
type ActionType=DoMessageType | ChangeDialogType

let reduceMessage=(state=initialState,action:ActionType):InitialStateType=>{
    let curState={...state}
    curState.Property={...state.Property}

    if(action.type===do_Message){
        curState.Property.messageData=[...state.Property.messageData]
        curState.Property.messageData.push({
            name:"Hola",
            message:action.text,
            id:action.p
        });
        curState.Property.text=" ";
        return curState;
    }
    if(action.type===change_Dialog){
        curState.Property.curDialog=state.Property.curDialog
        curState.Property.curDialog=action.curDialog
        return curState
    }
    return state;
}

export type DoMessageType={
  type:typeof do_Message,
  p:string,
  text:string
}
export let doMessage=(p:string,text:string):DoMessageType=>{
    return{
        type:do_Message,p,
        text
    }
}

export type ChangeDialogType={
  type:typeof change_Dialog,
  curDialog:number
}
export let changeDialog=(curDialog:number):ChangeDialogType=>({
    type:change_Dialog,
    curDialog
})

export default reduceMessage
