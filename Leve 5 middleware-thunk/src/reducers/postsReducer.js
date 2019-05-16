//maintain an array of fetched post

//return original state if action.type does not match
export default (state = [], action) => {
    if (action.type === "FETCH_POSTS") {
        return action.payload;
    }
    return state;
};
