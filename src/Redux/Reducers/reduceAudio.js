import { act } from "react-dom/test-utils"

let ADD_AUDIO="audio/ADDAUDIO"
let DELETE_AUDIO="audio/DELETEAUDIO"

let initialState={
    Property:{
        audioData:[
            {name:"Radioactive",compositor:"Imagine Dragons",
                asrc:"",id:1,
                img:"https://yt3.ggpht.com/a/AATXAJzMRQnWcgWN7NOXryCmUsaxpQRIlMQjocRVhWtd=s900-c-k-c0xffffffff-no-rj-mo"
            },
            
            {name:"Thunder",compositor:"Imagine Dragons",
                asrc:"",id:2,
                img:"https://i.pinimg.com/736x/ab/d4/ff/abd4ff99935065528d1421168b29f572.jpg"
            },
            
            {name:"Believer",compositor:"Imagine Dragons",
                asrc:"",id:3,
                img:"https://www.pakocampo.com/wp-content/uploads/pakocampo/2018/12/blog_2018_12_23_a_imagine_dragons_believer_pako_campo.jpg"
            }
        ],
        lastId:3
    }
}

let reduceAudio=(state=initialState,action)=>{
    let newState={...state}
    newState.Property={...state.Property}
    switch(action.type){
        case ADD_AUDIO:
            newState.Property.lastId++;
            newState.Property.audioData=[...state.Property.audioData];
            newState.Property.audioData.push({name:action.name,compositor:action.compositor,
                asrc:action.asrc,img:action.img,id:state.Property.lastId})
            return newState
        case DELETE_AUDIO:
            newState.Property.audioData=[...state.Property.audioData];
            newState.Property.audioData=newState.Property.audioData.filter(a=>a.id!=action.id)
            return newState
        default:
            return state        
    }
}

export let addAudio=(name,compositor,asrc,img)=>{
    return{
        type:ADD_AUDIO,
        name,compositor,
        asrc,img
    }
}
export let deleteAudio=(id)=>{
    return{
        type:DELETE_AUDIO,
        id
    }
}

export default reduceAudio