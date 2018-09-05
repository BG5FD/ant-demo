import React from 'react';
import PropTypes from 'prop-types';
import echarts from 'echarts/lib/echarts';

class ECharts extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  componentDidMount() {
    const { option } = this.props;
    const myChart = echarts.init(this.myRef.current);
    myChart.setOption(option);
  }

  componentDidUpdate() {
    const { option } = this.props;
    const myChart = echarts.init(this.myRef.current);
    myChart.setOption(option);
  }

  render() {
    const { style } = this.props;
    return (
      <div ref={this.myRef} style={{ width: style.width, height: style.height }} />
    );
  }
}

ECharts.propTypes = {
  option: PropTypes.object.isRequired,
  style: PropTypes.object.isRequired,
};

export default ECharts;
