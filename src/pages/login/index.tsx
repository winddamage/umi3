import React from 'react';
import { useModel, history } from 'umi';
import { Form, Input, Button, message } from 'antd';
import { login, fetchUserInfo } from '@/services/user';
import { setStorage } from '@/utils/storage';
import styles from './login.less';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

export default function Login() {
  const { initialState, setInitialState } = useModel('@@initialState');

  const handleFetchUserInfo = async () => {
    const { code, data } = await fetchUserInfo();
    if (code !== 200) return { ...initialState };
    return {
      ...initialState,
      ...data,
    };
  };

  const handleLogin = async value => {
    const { code, msg, data } = await login(value);
    if (code !== 200) {
      message.error(msg);
      return;
    }
    message.success(msg);
    const { token } = data;
    setStorage('token', token);
    handleFetchUserInfo();
    history.push('/');
  };

  return (
    <div className={styles['outer-box']}>
      <div className={styles['inner-box']}>
        <Form
          {...layout}
          name="basic"
          initialValues={{ username: 'admin', password: '123456' }}
          onFinish={handleLogin}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input placeholder="admin or user" autoComplete="username" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password
              placeholder="123456"
              autoComplete="current-password"
            />
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
