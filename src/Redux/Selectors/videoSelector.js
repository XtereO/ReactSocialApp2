import ContainerVideoTemplate from "../../Article/Video/ContainerVideoTemplate";

export let getVideo=(state)=>{
    let videoData=state.videoPage.Property.videoData.map((v)=>{
        return <ContainerVideoTemplate vsrc={v.vsrc} name={v.name}
            compositor={v.compositor} id={v.id}/>
    })
    return videoData
}