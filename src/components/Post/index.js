import { Card } from 'antd';

const Post = ({ title, body }) => {
  return (
    <Card>
      <h1>{title}</h1>
      <p>{body}</p>
    </Card>
  )
};

export default Post;