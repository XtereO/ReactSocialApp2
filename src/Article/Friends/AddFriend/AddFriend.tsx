import React from "react";
import Pagination from "../../../Bricks/Pagination"

type PropsType={
  usersData:any // is array with jsx
  curPage:number
  requestFriends:()=>void
  changePage:(curPage:number)=>void
  countPage:number | null
}
let AddFriend:React.FC<PropsType>=({usersData,requestFriends, ...props})=>{
    return<div>
        <div className="right"><Pagination {...props} portionSize={3}  /></div>
        <br />
        {usersData}
        <button onClick={requestFriends} className="btn btn-success w-100">
            ShowMore
        </button>
    </div>
}

export default AddFriend
