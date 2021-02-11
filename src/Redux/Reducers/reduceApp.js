import { setAuthThunk } from "./reduceMenu";
let set_Init="App/set_Init"

let initialState={
    init:false
}

let reduceApp=(state=initialState,action)=>{
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

let setInit=()=>{
    return{
        type:set_Init
    }
}

export let setInitThunk=()=>{
    return(dispatch)=>{
        let promise=dispatch(setAuthThunk(true));
        promise.then(()=>{
            dispatch(setInit())
        })
    }
}

export default reduceApp