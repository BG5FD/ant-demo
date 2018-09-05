import React from 'react';
import PropTypes from 'prop-types';
import ECharts from '../index';
import 'echarts/lib/chart/line';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';

/**
 * 首页欢迎页，展示一些平台数据，该页默认不可修改
 */
class LineChart extends React.Component {
  constructor(props) {
    super(props);
    const { data } = this.props;
    this.state = {
      option: {
        title: {
          text: '平台任务下发折线图',
          left: 'middle',
          top: 'bottom',
        },
        tooltip: {
          trigger: 'axis',
        },
        dataset: {
          source: data,
        },
        grid: {
          containLabel: true,
        },
        legend: {},
        xAxis: {
          type: 'category',
          boundaryGap: false,
          name: '月份',
          nameLocation: 'end',
        },
        yAxis: {
          type: 'value',
          name: '数量/个',
          nameLocation: 'end',
        },
        color: ['#ff000d', '#ffaa00', '#ffff00', '#00ff37', '#0084ff', '#00ffff', '#ff00ff'],
        series: [
          {
            type: 'line',
          },
          {
            type: 'line',
          },
          {
            type: 'line',
          },
          {
            type: 'line',
          },
          {
            type: 'line',
          },
          {
            type: 'line',
          },
          {
            type: 'line',
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

LineChart.propTypes = {
  data: PropTypes.object.isRequired,
};

export default LineChart;
