import styled from 'styled-components';
import { device } from '../../queries';

export const Root = styled.div`
  display: flex;
  align-items: center;
  padding: 190px 0;

  & > div:first-child {
    margin-right: 165px;
    margin-left: 65px;
    @media ${device.tablet} {
      margin-right: 102px;
      margin-left: 30px;
      width: 200px;
      img {
        max-width: 100%;
      }
    }
    @media ${device.mobile} {
      margin-right: auto;
      margin-left: auto;
      margin-bottom: 35px;
    }
  }
  @media ${device.tablet} {
    padding: 130px 0;
  }
  @media ${device.mobile} {
    flex-direction: column;
    padding: 90px 0;
    text-align: center;
  }
`;

export const Btns = styled.div`
  margin-top: 48px;
`;
