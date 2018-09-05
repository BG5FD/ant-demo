import React from 'react';
import ReactDom from 'react-dom';
import {connect} from 'dva';
import {Menu, Dropdown, Avatar, Icon, Tooltip, Modal, Row, Col} from 'antd';

const styles={
  menuItem: {
    color: '#1890ff',
  },
};

const title = (
  <Row type="flex" justify="space-around">
    <Col>中油瑞飞信息安全检查平台使用说明</Col>
  </Row>
);

class Profile extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      visible: false,
    };

    this.handleMenuClick = this.handleMenuClick.bind(this);
    this.helperClick = this.helperClick.bind(this);
  }

  handleMenuClick = (e) => {
    const { dispatch } = this.props;
    //console.log(e);
    //使用帮助为Modal，个人信息、修改密码为Pane，注销为业务逻辑
    if(e.key === "helper"){
      console.log(e.key);
      this.helperClick();
    }
    else if (e.key == "profile"){
      dispatch({
        type: 'tabPanesModel/addPane',
        tabInfo: {
          title: "个人信息",
          content: "个人信息",
          key: e.key
        }
      });
    }
    else if (e.key == "changePwd"){
      dispatch({
        type: 'tabPanesModel/addPane',
        tabInfo: {
          title: "修改密码",
          content: "修改密码",
          key: e.key
        }
      });
    }
    if (e.key === 'logout') {
      dispatch({
        type: 'user/logout',
      });
    }
  }

  helperClick = () => {
    Modal.info({
      title: title,
      content: (
        <div>
          <p>some messages...some messages...some messages...some messages...some messages...some messages...some messages...some messages...</p>
          <p>some messages...some messages...some messages...some messages...some messages...some messages...some messages...some messages...</p>
        </div>
      ),
      destroyOnClose: true,
      width: 1040,
      okText: '知道了',
      onOk() {},
    });
  }

  render(){
    const username = '高昊祯';
    const menu = (
      <Menu
        style={{ borderRight: 0}}
        onClick={this.handleMenuClick}
        >
        <Menu.Item key="profile">
          <Icon type="profile" style={styles.menuItem}/>
          <span>个人信息</span>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="changePwd">
          <Icon type="setting" style={styles.menuItem}/>
          <span>修改密码</span>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="helper">
          <Icon type="question-circle-o" style={styles.menuItem}/>
          <span>使用帮助</span>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="logout">
          <Icon type="logout" style={styles.menuItem}/>
          <span>用户注销</span>
        </Menu.Item>
      </Menu>
    );
    return (
      <span>
        <Dropdown
          overlay={menu}
          trigger={['click']}>
          <span style={{color: '#fff', cursor: 'pointer', fontSize: 20}}>
            <Tooltip title={username}>
              <Avatar icon="user" size="large" style={{background: '#1890ff', marginRight: '5px'}}/>
            </Tooltip>
            <span>{username}</span>
          </span>
        </Dropdown>

      </span>
    );
  }
}

export default connect(({tabPanesModel}) => ({tabPanesModel}))(Profile);
