import styled from 'styled-components';
import { device } from '../../queries';

export const TopBar = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.24);
  text-align: center;
  border-top: 1px solid rgba(255, 255, 255, 0.24);
  margin-top: 56px;
`;

export const Copyright = styled.div`
  line-height: 2;
  color: #5c4b74;
  margin-bottom: 12px;
  margin-top: 32px;
`;

export const Links = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -9px;
  justify-content: center;
  white-space: nowrap;
`;

export const Link = styled.a.attrs(() => ({
  rel: 'noopener noreferrer',
  target: '_blank',
}))`
  font-weight: 500;
  text-decoration: none;
  color: #fff;
  margin: 0 9px 9px;
  @media ${device.mobile} {
    font-size: 12px;
  }
`;

export const MiddleBar = styled.div`
  background-color: #290f4d;
  padding: 30px 0;
  margin-top: 48px;
  margin-bottom: 64px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${device.tablet} {
    margin-bottom: 56px;
  }
  & > div {
    margin-top: 16px;
    @media ${device.mobile} {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      justify-content: center;
    }
    a {
      color: rgba(255, 255, 255, 0.76);
      font-weight: 500;
      font-size: 14px;
      letter-spacing: 0.07px;
      line-height: 20px;
      transition: color 0.15s ease-in-out;
      &:not(:last-child) {
        margin-right: 36px;
        @media ${device.mobile} {
          margin-right: 0;
          margin-bottom: 20px;
        }
      }
      &:hover {
        color: #fff;
      }
    }
  }
`;

export const BottomBar = styled.div`
  padding-bottom: 42px;
  text-align: center;
`;
