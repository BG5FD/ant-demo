import React from 'react';
import { connect } from 'dva';

class BaselineList extends React.Component {
  constructor() {
    super();
    this.state = {
      name: 'ssxxx',
    }
  }
  handleClick = () => {
    this.setState({
      name: 'bbb',
    })
  }
  render() {
    return (
      <div onClick={this.handleClick}>
        test
        <div>{this.state.name}</div>
      </div>
    )
  }
}
export default BaselineList;
