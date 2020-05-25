import styled from 'styled-components';
import { device } from '../../../queries';

export const Root = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 133px 80px 120px;
  @media ${device.tablet} {
    padding-left: 40px;
    padding-right: 40px;
  }
  @media ${device.mobile} {
    padding-left: 12px;
    padding-right: 12px;
  }
`;

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 32px;
  grid-row-gap: 72px;
  grid-auto-rows: 406px;
  margin-top: 72px;
  @media ${device.mobile} {
    display: flex;
    flex-direction: column;
  }
`;
