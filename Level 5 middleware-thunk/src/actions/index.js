import jsonPlaceHolder from "../api/jsonPlaceHolder";
import _ from "lodash";

export const fetchPostAndUser = () => async (dispatch, getState) => {
    //When return a function, redux thunk will auto run this function

    //await: do not move on the next line of code until finish this function
    await dispatch(fetchPosts());
    const userIds = _.uniq(_.map(getState().posts, "userId"));
    userIds.forEach(id => dispatch(fetchUser(id)));
};

//When return a function, redux thunk will auto run this function
//Middleware
//This return a function, this function has dispatch as 1 arguments
export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceHolder.get("/posts");
    //dispatch an action
    dispatch({ type: "FETCH_POSTS", payload: response.data });
};

export const fetchUser = id => async dispatch => {
    const response = await jsonPlaceHolder.get(`/users/${id}`);

    dispatch({ type: "FETCH_USER", payload: response.data });
};
