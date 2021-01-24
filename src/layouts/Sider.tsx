import React from 'react';
import { Layout, Menu } from 'antd';
import { MailOutlined } from '@ant-design/icons';
const { Sider } = Layout;

interface prop {
  collapsed: boolean;
}

const _Sider: React.FC<prop> = props => {
  const { collapsed } = props;
  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="title">标题~~~</div>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        <Menu.Item key={1} icon={<MailOutlined />}>
          欢迎页
        </Menu.Item>
        <Menu.SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
          <Menu.Item key="5">Option 5</Menu.Item>
        </Menu.SubMenu>
      </Menu>
    </Sider>
  );
};

export default _Sider;
