
let ADD_PHOTO:"reducePhoto/ADD_PHOTO"="reducePhoto/ADD_PHOTO"
let REMOVE_PHOTO:"reducePhoto/REMOVE_PHOTO"="reducePhoto/REMOVE_PHOTO"


export type PhotoType={
  name:string | null,
  img:string | null,
  id:number
}
let initialState={
    Property:{
        photoData:[
            {name:"JS",img:"https://avatars.mds.yandex.net/get-zen_doc/1936915/pub_5eebcea9702c4a7f9ab8c531_5eebda384e8d5c252c06efa7/scale_1200",id:1},
            {name:"React",img:"https://pbs.twimg.com/media/DZc1BqPWkAID4hr.jpg:large",id:2},
        ] as Array<PhotoType>,
        lastId:2 as number
    }
}

export type InitialStateType=typeof initialState

let reducePhoto=(state=initialState,action:ActionType):InitialStateType=>{
    switch(action.type){
        case ADD_PHOTO:
            return{...state,Property:{
                photoData:[...state.Property.photoData,{
                    img:action.img,
                    name:action.name,
                    id:state.Property.lastId+1
                    }],
                lastId:state.Property.lastId++
                }
            }
        case REMOVE_PHOTO:
            return{...state,Property:{
                photoData:
                state.Property.photoData.filter(e=>e.id != action.id),
                lastId:state.Property.lastId
              }
            }
        default:
            return state
    }
}

type ActionType = AddPhotoType | RemovePhotoType

export type AddPhotoType ={
  type:typeof ADD_PHOTO,
  name:string | null,
  img:string | null
}
export let AddPhoto=(name:string | null,img:string | null):AddPhotoType=>{
    return{
        type:ADD_PHOTO,
        name,img
    }
}

export type RemovePhotoType={
  type:typeof REMOVE_PHOTO,
  id:number
}
export let RemovePhoto=(id:number):RemovePhotoType=>{
    return{
        type:REMOVE_PHOTO,id
    }
}
export default reducePhoto
