import reduceAddFriend, { changePage } from "./reduceAddFriend"

let initialState = {
    Property: {
        Suggested: [
        ],
        curPage: 1,
        _totalCount: 0,
        _countAcOnPage: 1000,
        countPage: 0,
        isFetching: false,
        followingInProgress: [],
        isProgress: false
    }
}

it('is changed', () => {
    let state = initialState
    let action = changePage(2)

    let newState = reduceAddFriend(state, action)

    expect(newState.Property.curPage).toBe(2);
});