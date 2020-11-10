import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';
import AreaRaising from './charts/AreaRaising';
import UserIdentityCategory from './charts/UserIdentityCategory';
import { ModuleTitle } from '../../../../style/globalStyledSet';
import { connect } from 'dva';
import {
  RightPage,
  RightCenterBox,
} from './style';

class index extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { areaRaising, userIdentityCategory } = this.props;
    return (
      <RightPage>
        <div className='right-top'>
          <ModuleTitle>
            <i className='iconfont'>&#xe7f7;</i>
            <span>区域事件新增</span>
          </ModuleTitle>
          <div className='right-top-content'>
            {areaRaising ? (
              <AreaRaising
              areaRaisingData={areaRaising}
              />
            ) : (
              ''
            )}
          </div>
        </div>

        <RightCenterBox>
          <ModuleTitle>
            <i className='iconfont'>&#xe7fd;</i>
            <span>事件概览</span>
            &nbsp;&nbsp;
            <NavLink to="/detail">详情</NavLink>
          </ModuleTitle>
          <UserIdentityCategory
            userIdentityCategory={userIdentityCategory}></UserIdentityCategory>
        </RightCenterBox>
      </RightPage>
    );
  }
}

const mapStateToProps = state => {
  return {
    areaRaising: state.rightPage.areaRaising,
    userIdentityCategory: state.rightPage.userIdentityCategory,
  };
};

const mapStateToDispatch = dispatch => ({});

export default connect(mapStateToProps, mapStateToDispatch)(index);
