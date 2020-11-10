import styled from 'styled-components';
import { TitleColor } from '../../style/color'

export const TopBox = styled.div`
  .top_box {
    display: flex;
    justify-content: center;
    padding-top: 8px;

    .top_decoration10 {
      flex: 1;
      height: 0.0625rem;
    }

    .top_decoration10_reverse {
      transform: rotateY(180deg);
    }

    .title-box {
      display: flex;
      justify-content: center;
      height: 0.625rem;
      flex: auto;

      .top_decoration8 {
        flex: 1;
      }

      .title {
        flex: auto;
        text-align: center;
        font-size: 0.25rem;
        color: ${TitleColor};
        line-height: 1;
      }
    }
  }
`;

export const TimeBox = styled.div`
  color: #fff;
  span{
    font-size: 0.18rem;
    color: ${TitleColor};
  }
`;
