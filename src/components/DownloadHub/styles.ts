import styled from 'styled-components';
import { device } from '../../queries';

export const Container = styled.div`
  max-width: 1348px;
  margin: 0 auto;
  display: flex;
  align-items: flex-start;
  padding: 0 24px;
`;

export const SidebarWrapper = styled.div`
  width: 300px;
  margin-right: 55px;
  flex-shrink: 0;
  position: sticky;
  margin-top: 10px;
  top: 150px;
  @media ${device.tablet} {
    display: none;
  }
  a {
    cursor: pointer;
    display: flex;
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
  &:not(:last-child) {
    margin-right: 24px;
  }
  img {
    margin-right: 16px;
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

export const ExternalLink = styled.a.attrs(() => ({
  target: '_blank',
  rel: 'noopener noreferrer',
}))`
  display: flex;
  align-items: center;
  opacity: 1 !important;
  padding: 12px 0;
  div {
    margin-left: 16px;
    font-size: 14px;
    font-weight: 500;
  }
`;
