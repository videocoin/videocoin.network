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
  justify-content: flex-end;
  @media ${device.tablet} {
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
  }
`;
export const Left = styled.div`
  margin-top: -250px;
  width: 100%;
  @media ${device.tablet} {
    width: 690px;
    margin: -90px auto 0;
    transform: translateX(-180px);
  }
  @media ${device.mobile} {
    max-width: 550px;
    margin: -90px auto 0;
    transform: translateX(-50%);
    left: 50%;
    position: relative;
    margin-left: -250px;
  }
`;
export const Right = styled.div`
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
