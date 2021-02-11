
export let getUsersData=(state)=>{
    return state.addFriendPage.Property.Suggested
}

export let getCurPage=(state)=>{
    return state.addFriendPage.Property.curPage
}

export let getCountPage=(state)=>{
    return state.addFriendPage.Property.countPage
}

export let getIsFetching=(state)=>{
    return state.addFriendPage.Property.isFetching
}

export let getFollowingInProgress=(state)=>{
    return state.addFriendPage.Property.followingInProgress
}