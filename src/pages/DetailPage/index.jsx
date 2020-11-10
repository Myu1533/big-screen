import React, { Component } from 'react';
import { connect } from 'dva';
import LeftPage from './components/leftPage';
import RightPage from './components/rightPage';

// antd
import { Row, Col } from 'antd';

class EventsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Row gutter={16}>
        {/* 左侧内容 */}
        <Col span={18} style={{ minHeight:'980px'}}>
          <LeftPage/>
        </Col>
        {/* 右侧内容 */}
        <Col span={6}>
          <RightPage />
        </Col>
      </Row>
    );
  }
}

export default connect()(EventsPage);
