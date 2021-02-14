import Group from "./Group";
import React from "react";

type PropsType={
  groupsData:any // its Array with jsx
}

let Groups:React.FC<PropsType>=(props)=>{
    return<div className="mt-2">
        {props.groupsData}
    </div>
}

export default Groups
