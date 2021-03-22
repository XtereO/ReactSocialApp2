import { useEffect,useState } from "react";

let Pagination=({portionSize,...props})=>{
    //Create all pages
    let Pages=[]
    for(let i=1;i<=props.countPage;i++){
        let e=null
        if(props.curPage==i){
            e=<button id={i} className="btn btn-light"
            onClick={props.changePage}>
                {i}
            </button>
        }else{
            e=<button id={i} className="btn btn-primary"
            onClick={props.changePage}>
                {i}
            </button>
        }
        Pages.push(e)
    }

    //To understand where curPage
    let i=1
    while(props.curPage >portionSize*i){
        i++
    }

    //for next and prev
    let [portionNumber,setPortionNumber]=useState(i)
    let [curPages,setCurPages]=useState([...Pages].slice(portionSize*(i-1),portionSize*i))
    let onNext=()=>{
        let newPortionNumber=portionNumber+1
        setPortionNumber(newPortionNumber)
        let newPages=[...Pages].slice((newPortionNumber-1)*portionSize,(newPortionNumber-1)*portionSize+portionSize)
        setCurPages(newPages)
    }
    let onPrev=()=>{
        let newPortionNumber=portionNumber-1
        setPortionNumber(newPortionNumber)
        let newPages=[...Pages].slice((newPortionNumber-1)*portionSize,(newPortionNumber-1)*portionSize+portionSize)
        setCurPages(newPages)
    }

    //render
    return<div>
        {portionNumber>1 &&
        <button onClick={onPrev} className="btn btn-success">
            Prev
        </button>}
        {curPages}
        {(portionNumber)*portionSize<props.countPage &&
        <button onClick={onNext} className="btn btn-success">
            Next
        </button>}
    </div>
}
export default Pagination
