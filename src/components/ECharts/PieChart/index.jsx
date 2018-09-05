import React from 'react';
import PropTypes from 'prop-types';
import ECharts from '../index';
import 'echarts/lib/chart/pie';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';

/**
 * 首页欢迎页，展示一些平台数据，该页默认不可修改
 */
class pieChart extends React.Component {
  constructor(props) {
    super(props);
    const { data, title } = this.props;
    this.state = {
      option: {
        title: {
          text: title,
          left: 'center',
          top: 'bottom',
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)',
        },
        color: ['#ff000d', '#ffaa00', '#ffff00', '#00ff37', '#0084ff', '#00ffff', '#ff00ff'],
        series: [
          {
            type: 'pie',
            radius: '55%',
            center: ['50%', '50%'],
            data,
          },
        ],
      },
    };
  }

  render() {
    const { option } = this.state;
    return (
      <ECharts option={option} style={{ height: 400, width: '100%' }} />
    );
  }
}

pieChart.propTypes = {
  data: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
};

export default pieChart;
