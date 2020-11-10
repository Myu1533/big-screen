import React, { Component } from 'react';
import { connect } from 'dva';
import { IndexPageContent } from './style';
import LeftPage from './components/leftPage';
import CenterPage from './components/centerPage';
import RightPage from './components/rightPage';

class EventsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <IndexPageContent>
        {/* 左侧内容 */}
        <LeftPage />
        {/* 中间内容 */}
        <CenterPage />
        {/* 右侧内容 */}
        <RightPage />
      </IndexPageContent>
    );
  }
}

export default connect()(EventsPage);
