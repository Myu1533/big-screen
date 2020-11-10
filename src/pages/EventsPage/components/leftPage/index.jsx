import React, { PureComponent } from 'react';
import { LeftPage } from './style';
import { ModuleTitle } from '../../../../style/globalStyledSet';
import { BorderBox12, BorderBox13 } from '@jiaminghi/data-view-react';
import TrafficSituation from './charts/TrafficSituation';
import UserSituation from './charts/UserSituation';
import { connect } from 'dva';

class index extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { userSitua, trafficSitua, mapData } = this.props;
    console.log(mapData)
    return (
      <LeftPage>
        {/* 顶部图表 */}
        <BorderBox13 className='left-bottom-borderBox13'>
          <div className='left-bottom'>
            <ModuleTitle>
              <i className='iconfont'>&#xe88e;</i>
              <span>区域监控</span>
            </ModuleTitle>
            {/* 图表 */}
            <UserSituation mapData={mapData} userSitua={userSitua}></UserSituation>
          </div>
        </BorderBox13>

        {/* 底部图表 */}
        <BorderBox12 className='left-top-borderBox12'>
          <div className='left-top'>
            <ModuleTitle>
              <i className='iconfont'>&#xe78f;</i>
              <span>态势统计</span>
            </ModuleTitle>
            {/* 图表 */}
            <TrafficSituation trafficSitua={trafficSitua}></TrafficSituation>
          </div>
        </BorderBox12>
      </LeftPage>
    );
  }
}

const mapStateToProps = state => {
  return {
    accessFrequency: state.leftPage.accessFrequency,
    peakFlow: state.leftPage.peakFlow,
    userSitua: state.leftPage.userSitua,
    trafficSitua: state.leftPage.trafficSitua,
    mapData: state.centerPage.mapData,
  };
};

const mapStateToDispatch = dispatch => ({});

export default connect(mapStateToProps, mapStateToDispatch)(index);
