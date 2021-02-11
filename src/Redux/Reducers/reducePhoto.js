
let ADD_PHOTO="reducePhoto/ADD_PHOTO"
let REMOVE_PHOTO="reducePhoto/REMOVE_PHOTO"

let initialState={
    Property:{
        photoData:[
            {name:"JS",img:"https://avatars.mds.yandex.net/get-zen_doc/1936915/pub_5eebcea9702c4a7f9ab8c531_5eebda384e8d5c252c06efa7/scale_1200",id:1},
            {name:"React",img:"https://pbs.twimg.com/media/DZc1BqPWkAID4hr.jpg:large",id:2},
        ],
        lastId:2
    }
}

let reducePhoto=(state=initialState,action)=>{
    switch(action.type){
        case ADD_PHOTO:
            return{...state,Property:{
                photoData:[...state.Property.photoData,{
                    img:action.img,
                    name:action.name,
                    id:state.Property.lastId++
                    }],
                lastId:state.Property.lastId++
                }
            }
        case REMOVE_PHOTO:
            return{...state,Property:{
                photoData:
                state.Property.photoData.filter(e=>e.id != action.id)
                }
            }
        default:
            return state
    }
}

export let AddPhoto=(name,img)=>{
    return{
        type:ADD_PHOTO,
        name,img
    }
}
export let RemovePhoto=(id)=>{
    return{
        type:REMOVE_PHOTO,id
    }
}
export default reducePhoto