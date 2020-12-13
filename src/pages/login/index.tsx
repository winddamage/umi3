import React from 'react';
import { Form, Input, Button } from 'antd';
import { login } from '@/services/user';
import styles from './login.less';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

export default function Login() {
  const handleLogin = async value => {
    const res = await login(value);
  };

  return (
    <div className={styles['outer-box']}>
      <div className={styles['inner-box']}>
        <Form
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={handleLogin}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input placeholder="admin or user" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password placeholder="123456" />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
