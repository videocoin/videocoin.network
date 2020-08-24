import styled from 'styled-components';
import { device } from '../../queries';

export const Container = styled.div`
  max-width: 1348px;
  margin: 0 auto;
  display: flex;
  align-items: flex-start;
  padding: 0 24px;
  padding-top: 64px;
`;

export const SidebarWrapper = styled.div`
  width: 300px;
  margin-right: 55px;
  flex-shrink: 0;
  position: sticky;
  margin-top: 165px;
  top: 24px;
  @media ${device.tablet} {
    display: none;
  }
  a {
    cursor: pointer;
    display: block;
    opacity: 0.48;
    &.active {
      opacity: 1;
    }
  }
  a:not(:last-child) {
    margin-bottom: 16px;
  }
`;

export const ExpandButton = styled.button.attrs(() => ({
  type: 'button',
}))`
  width: 56px;
  height: 56px;
  background-color: #7234c8;
  border-radius: 4px;
  flex-shrink: 0;
  border: none;
  padding-top: 5px;
  margin-left: 47px;
  margin-top: 12px;
`;

export const AppLink = styled.a.attrs(() => ({
  target: '_blank',
  rel: 'noopener noreferrer',
}))`
  background-color: #fff;
  height: 48px;
  box-shadow: 0 12px 28px 0 rgba(12, 4, 23, 0.74);
  border-radius: 28px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 36px;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 0.07px;
  color: #0c0417;
  &:not(:last-child) {
    margin-right: 24px;
  }
  svg {
    margin-right: 16px;
    fill: #1c0937;
  }
`;

export const DownloadLinks = styled.div`
  @media ${device.mobile} {
    display: flex;
    flex-direction: column;
    align-items: center;
    a {
      margin: 0 0 24px !important;
    }
  }
`;
