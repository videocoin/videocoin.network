import styled from 'styled-components';
import { Typography } from 'ui-kit';
import { device } from '../../../queries';

export const Root = styled.div`
  padding-top: 164px;
  overflow: hidden;
  position: relative;
  padding-bottom: 105px;
`;

export const Subtitle = styled(Typography).attrs(() => ({
  type: 'subtitleCaps',
  align: 'center',
}))`
  margin-bottom: 4px;
  span {
    color: #fa8d62;
  }
`;

export const Title = styled(Typography).attrs(() => ({
  type: 'display3',
  align: 'center',
}))`
  margin-bottom: 20px;
`;

export const Img = styled.div`
  position: relative;
  width: 1080px;
  text-align: center;
  @media ${device.tablet} {
    width: 385px;
    flex-shrink: 0;
    margin-left: -20px;
  }
  @media ${device.mobile} {
    max-width: 100%;
    width: 100%;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    margin-left: 0;
    pointer-events: none;
  }
`;

const Payment = styled.div`
  position: absolute;
  font-weight: 500;
  color: #fff;
  @media ${device.tablet} {
    display: none;
  }
`;
export const Payment1 = styled(Payment)`
  left: 22%;
`;
export const Payment2 = styled(Payment)`
  left: 47.6%;
`;
export const Payment3 = styled(Payment)`
  left: 73%;
`;

export const Features = styled.ul`
  text-align: left;
  display: flex;
  margin-top: 93px;
  padding-left: 20px;
  @media ${device.tablet} {
    padding-left: 0;
    width: 100%;
    margin-left: -20px;
    margin-top: 22px;
    flex-direction: column;
  }
  @media ${device.mobile} {
    justify-content: center;
    margin: 215px auto auto;
    max-width: 320px;
  }
  li {
    max-width: 260px;
    margin-right: 21px;
    @media ${device.tablet} {
      max-width: 320px;
      margin-right: 0;
    }
    &:first-child {
      margin-right: auto;
      @media ${device.tablet} {
        margin-right: 0;
        margin-bottom: 116px;
      }
      @media ${device.mobile} {
        margin-bottom: 340px;
        margin-left: 20px;
      }
    }
    &:nth-child(2) {
      display: none;
      margin-bottom: 120px;
      @media ${device.tablet} {
        display: block;
      }
      @media ${device.mobile} {
        margin-bottom: 260px;
      }
    }
    &:nth-child(3) {
      @media ${device.tablet} {
        margin-bottom: 150px;
      }
      @media ${device.mobile} {
        margin-bottom: 330px;
      }
    }
  }
  p {
    font-size: 12px;
    letter-spacing: 0.06px;
    color: rgba(184, 168, 206, 0.72);
    line-height: 20px;
    position: relative;
    padding-left: 30px;
    margin-left: 24px;
    &::before {
      content: '';
      position: absolute;
      display: block;
      background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxMyIgdmlld0JveD0iMCAwIDE2IDEzIj4gIDxwYXRoIGZpbGw9IiMzN0NCOEQiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTAuNjk5MDE2NzIyLDEwLjMzNzE3NTkgTDQuNjQzMjk1NCwxMy41NzM1MDcyIEM1LjYzOTUyNzU0LDE0LjM5MDkyODQgNy4xMDk3ODQxMSwxNC4yNDU5NzM1IDcuOTI3MjA1MzYsMTMuMjQ5NzQxNCBDNy45NDQ4MjE5LDEzLjIyODA5NTggNy45NDQ4MjE5LDEzLjIyODA5NTggNy45NjIwOTEwMywxMy4yMDYxNzIxIEwxNS40NTQ2OTEsMy42MTU2NDQwNCBDMTUuNzk0NzAxOSwzLjE4MDQzMDIgMTUuNzE3NTI0NiwyLjU1MTk4NjQ0IDE1LjI4MjMxMDcsMi4yMTE5NzU2MyBDMTQuODQ3MDk2OSwxLjg3MTk2NDgxIDE0LjIxODY1MzEsMS45NDkxNDIxMSAxMy44Nzg2NDIzLDIuMzg0MzU1OTYgTDYuMzg2MDQyMjgsMTEuOTc0ODg0IEw2LjM4MTA1ODYxLDExLjk4MTEwODIgQzYuMjY0Mjg0MTUsMTIuMTIzNDI3IDYuMDU0MjQ3NSwxMi4xNDQxMzQ5IDUuOTExOTI4NjIsMTIuMDI3MzYwNCBMMS45Njc2NDk5NSw4Ljc5MTAyOTE5IEMxLjU0MDY5MzMxLDguNDQwNzA1OCAwLjkxMDU4MzM1NCw4LjUwMjgyOTMyIDAuNTYwMjU5OTYzLDguOTI5Nzg1OTUgQzAuMjA5OTM2NTcyLDkuMzU2NzQyNTkgMC4yNzIwNjAwODksOS45ODY4NTI1NCAwLjY5OTAxNjcyMiwxMC4zMzcxNzU5IFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTIpIi8+PC9zdmc+);
      width: 24px;
      height: 24px;
      left: 0;
      top: 3px;
      background-repeat: no-repeat;
    }
  }
`;

export const FeatureTitle = styled.div`
  min-height: 48px;
  display: flex;
  align-items: center;
  font-weight: 500;
  letter-spacing: 0.12px;
  color: #b79cdd;
  margin-bottom: 24px;
  span {
    font-size: 14px;
    line-height: 24px;
  }
  @media ${device.tablet} {
    min-height: 0;
    color: #ccb1f2;
  }
  @media ${device.mobile} {
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.1px;
  }
`;

export const FeatureTop = styled.div`
  font-weight: 500;
  letter-spacing: 0.12px;
  color: rgba(255, 255, 255, 0.94);
  margin-bottom: 12px;
  display: none;
  align-items: center;
  img {
    margin-right: 8px;
  }
  @media ${device.tablet} {
    display: flex;
  }
`;

export const FeaturePayment = styled.div`
  background-color: #eee3ff;
  color: #0c0417;
  display: flex;
  align-items: center;
  padding: 6px 0 6px 22px;
  border-radius: 6px;
  letter-spacing: 0.12px;
  margin-right: 9px;
  box-shadow: 0 8px 20px rgba(12, 4, 23, 0.67);
  width: 100px;
  position: relative;
  img {
    position: absolute;
    z-index: 1;
    left: -15px;
  }
  input {
    border: none;
    background: transparent;
    padding-left: 1px;
    font-weight: 500;
    line-height: 24px;
    width: 100%;
  }
`;

export const Inner = styled.div`
  margin: 93px auto 0;
  @media ${device.tablet} {
    max-width: 768px;
    padding: 0 40px;
    display: flex;
    align-items: flex-start;
  }
  @media ${device.mobile} {
    padding: 0;
    margin-left: -6px;
    margin-right: -6px;
  }
`;
