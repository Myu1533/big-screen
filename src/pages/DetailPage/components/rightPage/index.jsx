import React, { PureComponent } from 'react';
import { connect } from 'dva';

// style
import { ModuleTitle } from '../../../../style/globalStyledSet';

// component
import ImportantEvents from './charts/ImportantEvents';
import Statistics from './charts/Statistics';

class index extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { userIdentityCategory  } = this.props;
    return (
      <div>
        <div>
          <ModuleTitle>
            <i className='iconfont'>&#xe7fd;</i>
            <span>重点事件</span>
          </ModuleTitle>
          <ImportantEvents
            userIdentityCategory={userIdentityCategory}
          ></ImportantEvents>
        </div>
        <div>
          <ModuleTitle>
            <i className='iconfont'>&#xe7fd;</i>
            <span>统计概览</span>
          </ModuleTitle>
          <Statistics
            userIdentityCategory={userIdentityCategory}>
          </Statistics>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userIdentityCategory: state.rightPage.userIdentityCategory,
  };
};

const mapStateToDispatch = dispatch => ({});

export default connect(mapStateToProps, mapStateToDispatch)(index);
