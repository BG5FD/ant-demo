import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'dva';
import { Dropdown, Menu } from 'antd';

const contextMenuData = [
  {
    key: 'reload',
    content: '重新加载',
  },
  {
    key: 'close',
    content: '关闭标签页',
  },
  {
    key: 'closeLeft',
    content: '关闭左侧标签页',
  },
  {
    key: 'closeRight',
    content: '关闭右侧标签页',
  },
  {
    key: 'closeOthers',
    content: '关闭其他标签页',
  },
];

const styles = {
  menuItemHover: {
    backgroundColor: 'coral',
  },
};

class TabTitle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemKey: null,
    };

    this.handleMouseOut = this.handleMouseOut.bind(this);
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMenuItemClick = this.handleMenuItemClick.bind(this);
  }

  handleMouseOver = (itemKey) => {
    this.setState({
      itemKey,
    });
  }

  handleMouseOut = () => {
    this.setState({
      itemKey: null,
    });
  }

  handleMenuItemClick = (e) => {
    if (e.key === 'reload') {
      const { reload } = this.props;
      reload();
    } else if (e.key === 'close') {
      const { close } = this.props;
      close();
    } else if (e.key === 'closeLeft') {
      const { closeLeft } = this.props;
      closeLeft();
    } else if (e.key === 'closeRight') {
      const { closeRight } = this.props;
      closeRight();
    } else if (e.key === 'closeOthers') {
      const { closeOthers } = this.props;
      closeOthers();
    }
    e.domEvent.stopPropagation();
  }


  render() {
    const menu = (
      <Menu theme="dark" style={{ borderRadius: 0 }} onClick={this.handleMenuItemClick}>
        {
          contextMenuData.map((each) => {
            return (
              <Menu.Item
                key={each.key}
                style={each.key == this.state.itemKey ? styles.menuItemHover : {}}
                onMouseEnter={this.handleMouseOver.bind(this, each.key)}
                onMouseOut={this.handleMouseOut}>{each.content}
              </Menu.Item>
            );
          })
        }
      </Menu>
    );
    const { title } = this.props;
    return (
      <Dropdown overlay={menu} trigger={['contextMenu']}>
        <span style={{ display: 'inline-block', height: '100%' }}>{title}</span>
      </Dropdown>
    );
  }
}

export default connect()(TabTitle);

TabTitle.propTypes = {
  title: PropTypes.string.isRequired,
  reload: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired,
  closeLeft: PropTypes.func.isRequired,
  closeRight: PropTypes.func.isRequired,
  closeOthers: PropTypes.func.isRequired,
};
