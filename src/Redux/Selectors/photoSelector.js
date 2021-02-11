import ContainerPhotoTemplate from "../../Article/Photo/ContainerPhotoTemplate";
export let getPhoto=(state)=>{
    let photoData=state.photoPage.Property.photoData.map((p)=>{
        return<ContainerPhotoTemplate name={p.name} img={p.img}
        id={p.id}/>
    })
    return photoData
}