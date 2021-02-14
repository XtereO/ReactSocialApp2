import { setAuthThunk } from "./reduceMenu";
let set_Init:"App/set_Init"="App/set_Init"

let initialState={
    init:false as boolean
}

type InititalStateType=typeof initialState
type AccountType=SetInitType

let reduceApp=(state=initialState,action:AccountType):InititalStateType=>{
    switch(action.type){
        case set_Init:
            return{
                ...state,
                init:true
            }
        default:
            return state
    }
}

export type SetInitType={
  type:typeof set_Init
}
let setInit=():SetInitType=>{
    return{
        type:set_Init
    }
}

export let setInitThunk=()=>{
    return(dispatch:any)=>{
        let promise=dispatch(setAuthThunk(true));
        promise.then(()=>{
            dispatch(setInit())
        })
    }
}

export default reduceApp
