"use strict";
exports.__esModule = true;
var Get_Friends = "reduceFriends/getFriends";
var initialState = {
    Property: {
        friendsData: []
    }
};
var reduceFriends = function (state, action) {
    if (state === void 0) { state = initialState; }
    return state;
};
var getFriends = function (users) {
    return {
        type: Get_Friends,
        users: users
    };
};
exports["default"] = reduceFriends;
