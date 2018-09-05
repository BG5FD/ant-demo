import React from 'react';
import { connect } from 'dva';

import { Menu, Icon, Button } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class TopMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
    }
    this.handleClick = this.handleClick.bind(this);
    this.toggleCollapsed = this.toggleCollapsed.bind(this);
  }

  handleClick = (e) => {
    this.props.dispatch({
      type: 'tabPanesModel/changeMenus',
      values: {
        key: e.key
      }
    });
  }

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {

    //将Menu组件放在return外面为了是defaultOpenKeys生效
    const MyMenu = () => {
      return (
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={[this.props.tabPanesModel.topMenuActiveKey]}
          onClick={this.handleClick}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1">导航一</Menu.Item>
          <Menu.Item key="2">导航二</Menu.Item>
          <Menu.Item key="3">导航三</Menu.Item>
        </Menu>
      )
    };
    return (
      <MyMenu />
    );
  }
};

export default connect(({tabPanesModel}) => ({tabPanesModel}))(TopMenu);
