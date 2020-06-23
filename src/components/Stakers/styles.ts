import styled from 'styled-components';
import { device } from '../../queries';
export const ImgWrapper = styled.div`
  width: 850px;
  display: flex;
  margin-top: -153px;
  & > div {
    width: 100%;
    @media ${device.tablet} {
      height: 480px;
      margin-bottom: 35px;
    }
    @media ${device.mobile} {
      height: auto;
      margin-bottom: 35px;
    }
  }
  @media ${device.tablet} {
    width: 750px;
    margin-top: 0;
  }
  @media ${device.mobile} {
    width: 655px;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
  justify-content: center;
  @media ${device.mobile} {
    flex-direction: column;
    padding-bottom: 50px;
    padding-top: 80px;
  }
  & > a {
    min-height: 100vh;
    text-align: center;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-self: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    @media ${device.mobile} {
      width: 100%;
      min-height: auto;
    }
    &:hover {
      background-color: #4e238e;
      @media ${device.tablet} {
        background-color: transparent;
      }
    }
    &::before {
      content: '';
      top: 0;
      position: absolute;
      width: 630px;
      height: 650px;
      display: block;
    }
    &:first-child {
      align-items: flex-start;

      ${ImgWrapper} {
        align-self: flex-end;
        @media (min-width: 1700px) {
          margin-right: auto;
        }
        @media ${device.tablet} {
          width: 700px;
        }
        @media ${device.mobile} {
          width: 655px;
        }
      }
      &::before {
        background-image: linear-gradient(
          134deg,
          rgba(28, 9, 55, 0.88) 17%,
          rgba(28, 8, 55, 0) 47%
        );
        left: 0;
      }
      &::after {
        top: 50%;
        transform: translateY(-50%);
        content: '';
        display: block;
        height: 635px;
        width: 4px;
        position: absolute;
        right: 0;
        background: linear-gradient(
          180deg,
          rgba(128, 100, 164, 0.2) 0%,
          #c0a5e4 35.72%,
          #a88cce 57.29%,
          rgba(97, 71, 135, 0.17) 100%
        );
        @media ${device.mobile} {
          display: none;
        }
      }
    }
    &:last-child {
      align-items: flex-end;
      ${ImgWrapper} {
        justify-content: flex-end;
        margin-left: auto;
      }
      &::before {
        background-image: linear-gradient(
          140deg,
          rgba(28, 9, 55, 0.88) 11%,
          rgba(28, 8, 55, 0) 48%
        );
        right: 0;
        transform: scaleX(-1);
      }
    }
    & > div:last-child {
      display: none;
      margin: 32px auto 0;
      @media ${device.tablet} {
        display: block;
      }
    }
  }
`;

export const Descr = styled.div`
  max-width: 450px;
  margin: 0 auto;
  @media ${device.tablet} {
    padding: 0 18px;
  }
`;
