import jsonPlaceholder from "../api/jsonPlaceholder";

export const fetchPosts = () => async (dispatch) => {
  dispatch({
    type: "FETCH_POSTS",
    payload: await jsonPlaceholder.get("/posts"),
  });
};
