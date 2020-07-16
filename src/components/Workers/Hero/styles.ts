import styled from 'styled-components';
import { Typography } from 'ui-kit';
import { device } from '../../../queries';

export const Root = styled.div`
  padding: 250px 0 230px;
  overflow: hidden;
  position: relative;
  margin-top: -92px;
  &::after {
    content: '';
    position: absolute;
    display: block;
    left: 0;
    bottom: 0;
    height: 190px;
    width: 100%;
    background-image: linear-gradient(
      180deg,
      rgba(28, 9, 55, 0) 0%,
      #1c0937 100%
    );
    @media ${device.tablet} {
      display: none;
    }
  }
  @media ${device.tablet} {
    padding-top: 0;
    padding-bottom: 92px;
  }
  @media ${device.mobile} {
    padding-bottom: 72px;
  }
`;
export const Inner = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  @media ${device.tablet} {
    justify-content: center;
  }
`;
export const Left = styled.div``;
export const Right = styled.div`
  max-width: 670px;
  @media ${device.tablet} {
    max-width: 640px;
    margin: -40px auto 0;
    text-align: center;
  }
  @media ${device.mobile} {
    margin-top: -20px;
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

export const Bg = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  @media ${device.tablet} {
    position: relative;
    min-height: 540px;
  }

  img {
    width: 2300px;
    height: 100%;
    @media ${device.tablet} {
      width: 930px;
      margin-left: -150px;
    }
    @media ${device.mobile} {
      width: 710px;
      margin-left: -94px;
      margin-top: 20px;
    }
  }
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 190px;
    background: linear-gradient(180deg, rgba(28, 9, 55, 0) 0%, #1c0937 100%);
    display: none;
    @media ${device.tablet} {
      display: block;
    }
    @media ${device.mobile} {
      bottom: -10px;
    }
  }
`;
