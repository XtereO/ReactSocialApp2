import { act } from "react-dom/test-utils"
import {AudioType} from "../../Types/types";

let ADD_AUDIO:"audio/ADDAUDIO"="audio/ADDAUDIO"
let DELETE_AUDIO:"audio/DELETEAUDIO"="audio/DELETEAUDIO"

let initialState={
    Property:{
        audioData:[
            {name:"Radioactive",compositor:"Imagine Dragons",
                asrc:"dfdf",id:1,
                img:"https://yt3.ggpht.com/a/AATXAJzMRQnWcgWN7NOXryCmUsaxpQRIlMQjocRVhWtd=s900-c-k-c0xffffffff-no-rj-mo"
            },

            {name:"Thunder",compositor:"Imagine Dragons",
                asrc:"dfdf",id:2,
                img:"https://i.pinimg.com/736x/ab/d4/ff/abd4ff99935065528d1421168b29f572.jpg"
            },

            {name:"Believer",compositor:"Imagine Dragons",
                asrc:"dfdf",id:3,
                img:"https://www.pakocampo.com/wp-content/uploads/pakocampo/2018/12/blog_2018_12_23_a_imagine_dragons_believer_pako_campo.jpg"
            }
        ] as Array<AudioType>,
        lastId:3 as number
    }
}

export type IntialStateType=typeof initialState
type ActionType = DeleteAudioType | AddAudioType  ;
let reduceAudio=(state=initialState,action:ActionType):IntialStateType=>{
    let newState={...state}
    newState.Property={...state.Property}
    switch(action.type){
        case ADD_AUDIO:
            newState.Property.lastId++;
            newState.Property.audioData=[...state.Property.audioData];
            newState.Property.audioData.push({name:action.name,compositor:action.compositor,
                asrc:action.asrc,img:action.img,id:state.Property.lastId+1})
            return newState
        case DELETE_AUDIO:
            newState.Property.audioData=[...state.Property.audioData];
            newState.Property.audioData=newState.Property.audioData.filter(a=>a.id!=action.id)
            return newState
        default:
            return state
    }
}


export type AddAudioType={
  type:typeof ADD_AUDIO,
  name:string,
  compositor:string,
  asrc:string,
  img:string
}
export let addAudio=(name:string,compositor:string,asrc:string,img:string):AddAudioType=>{
    return{
        type:ADD_AUDIO,
        name,compositor,
        asrc,img
    }
}

export type DeleteAudioType={
  type:typeof DELETE_AUDIO,
  id:number
}
export let deleteAudio=(id:number):DeleteAudioType=>{
    return{
        type:DELETE_AUDIO,
        id
    }
}

export default reduceAudio
