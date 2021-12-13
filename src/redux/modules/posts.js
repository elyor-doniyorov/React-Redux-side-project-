const moduleName = 'posts';

const GET_POSTS = `${moduleName}/GET_POSTS`;

const defaultState = {
  posts: [],
};

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case GET_POSTS:
      return {...state, posts: payload}
      default:
        return state;
  }
};

export const getPosts = () => async (dispatch) => {
  dispatch({ type: GET_POSTS, payload: [{ id: 1, title: 'asd' }] });
}
