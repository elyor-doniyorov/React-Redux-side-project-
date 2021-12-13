import './App.css';
import { connect } from 'react-redux';
import { getPosts as getPostsAction } from './redux/modules/posts';

function App({posts, getPosts}) {
  return (
    <div className="App">
      hello
    </div>
  );
}

export default connect(
  ({ posts }) => ({ posts }),
  {getPosts: getPostsAction},
)(App);
