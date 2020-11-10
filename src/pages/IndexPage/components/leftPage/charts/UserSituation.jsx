import React, { PureComponent } from 'react';
import { userOptions } from './options';
import { ScrollBoard, BorderBox13 } from '@jiaminghi/data-view-react';
import { Modal, Button, Descriptions } from 'antd';

class UserSituation extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      config: {
        // 表头背景色
        headerBGC: '#443dc5',
        // 奇数行背景色
        oddRowBGC: '#09184F',
        // 偶数行背景色
        evenRowBGC: '#070C34',
        // 对其方式
        align: ['center'],
        // 表行数
        rowNum: 10,
        waitTime: 60000
      },
      visible: false,
      current: null,
      calling: false
    };
  }

  handleRowClick = (e) => {
    this.setState({
      visible: true,
    });
  }

  handleModalClose = () => {
    this.setState({
      visible: false
    })
  }


  render() {
    const { userSitua } = this.props;
    const config = {
      ...this.state.config,
      ...userOptions(userSitua),
    };

    return (
      <div>
        {userSitua ? (
          <ScrollBoard
            config={config}
            onClick={this.handleRowClick}
            style={{
              width: '5.475rem',
              height: '6.875rem',
            }}></ScrollBoard>
        ) : (
          ''
        )}
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
            <Descriptions.Item label="处置地点">
              盘龙区XX幼儿园
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
      </div>
    );
  }
}

export default UserSituation;
