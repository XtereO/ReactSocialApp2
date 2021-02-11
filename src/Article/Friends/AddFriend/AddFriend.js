import React from "react";
import Pagination from "../../../Bricks/Pagination"

let AddFriend=({usersData,requestFriends, ...props})=>{
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