import React from 'react';
import { Layout } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
const { Header } = Layout;

interface prop {
  collapsed: boolean;
  toggle: () => void;
}

const _Header: React.FC<prop> = props => {
  const { collapsed, toggle } = props;
  return (
    <Header className="site-layout-background" style={{ padding: '0 16px' }}>
      {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: 'trigger',
        onClick: toggle,
      })}
    </Header>
  );
};

export default _Header;
