import React from 'react';
import { connect } from 'dva';
import { Menu, Icon, Button, Layout } from 'antd';
import allMenus from './enums';
const SubMenu = Menu.SubMenu;
const Sider = Layout.Sider;
// const MenuItemGroup = Menu.ItemGroup;
//一个用于记录一级菜单key的list
class LeftMenu extends React.Component {
// const LeftMenu = ({ dispatch }) => {
  constructor(props) {
    // console.log(dispatch)
    super(props);
    this.state = {
      collapsed: false,
    }
  }


  componentWillMount() {
    this.props.dispatch({
      type: 'tabPanesModel/getData',
      values: {
        allMenus: allMenus,
      },
    });
  }

  // this.state = {
  //   collapsed: false,
  // }
  handleClick = (e) => {
    // console.log(e);
    const { key, keyPath, item } = e;
    const tabTitle = item.props.children;
    const con = this.props.tabPanesModel.menus[0].subs[0].target;
    this.props.dispatch({
      type: 'tabPanesModel/addPane',
      tabInfo: {
        title: tabTitle,
        content: con,
        key: key,
      }
    });
  }

  subMenuClick = (e) => {
    this.props.dispatch({
      type: 'tabPanesModel/subMenuClick',
      values: {
        key: e.key,
      }
    });
  }

  //确保dispatch重新渲染，而在toggleCollapsed时重新渲染
  /*shouldComponentUpdate(nextProps, nextState){
    if (this.state.collapsed !== nextState.collapsed){
      return true;
    }
    return false;
  }*/
  //由于重写了
  toggleCollapsed = () => {
    this.props.dispatch({
      type: 'tabPanesModel/toggleCollapsed',
      values: {
        key: this.state.collapsed,
      }
    });
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    //console.log(this.props.tabPanesModel.allMenus);
    //console.log(this.props.tabPanesModel.openKeys);
    const activeKey = this.props.tabPanesModel.activeKey;
    const MenuList = () => {
      return this.props.tabPanesModel.menus.map((menu) => {

        //const openKeys = [];
        const menuItems = () => {
          return menu.subs.map(sub => {
            return (
              <Menu.Item key={sub.key}>{sub.title}</Menu.Item>
            )
          });
        }
        return (
          <SubMenu
            key={menu.key}
            title={<span><Icon type="user" /><span>{menu.title}</span></span>}
            onTitleClick={this.subMenuClick}
            >
            {menuItems()}
          </SubMenu>
        )
      });

    }
    //将Menu组件放在return外面为了是defaultOpenKeys生效，另外由于要将左侧菜单、顶部菜单以及Pane相关联，对Menu、SubMenu组件的点击事件都进行了重写
    const MyMenu = (props) => {
      return (
        <Menu
          mode="inline"
          selectedKeys={[activeKey]}
          defaultOpenKeys={props.openKeys}
          style={{ borderRight: 0 }}
          onClick={this.handleClick}
          inlineIndent={34}
          >
          {MenuList()}
        </Menu>
      );
    };

    //菜单收缩使用的是Sidlingwai
    return (
      <Sider
        collapsed={this.state.collapsed}
        style={{background: '#fff', overflowX: 'hidden'}}
        width={230}
        >
        <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
          <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
        </Button>

        <MyMenu openKeys={this.props.tabPanesModel.openKeys}/>
      </Sider>
    );
  }
};

export default connect(({ tabPanesModel }) => ({
  tabPanesModel
}))(LeftMenu);
