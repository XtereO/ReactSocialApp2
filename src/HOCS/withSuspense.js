import { Suspense } from "react"

let withSuspense=(Component)=>{
    return<Suspense src={"https://i.pinimg.com/originals/3b/4e/10/3b4e109d6b621ed5a9249769afbd4dfa.gif"}
    fallback={<img  className="img img-rounded w-100" />}>
        <Component/>
    </Suspense>

}

export default withSuspense