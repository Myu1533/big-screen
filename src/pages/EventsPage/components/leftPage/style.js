import styled from 'styled-components';

export const LeftPage = styled.div`
  flex: 1;
  width: 6.25rem;
  .left-top-borderBox12 {
    height: 4.375rem;
    padding: 0.1875rem;
    .left-top {
      width: 100%;
      height: 100%;
      border-radius: 10px;
      background-color: rgba(19, 25, 47, 0.6);
      .title-dis {
        text-align: center;
        margin-top: 0.1rem;
        font-size: 0.12rem;
        color: #c0c9d2;
        &-keyword {
          padding-left: 0.125rem;
          color: #47dae8;
        }
      }
    }
  }
  .left-bottom-borderBox13 {
    height: 7.75rem;
    padding: 0.25rem 0.1875rem;
    .left-bottom {
      height: 100%;
      border-radius: 10px;
      background-color: rgba(19, 25, 47, 0.6);
    }
  }
`;
