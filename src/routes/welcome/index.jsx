import React from 'react';
import { connect } from 'dva';
import { Row, Col, Card, Icon } from 'antd';
import styles from './index.css';
import CountUp from 'react-countup';
import LineChart from 'app/components/ECharts/LineChart';
import PieChart from 'app/components/ECharts/PieChart';


const socket = require('socket.io-client')('http://localhost:3000');

const status = [
  {
    icon: 'smile-o',
    text: '良好',
  },
  {
    icon: 'meh-o',
    text: '一般',
  },
  {
    icon: 'frown-o',
    text: '繁忙',
  }
];

//const colors = ["#ff000d", "#ffaa00", "#ffff00", "#00ff37", "#0084ff", "#00ffff", "#ff00ff"];
const items = [
  {
    key: "baselineV",
    name: "基线检查",
    color: "#ff000d"
  },{
    key: "vulV",
    name: "漏洞扫描",
    color: "#ffaa00"
  },{
    key: "offlineV",
    name: "离线检查",
    color: "#ffff00"
  },{
    key: "weakpwdV",
    name: "弱口令扫描",
    color: "#00ff37"
  },{
    key: "webV",
    name: "网站漏扫",
    color: "#0084ff"
  },{
    key: "eightV",
    name: "年度专项检查",
    color: "#00ffff"
  },{
    key: "nmapV",
    name: "资产探测",
    color: "#ff00ff"
  },
];


/**
 * 首页欢迎页，展示一些平台数据，该页默认不可修改
 */
class Welcome extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      preUserCount: 0,
      userCount: 10000,
      preTaskCount: 0,
      taskCount: 1221,
      lineChartData: [
        { month: 3, baselineV: 100, vulV: 212, offlineV: 23 , weakpwdV: 210, webV: 230, eightV: 32, nmapV: 12},
        { month: 4, baselineV: 567, vulV: 78, offlineV: 231 , weakpwdV: 240, webV: 121, eightV: 65, nmapV: 14},
        { month: 5, baselineV: 100, vulV: 240, offlineV: 213 , weakpwdV: 121, webV: 189, eightV: 67, nmapV: 112},
        { month: 6, baselineV: 110, vulV: 249, offlineV: 123 , weakpwdV: 233, webV: 56, eightV: 45, nmapV: 42},
        { month: 7, baselineV: 103, vulV: 128, offlineV: 230 , weakpwdV: 343, webV: 78, eightV: 46, nmapV: 32},
        { month: 8, baselineV: 340, vulV: 100, offlineV: 78 , weakpwdV: 89, webV: 110, eightV: 12, nmapV: 19},
      ],
      pieChartData: [
        { name: '基线检查', value: 120},
        { name: '漏洞扫描', value: 98},
        { name: '离线检查', value: 86},
        { name: '弱口令扫描', value: 99},
        { name: '网站漏扫', value: 85},
        { name: '年度专项检查', value: 20},
        { name: '资产探测', value: 65 },
      ],
      personalPieChartData: [
        { name: '基线检查', value:110 },
        { name: '漏洞扫描', value:130 },
        { name: '离线检查', value:130 },
        { name: '弱口令扫描', value:100 },
        { name: '网站漏扫', value:90 },
        { name: '年度专项检查', value:85 },
        { name: '资产探测', value:85 },
      ],
    };
  }

  componentWillMount(){
    socket.on('addUser', (userCount) => {
      console.log(userCount);
      console.log(this);
      this.setState({
        preUserCount: this.state.userCount,
        userCount: userCount,
      });
    });
  }

  componentDidMount(){
    socket.emit('init', this.state);
  }

  addClick = () => {
    socket.emit('addUser', this.state.userCount);
  }

  render(){

    return (
      <div className={styles.container}>
        <button onClick={this.addClick}>add</button>
        <Row type="flex" align="middle" justify="space-around" className={styles.containerRow}>
          <Col xs={18} sm={15} md={12} lg={9} xl={6}>
            <Card hoverable={true} className={[styles.cardData, styles.userCountCard]}>
              <Row type="flex" align="middle" justify="space-around">
                <Col xs={18} sm={15} md={12} lg={9} xl={6}>
                  <Icon type="team" className={styles.iconFontSize}/>
                </Col>
                <Col xs={24} sm={21} md={18} lg={15} xl={12}>
                  <p>活跃用户</p>
                  <p>
                    <CountUp
                      start={this.state.preUserCount}
                      end={this.state.userCount}
                      duration={2.75}
                      useEasing
                      useGrouping
                      separator=","
                      />
                  </p>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col xs={18} sm={15} md={12} lg={9} xl={6}>
            <Card hoverable={true} className={[styles.cardData, styles.taskCountCard]}>
              <Row type="flex" align="middle" justify="space-around">
                <Col xs={18} sm={15} md={12} lg={9} xl={6}>
                  <Icon type="file-text" className={styles.iconFontSize}/>
                </Col>
                <Col xs={24} sm={21} md={18} lg={15} xl={12}>
                  <p>活跃任务</p>
                  <p>
                    <CountUp
                      start={0}
                      end={1212}
                      duration={2.75}
                      useEasing
                      useGrouping
                      separator=","
                      />
                  </p>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col xs={18} sm={15} md={12} lg={9} xl={6}>
          <Card hoverable={true} className={[styles.cardData, styles.statusCard]}>
              <Row type="flex" align="middle" justify="space-around">
                <Col xs={18} sm={15} md={12} lg={9} xl={6}>
                  <Icon type={status[0].icon} className={styles.iconFontSize}/>
                </Col>
                <Col xs={24} sm={21} md={18} lg={15} xl={12}>
                  <p>平台状态</p>
                  <p>{status[0].text}</p>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
        <Row type="flex" align="midlle" justify="space-around" className={styles.containerRow}>
          <Col span={24}>
            <LineChart data={this.state.lineChartData}/>
          </Col>
        </Row>
        <Row type="flex" align="midlle" justify="space-around" className={styles.containerRow}>
          <Col span={8}>
            <PieChart data={this.state.pieChartData} title="平台任务分布图"/>
          </Col>
          <Col span={8}>
            <PieChart data={this.state.personalPieChartData} title="个人任务分布图"/>
          </Col>
        </Row>
        <Row type="flex" align="midlle" justify="space-around" className={styles.containerRow}></Row>
     </div>
    );
  }
}

export default connect()(Welcome);

/**
 * <PieChart outerRadius={150} height={250} data={radarChartData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="name" />
                <Tooltip/>
                <Legend/>
                <PolarRadiusAxis />
                <Radar name="数量" dataKey="value" stroke="#20ec1f" fill="#20ec1f" fillOpacity={0.4} dot={true} label={true}/>
              </PieChart>
 */
