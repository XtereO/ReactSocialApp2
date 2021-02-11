import Friend from "../../Article/Friends/Friend";

export let getFriends=(state)=>{
    let friendsData=state.friendsPage.Property.friendsData
    let friends=friendsData.map((f)=>{
        return <Friend name={f.name} discription={f.discription}
        img={f.img} />
    })
    return friends
}