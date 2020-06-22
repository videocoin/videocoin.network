import styled from 'styled-components';
import { Typography } from 'ui-kit/*';
import { device } from '../../../../queries';

export const Root = styled.div`
  padding: 290px 0 100px;
  position: relative;
  overflow: hidden;
  @media ${device.tablet} {
    padding-top: 0;
  }
`;
export const Inner = styled.div`
  display: flex;
  justify-content: flex-start;
  @media ${device.tablet} {
    flex-direction: column-reverse;
    align-items: flex-end;
    justify-content: center;
  }
`;
export const Right = styled.div`
  margin-top: -200px;
  width: 100%;
  @media ${device.tablet} {
    width: 690px;
    margin: 0 auto;
  }
  @media ${device.mobile} {
    max-width: 550px;
    position: relative;
  }
`;
export const Left = styled.div`
  max-width: 670px;
  width: 670px;
  flex-shrink: 0;
  margin-left: 70px;
  @media ${device.tablet} {
    width: 100%;
    max-width: 640px;
    margin: 0 auto;
    text-align: center;
  }
`;

export const Subtitle = styled(Typography)`
  margin-bottom: 12px;
  span {
    color: #fd9369;
  }
`;
export const Title = styled(Typography)`
  margin-bottom: 64px;
  span {
    color: #53eaaa;
  }
`;
