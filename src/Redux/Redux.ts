import {createStore, combineReducers,applyMiddleware,compose } from "redux";
import reduceMain from "./Reducers/reduceMain";
import reduceMessage from "./Reducers/reduceMessage";
import reduceFriends from "./Reducers/reduceFriends";
import reduceGroups from "./Reducers/reduceGroups";
import reduceAudio from "./Reducers/reduceAudio";
import reduceVideo from "./Reducers/reduceVideo";
import reducePhoto from "./Reducers/reducePhoto";
import reduceAddFriend from "./Reducers/reduceAddFriend";
import reduceMenu from "./Reducers/reduceMenu";
import reduceEdit from "./Reducers/reduceEdit";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import reduceApp from "./Reducers/reduceApp";

//combineReducers- function which do object for state
let rootReducer=combineReducers({
    mainPage:reduceMain,
    messagePage:reduceMessage,
    friendsPage:reduceFriends,
    groupsPage:reduceGroups,
    audioPage:reduceAudio,
    videoPage:reduceVideo,
    photoPage:reducePhoto,
    addFriendPage:reduceAddFriend,
    menu:reduceMenu,
    form:formReducer,
    app:reduceApp,
    editPage:reduceEdit
})

type RootReducerType=typeof rootReducer;
export type AppStateType=ReturnType<RootReducerType>
// @ts-ignore
const composeEnhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store=createStore(rootReducer,composeEnhancers(applyMiddleware(thunkMiddleware)))
// @ts-ignore
window.store=store

export default store
