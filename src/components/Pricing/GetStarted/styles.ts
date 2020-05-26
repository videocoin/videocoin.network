import styled from 'styled-components';
import { device } from '../../../queries';

export const Root = styled.div`
  text-align: center;
  max-width: 420px;
  margin: 0 auto;
  padding-top: 100px;
  padding-bottom: 40px;
`;

export const Btns = styled.div`
  margin-top: 55px;
  display: flex;
  justify-content: space-between;
  @media ${device.mobile} {
    flex-direction: column;
    align-items: center;
    & > a:not(:last-child) {
      margin-bottom: 36px;
    }
  }
`;
