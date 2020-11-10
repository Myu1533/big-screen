import React, { PureComponent } from 'react';
import Chart from '../../../../../utils/chart';
import { SickOptions } from './options';

class OfflinePortal extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      renderer: 'canvas',
    };
  }

  render() {
    const { renderer } = this.state;
    const { sick } = this.props;
    return (
      <div
        style={{
          width: '100%',
          height: '2.875rem',
        }}>
        <Chart
          renderer={renderer}
          option={SickOptions(sick)}
        />
      </div>
    );
  }
}

export default OfflinePortal;
