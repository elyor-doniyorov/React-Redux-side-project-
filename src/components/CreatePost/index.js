import { Form, Input, Button } from 'antd';
import { connect } from 'react-redux';
import { createPost as createPostAction } from '../../redux/modules/posts'

const CreatePost = ({ createPost }) => {

  const onSubmit = (values) => {
    createPost(values)
  }

  return (
    <Form name="control-hooks" onFinish={onSubmit}>
      <Form.Item name="title" label="title">
        <Input />
      </Form.Item>
      <Form.Item name="body" label="body">
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

export default connect(
  null,
  {
    createPost: createPostAction,
  }
)(CreatePost);
