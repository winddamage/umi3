import React, { useState, useEffect } from 'react';
import { history } from 'umi';
import { Layout, Menu } from 'antd';
import { getStorage } from '@/utils/storage';
import Icon from '@/icon';
const { Sider } = Layout;

interface prop {
  collapsed: boolean;
}

const serverRoutes = getStorage('serverRoutes');

const _Sider: React.FC<prop> = props => {
  const { collapsed } = props;

  const [selectedKey, setSelectedKey] = useState('');

  useEffect(() => {
    setSelectedKey(history.location.pathname);
  }, []);

  const handleClick = ({ key }) => {
    setSelectedKey(key);
    history.push(key);
  };

  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="title">标题~~~</div>
      <Menu
        theme="dark"
        mode="inline"
        selectedKeys={[selectedKey]}
        onClick={handleClick}
      >
        {serverRoutes[0].children.map(route => {
          if (route.redirect) return null;
          if (route.children) {
            return (
              <Menu.SubMenu
                key={route.path}
                icon={<Icon type={route.menu.icon} />}
                title={route.menu.name}
              >
                {route.children.map(item => {
                  return (
                    <Menu.Item key={item.path}>{item.menu.name}</Menu.Item>
                  );
                })}
              </Menu.SubMenu>
            );
          }
          return (
            <Menu.Item key={route.path} icon={<Icon type={route.menu.icon} />}>
              {route.menu.name}
            </Menu.Item>
          );
        })}
      </Menu>
    </Sider>
  );
};

export default _Sider;
