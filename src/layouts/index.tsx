import React, { useState } from 'react';
import { Layout } from 'antd';
import styles from './index.less';
import Sider from './Sider';
import Header from './Header';

const { Content } = Layout;

export default function Layouts(props: any) {
  const [collapsed, setCollapse] = useState(false);

  const toggle = () => {
    setCollapse(!collapsed);
  };

  return (
    <Layout className={styles.layouts}>
      <Sider collapsed={collapsed} />
      <Layout className="site-layout">
        <Header collapsed={collapsed} toggle={toggle} />
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          {props.children}
        </Content>
      </Layout>
    </Layout>
  );
}
