import React, { PureComponent } from 'react';
import { CenterPage, CenterBottom } from './style';
import OfflinePortal from '../rightPage/charts/OfflinePortal';
import {Map, CustomOverlay, InfoWindow} from 'react-bmapgl';
import { BorderBox13 } from '@jiaminghi/data-view-react';
import { Modal, Button, Descriptions } from 'antd';

// svg
import yingjizhihui from '../../../../assets/icon/yingjizhihui.svg';
import yingjixiangyingYiji from '../../../../assets/icon/yingjixiangying-yiji.svg';
import yingjixiangyingErji from '../../../../assets/icon/yingjixiangying-erji.svg';
import yingjixiangyingSanji from '../../../../assets/icon/yingjixiangying-sanji.svg';
import yingjixiangyingSiji from '../../../../assets/icon/yingjixiangying-siji.svg';
import yingjijiuyuan from '../../../../assets/icon/yingjijiuyuan.svg';
import { connect } from 'dva';

import mapStyle from '../../../../assets/geo/style.json'

const MonitorDOM = () => {
  return <div className="custom" style={{width: 20, height: 20, cursor: 'pointer', boxShadow: '1px 2px 2px #000'}}>
    <img alt="1" src={yingjizhihui} style={{width: 20, height: 20, color: '#fff'}} />
  </div>
}
const JiuyuanDom = () => {
  return <div className="custom" style={{width: 20, height: 20, cursor: 'pointer', boxShadow: '1px 2px 2px #000'}}>
    <img alt="1" src={yingjijiuyuan} style={{width: 20, height: 20, color: '#fff'}} />
  </div>
}
const YijiDom = () => {
  return <div className="custom" style={{width: 20, height: 20, cursor: 'pointer', boxShadow: '1px 2px 2px #000'}}>
    <img alt="1" src={yingjixiangyingYiji} style={{width: 20, height: 20, color: '#fff'}} />
  </div>
}
const ErjiDom = () => {
  return <div className="custom" style={{width: 20, height: 20, cursor: 'pointer', boxShadow: '1px 2px 2px #000'}}>
    <img alt="1" src={yingjixiangyingErji} style={{width: 20, height: 20, color: '#fff'}} />
  </div>
}
const SanjiDom = () => {
  return <div className="custom" style={{width: 20, height: 20, cursor: 'pointer', boxShadow: '1px 2px 2px #000'}}>
    <img alt="1" src={yingjixiangyingSanji} style={{width: 20, height: 20, color: '#fff'}} />
  </div>
}
const SijiDom = () => {
  return <div className="custom" style={{width: 20, height: 20, cursor: 'pointer', boxShadow: '1px 2px 2px #000'}}>
    <img alt="1" src={yingjixiangyingSiji} style={{width: 20, height: 20, color: '#fff'}} />
  </div>
}



class index extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      infoWindowPoint: null,
      visible: false,
      current: null,
      calling: false
    };
  }

  handleOverlayClick = (e) => {
    console.log(e)
    if(e.customOverlayDom){
      this.setState({
        visible: true,
      });
    }
  }

  handleModalClose = () => {
    this.setState({
      visible: false
    })
  }

  render() {
    const { offline, infoWindowPoint } = this.props;
    return (
      <CenterPage>
        <Map
          style={{ width: '100%', height: '8rem', borderRadius: 8, overflow: 'hidden'}}
          center={new window.BMapGL.Point(102.713948,25.032467)}
          zoom={11}
          heading={0}
          tilt={40}
          mapStyleV2={{styleJson: mapStyle}}
          onClick={this.handleOverlayClick}
        >
          <CustomOverlay position={new window.BMapGL.Point(102.713948,25.032467)}>
            <MonitorDOM />
          </CustomOverlay>
          <CustomOverlay position={new window.BMapGL.Point(102.715048,25.036453)}>
            <JiuyuanDom />
          </CustomOverlay>
          <CustomOverlay position={new window.BMapGL.Point(103.04059,25.340633)}>
            <YijiDom/>
          </CustomOverlay>
          <CustomOverlay position={new window.BMapGL.Point(102.673161,25.045173)}>
            <SanjiDom />
          </CustomOverlay>
          <CustomOverlay position={new window.BMapGL.Point(102.751418,25.015568)}>
            <ErjiDom />
          </CustomOverlay>
          <CustomOverlay position={new window.BMapGL.Point(102.751461,25.015553)}>
            <SijiDom />
          </CustomOverlay>
          {
            infoWindowPoint ? <InfoWindow position={infoWindowPoint} text="内容" title="标题"/> : ''
          }
        </Map>
        <CenterBottom>
          {offline ? (
            <OfflinePortal
              offlinePortalData={offline.offlinePortalData}
            />
          ) : (
            ''
          )}
        </CenterBottom>
        <Modal
          title={null}
          visible={this.state.visible}
          onOk={this.handleModalClose}
          okText="关闭"
          closable={false}
          maskClosable={false}
          destroyOnClose={true}
          wrapClassName={'custom-modal'}
          cancelButtonProps={{
            style: {
              display: 'none'
            }
          }}
          modalRender={modal => <BorderBox13 style={{padding: '20px', color: '#fff'}}>{modal}</BorderBox13>}
        >
          {
            this.state.calling ? (<iframe title="webRTC" src="./webRTC/index.html" frameBorder="0" width="100%" height="620px" />) : (<Descriptions title="食品安全处置小组01" column={1}>
            <Descriptions.Item label="负责人">南天信息</Descriptions.Item>
            <Descriptions.Item label="处置事件">食物中毒</Descriptions.Item>
            <Descriptions.Item label="事件类型">食品安全</Descriptions.Item>
            <Descriptions.Item label="事件级别">一级</Descriptions.Item>
            <Descriptions.Item label="处置地点">
              盘龙区XX幼儿园
            </Descriptions.Item>
            <Descriptions.Item label="上报时间">
              2020-02-02 14:00
            </Descriptions.Item>
            <Descriptions.Item label="小组人员">8</Descriptions.Item>
          </Descriptions>)
          }
          {
            this.state.calling ? (
              <Button type="primary" onClick={() => {this.setState({calling: false})}}>挂断</Button>
              ) : (
                <Button type="primary" onClick={() => {this.setState({calling: true})}}>呼叫</Button>
              )
          }
        </Modal>
      </CenterPage>
    );
  }
}

const mapStateToProps = state => {
  return {
    offline: state.rightPage.offline,
  };
};

const mapStateToDispatch = dispatch => ({});

export default connect(mapStateToProps, mapStateToDispatch)(index);
