import {VideoType} from "../../Types/types";

let ADD_VIDEO:"video/ADDVIDEO"="video/ADDVIDEO"
let REMOVE_VIDEO:"video/REMOVEVIDEO"="video/REMOVEVIDEO"

let initialState={
    Property:{
        videoData:[
            {name:"React-Way-of-Samurai",compositor:"IT-Kamasutra",
                vsrc:"",id:1
            }
        ] as Array<VideoType>,
        lastId:1 as number
    }
}

export type InitialStateType = typeof initialState

let reduceVideo=(state=initialState,action:ActionType):InitialStateType =>{
    switch(action.type){
        case ADD_VIDEO:
            return {...state,Property:
                {videoData:[...state.Property.videoData,{
                    name:action.name,compositor:action.compositor,
                    vsrc:action.vsrc,id:state.Property.lastId+1
                }],lastId:state.Property.lastId++}}
        case REMOVE_VIDEO:
            return{...state,Property:{
                videoData:
                state.Property.videoData.filter(e=>e.id != action.id)
                ,lastId:state.Property.lastId},
            }
        default:
            return state
    }
}

type ActionType=AddVideoType | RemoveVideoType

export type AddVideoType = {
    type:typeof ADD_VIDEO
    name:string | null,
    compositor:string | null,
    vsrc:string | null
}
export let AddVideo=(name:string | null,compositor:string | null,vsrc:string | null):AddVideoType=>{
    return{
        type:ADD_VIDEO,
        name,compositor,
        vsrc
    }
}

export type RemoveVideoType={
    type:typeof REMOVE_VIDEO,
    id:number
}
export let RemoveVideo=(id:number):RemoveVideoType=>{
    return{
        type:REMOVE_VIDEO,
        id
    }
}

export default reduceVideo
