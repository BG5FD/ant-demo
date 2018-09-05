import React from 'react';
import { connect } from 'dva';

class BaselineTaskDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div />
    );
  }
}

export default connect()(BaselineTaskDetail);
