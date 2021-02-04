import _ from "lodash";
import jsonPlaceholder from "../api/jsonPlaceholder";

export const fetchPosts = () => async (dispatch) => {
  const res = await jsonPlaceholder.get("/posts");
  dispatch({
    type: "FETCH_POSTS",
    payload: res.data,
  });
};

export const fetchUser = (id) => async (dispatch) => {
  const res = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({
    type: "FETCH_USER",
    payload: res.data,
  });
};

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());
  const userIds = Object.keys(
    getState().posts.reduce((acc, { userId }) => {
      return { ...acc, [userId]: userId };
    }, {})
  );
  userIds.forEach((id) => dispatch(fetchUser(id)));
};

export const fetchUserMemoized = (id) => (dispatch) => _fetchUser(id, dispatch);
const _fetchUser = _.memoize(async (id, dispatch) => {
  const res = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({
    type: "FETCH_USER",
    payload: res.data,
  });
});
