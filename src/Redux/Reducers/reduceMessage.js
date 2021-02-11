
let do_Message="message/doMessage";
let change_Text="message/changeText";
let change_Dialog="message/changeDialog";

let initialState={
    Property:{
        text:"...",
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
            {name:"Max",message:"hello",id:"3"}],
        curDialog:1
    }
}

let reduceMessage=(state=initialState,action)=>{
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

export let doMessage=(p,text)=>{
    return{
        type:do_Message,
        p,
        text
    }
}
export let changeDialog=(curDialog)=>({
    type:change_Dialog,
    curDialog
})

export default reduceMessage