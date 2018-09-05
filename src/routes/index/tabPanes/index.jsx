import React from 'react';
import { connect } from 'dva';
import { Tabs, Button } from 'antd';
import TabTitle from './tabTitle';

const TabPane = Tabs.TabPane;

class TabPanes extends React.Component{
  constructor(props){
    super(props);
  }

  onChange = (activeKey) => {
    this.props.dispatch({
      type: 'tabPanesModel/onChange',
      activeKey,
    })
  }

  onEdit = (targetKey, action) => {
    this.props.dispatch({
      type: `tabPanesModel/${action}`,
      targetKey,
    });
  }

  reload = (e) => {
    console.log(e);
  }

  close = (targetKey) => {
    //console.log(key);
    this.props.dispatch({
      type: 'tabPanesModel/remove',
      targetKey,
    });
  }

  closeLeft = (targetKey) => {
    this.props.dispatch({
      type: 'tabPanesModel/closeLeft',
      targetKey,
    });
  }

  closeRight = (targetKey) => {
    this.props.dispatch({
      type: 'tabPanesModel/closeRight',
      targetKey,
    });
  }

  closeOthers = (targetKey) => {
    this.props.dispatch({
      type: 'tabPanesModel/closeOthers',
      targetKey,
    });
  }

  render(){
    const { panes, activeKey } = this.props.tabPanesModel;

    return (
      <Tabs
        hideAdd
        onChange={this.onChange}
        activeKey={activeKey}
        type="editable-card"
        style={{ marginTop: 15, height: '100%'}}
        onEdit={this.onEdit}
      >
        {
          panes.map(pane =>
            <TabPane tab={
              <TabTitle
                title={pane.title}
                reload={this.reload.bind(this, pane.key)}
                close={this.close.bind(this, pane.key)}
                closeLeft={this.closeLeft.bind(this, pane.key)}
                closeRight={this.closeRight.bind(this, pane.key)}
                closeOthers={this.closeOthers.bind(this, pane.key)}/>}
              style={{ background: 'white', height: '100%'}}
              key={pane.key}>{pane.content}</TabPane>)
        }
      </Tabs>
    );
  }
}

export default connect(({tabPanesModel}) => ({
  tabPanesModel,
}))(TabPanes);
