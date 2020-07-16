import styled from 'styled-components';
import { Typography } from 'ui-kit';
import { device } from '../../../queries';

export const Root = styled.div`
  display: flex;
  padding-top: 150px;
  padding-bottom: 140px;
  justify-content: center;
  align-items: center;
  & > div {
    &:first-child {
      width: 100%;
      max-width: 583px;
    }
    &:last-child {
      margin-left: 50px;
      max-width: 752px;
      padding-right: 25px;
      @media ${device.mobile} {
        margin-left: 0;
        padding-right: 0;
      }
    }
  }
  @media ${device.tablet} {
    flex-direction: column;
    text-align: center;
    padding: 143px 24px 72px;
    & > div:first-child {
      margin-bottom: 56px;
    }
  }
`;

export const Btns = styled.div`
  margin-top: 64px;
  display: flex;
  @media ${device.tablet} {
    justify-content: center;
  }
  @media ${device.mobile} {
    margin-top: 32px;
    flex-direction: column;
    align-items: center;
    & > a:not(:last-child) {
      margin-bottom: 35px;
    }
  }
`;

export const Subtitle = styled(Typography)`
  margin-bottom: 12px;
  span {
    color: #fd9369;
  }
`;
