import React, { PureComponent, Fragment } from 'react';
import { formatTime } from '../../utils';
import {
  Decoration10,
  Decoration8,
} from '@jiaminghi/data-view-react';

import { TopBox, TimeBox } from './style';

class index extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      title: '昆明疾控中心',
      timeStr: '',
      weekday: [
        '星期天',
        '星期一',
        '星期二',
        '星期三',
        '星期四',
        '星期五',
        '星期六',
      ],
    };
  }

  // 设置时间
  componentDidMount() {
    this.setTimingFn();
  }

  setTimingFn() {
    this.timing = setInterval(() => {
      let dateYear = formatTime(new Date(), 'yyyy-MM-dd');
      let dateDay = formatTime(new Date(), 'HH: mm: ss');
      let dateWeek = this.state.weekday[new Date().getDay()];
      this.setState({
        timeStr: `${dateYear} | ${dateDay} ${dateWeek}`,
      });
    }, 1000);
  }

  render() {
    const { title } = this.state;
    return (
      <Fragment>
        <TopBox>
          <div className='top_box'>
            <Decoration10 className='top_decoration10' />
            <div className='title-box'>
              <Decoration8
                className='top_decoration8'
                color={['#568aea', '#000000']}
              />
              <div className='title'>
                <div>{title}</div>
                <TimeBox>
                  <span>{this.state.timeStr}</span>
                </TimeBox>
              </div>

              <Decoration8
                reverse={true}
                className='top_decoration8'
                color={['#568aea', '#000000']}
              />
            </div>
            <Decoration10 className='top_decoration10 top_decoration10_reverse' />
          </div>
        </TopBox>
      </Fragment>
    );
  }
}

export default index;
