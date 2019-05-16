import jsonPlaceHolder from "../api/jsonPlaceHolder";

//This return a function, this function has dispatch as 1 arguments
export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceHolder.get("/posts");
    //dispatch an action
    dispatch({ type: "FETCH_POSTS", payload: response.data });
};
