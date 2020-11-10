import React, { PureComponent } from 'react';
import { connect } from 'dva';

// style
import { ModuleTitle } from '../../../../style/globalStyledSet';

// components
import { BorderBox13, BorderBox12 } from '@jiaminghi/data-view-react';
import Sick from '../rightPage/charts/Sick';
import UserSituation from './charts/UserSituation';
// antd
import { Statistic, Select, Row, Col } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';

const { Option } = Select;
class index extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onChange = (value) => {
    console.log(`selected ${value}`);
  }

  onBlur = () => {
    console.log('blur');
  }

  onFocus = () => {
    console.log('focus');
  }

  onSearch = (val) => {
    console.log('search:', val);
  }

  render() {
    const { mapData, sick } = this.props;
    return (
      <BorderBox13>
        <Row style={{ padding: '0.15rem' }}>
          <Col span={16}>
            <ModuleTitle>
              <i className='iconfont'>&#xe88e;</i>
              <span>区域监控</span>
            </ModuleTitle>
            <UserSituation mapData={mapData}></UserSituation>
            <br/>
            <Select
              showSearch
              style={{ width: 200 }}
              placeholder="应急事件选择"
              optionFilterProp="children"
              onChange={this.onChange}
              onFocus={this.onFocus}
              onBlur={this.onBlur}
              onSearch={this.onSearch}
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              <Option value="食物中毒">食物中毒</Option>
              <Option value="新冠肺炎">新冠肺炎</Option>
              <Option value="流感">流感</Option>
            </Select>
          </Col>
          <Col span={8}>
            <div>
              <ModuleTitle>
                <i className='iconfont'>&#xe7f7;</i>
                <span>患者新增</span>
              </ModuleTitle>
              {sick ? (
                <Sick
                  sick={sick}
                />
              ) : (
                ''
              )}
            </div>
            <br/>
            <br/>
            <div>
              <BorderBox12 style={{padding: '0.125rem'}}>
                <Statistic
                  title={<h3 style={{ color: '#cf1322' }}>新增</h3>}
                  value={9}
                  precision={2}
                  valueStyle={{ color: '#cf1322' }}
                  prefix={<ArrowUpOutlined />}
                  suffix="例"
                />
              </BorderBox12>
              <br/>
              <BorderBox12 style={{padding: '0.125rem'}}>
                <Statistic
                  title={<h3 style={{ color: '#6176F4' }}>未治愈</h3>}
                  value={9}
                  precision={2}
                  valueStyle={{ color: '#6176F4' }}
                  prefix={<ArrowUpOutlined />}
                  suffix="例"
                />
              </BorderBox12>
              <br/>
              <BorderBox12 style={{padding: '0.125rem'}}>
                <Statistic
                  title={<h3 style={{ color: '#3f8600' }}>治愈</h3>}
                  value={1128}
                  precision={2}
                  valueStyle={{ color: '#3f8600' }}
                  prefix={<ArrowDownOutlined />}
                  suffix="例"
                />
              </BorderBox12>
              <br/>
              <BorderBox12 style={{padding: '0.125rem'}}>
                <Statistic
                  title={<h3 style={{ color: '#666' }}>累计</h3>}
                  value={11000}
                  precision={2}
                  valueStyle={{ color: '#666' }}
                  suffix="例"
                />
              </BorderBox12>
            </div>
          </Col>
        </Row>
      </BorderBox13>
    );
  }
}

const mapStateToProps = state => {
  return {
    mapData: state.centerPage.mapData,
    sick: state.rightPage.sick,
  };
};

const mapStateToDispatch = dispatch => ({});

export default connect(mapStateToProps, mapStateToDispatch)(index);
