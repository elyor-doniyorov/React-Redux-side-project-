const moduleName = 'posts';

const GET_POSTS = `${moduleName}/GET_POSTS`;

const defaultState = {
  posts: [],
};

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case GET_POSTS:
      return { ...state, posts: payload }
    default:
      return state;
  }
};

export const getPosts = () => async (dispatch) => {
  try {
    await fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => dispatch({ type: GET_POSTS, payload: data }));
  }
  catch (error) {
    console.log(error)
  }
}
