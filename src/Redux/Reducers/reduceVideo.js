
let ADD_VIDEO="video/ADDVIDEO"
let REMOVE_VIDEO="video/REMOVEVIDEO"

let initialState={
    Property:{
        videoData:[
            {name:"React-Way-of-Samurai",compositor:"IT-Kamasutra",
                vsrc:"",id:1 
            }
        ],
        lastId:1
    }
}

let reduceVideo=(state=initialState,action)=>{
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
                }
            }
        default:
            return state
    }
}

export let AddVideo=(name,compositor,vsrc)=>{
    return{
        type:ADD_VIDEO,
        name,compositor,
        vsrc
    }
}
export let RemoveVideo=(id)=>{
    return{
        type:REMOVE_VIDEO,
        id
    }
}

export default reduceVideo