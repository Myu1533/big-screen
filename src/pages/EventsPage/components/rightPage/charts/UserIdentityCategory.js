import React, { PureComponent } from 'react';
import { ScrollRankingBoard } from '@jiaminghi/data-view-react';

class UserSituation extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      config: {
        // 单位
        unit: '例',
        showValue: false,
        rowNum: 8,
        data: [],
      },
    };
  }
  render() {
    const { userIdentityCategory } = this.props;
    const config = {
      ...this.state.config,
      ...userIdentityCategory,
    };
    return (
      <div>
        {userIdentityCategory ? (
          <ScrollRankingBoard
            config={config}
            style={{
              width: '5.85rem',
              height: '7.625rem',
            }}
          />
        ) : (
          ''
        )}
      </div>
    );
  }
}

export default UserSituation;
