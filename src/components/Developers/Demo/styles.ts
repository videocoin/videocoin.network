import styled from 'styled-components';
import { device } from '../../../queries';

export const Root = styled.div`
  padding: 92px 0;
  background-color: #281741;
`;

export const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 48px;
  align-items: center;
  @media ${device.mobile} {
    flex-direction: column;
  }
  & > div:first-child {
    flex: 416px;
    flex-grow: 0;
    flex-shrink: 0;
    margin-right: 30px;
    display: flex;
    justify-content: center;
    @media ${device.tablet} {
      flex: 1;
    }
    @media ${device.mobile} {
      flex: none;
      width: 100%;
      margin-bottom: 36px;
      margin-right: 0;
    }
  }
  & > div:last-child {
    flex: 528px;
    flex-grow: 0;
    @media ${device.tablet} {
      flex: 1;
    }
    @media ${device.mobile} {
      flex: none;
      width: 100%;
      text-align: center;
    }
    a {
      display: block;
      margin-bottom: 8px;
    }
  }
`;
