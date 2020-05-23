import styled from 'styled-components';
import { Typography } from 'ui-kit';
import { device } from '../../../queries';

export const Root = styled.div`
  display: flex;
  padding-top: 240px;
  padding-bottom: 140px;
  justify-content: center;
  align-items: center;
  & > div {
    &:first-child {
      width: 100%;
    }
    margin-left: 50px;
    max-width: 752px;
    @media ${device.mobile} {
      margin-left: 0;
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
  @media ${device.mobile} {
    & > div:not(:last-child) {
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
