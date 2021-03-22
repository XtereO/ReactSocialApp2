import React from "react";
import Pagination from "../../../Bricks/Pagination"
import SearchBar from "./SearchBar"

type PropsType={
  usersData:any // is array with jsx
  curPage:number
  requestFriends:(term:string)=>void
  changePage:(curPage:number)=>void
  countPage:number | null
}
let AddFriend:React.FC<PropsType>=({usersData, ...props})=>{
    let requestFriends=():void=>{
        props.requestFriends("")
    }
    return<div>
        <div>
        <SearchBar requestFriends={props.requestFriends} />
        </div>
        <div className="right"><Pagination {...props} portionSize={5}  /></div>
        <br />
        {usersData}
        <button onClick={requestFriends} className="btn btn-success w-100">
            ShowMore
        </button>
    </div>
}

export default AddFriend
