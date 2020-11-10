import React, { PureComponent } from 'react';
import Map from '../../centerPage/charts/Map';

class UserSituation extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { mapData } = this.props;

    return (
      <div>
        <Map mapData={mapData}></Map>
      </div>
    );
  }
}

export default UserSituation;
