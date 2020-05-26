import styled from 'styled-components';
import { device } from '../../../queries';

export const Root = styled.div`
  padding: 64px 80px 120px;
  background-color: #281741;
  @media ${device.tablet} {
    padding-left: 40px;
    padding-right: 40px;
  }
  @media ${device.mobile} {
    padding-left: 24px;
    padding-right: 24px;
    padding-bottom: 72px;
  }
`;

export const List = styled.div`
  max-width: 1440px;
  margin: 72px auto 0;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 32px;
  grid-row-gap: 72px;
  grid-auto-rows: 406px;
  @media ${device.mobile} {
    display: flex;
    flex-direction: column;
    margin-left: -12px;
    margin-right: -12px;
    margin-top: 56px;
  }
`;
