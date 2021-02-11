import Group from "../../Article/Groups/Group";

export let getGroups=(state)=>{
    let groupsData=state.groupsPage.Property.groupsData.map((g)=>{
        return <Group name={g.name} discription={g.discription}
        img={g.img} followers={g.followers} way={g.way} />
    })
    return groupsData
} 