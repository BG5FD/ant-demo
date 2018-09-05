import React from 'react';
import { connect } from 'dva';

import { Layout, Menu, Breadcrumb, Icon, Col, Row } from 'antd';
import zhCn from 'antd/lib/locale-provider/zh_CN'

import TopMenu from './topMenu';
import LeftMenu from './leftMenu';
import TabPanes from './tabPanes';
import Avatar from './avatar';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const IndexPage = () => (
  <Layout style={{ height: '100%' }} locale={zhCn}>
    <Header className="header">
      <Row type="flex" justify="space-between" align="middle">
        <Col>
          <TopMenu />
        </Col>
        <Col>
          <Avatar/>
        </Col>
      </Row>
    </Header>
    <Layout  style={{ height: '100%' }}>
      <LeftMenu/>
      <Layout style={{ padding: '0 24px', width: window.innerWidth - 230, height: "100%" }}>
        <TabPanes/>
      </Layout>
    </Layout>
  </Layout>
);

  export default connect()(IndexPage)
