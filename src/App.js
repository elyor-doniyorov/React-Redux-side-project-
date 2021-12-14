import { useEffect } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getPosts as getPostsAction } from './redux/modules/posts';
import Post from './components/Post';

function App({ posts, getPosts }) {

  useEffect(() => {
    getPosts();
  }, []);

  console.log(posts)

  return (
    <div className="App">
      {posts.length && posts.map(item => <Post key={item.id} title={item.title} body={item.body} />)}
    </div>
  );
}

export default connect(
  ({ posts }) => ({ posts: posts.posts }),
  {
    getPosts: getPostsAction
  }
)(App);
