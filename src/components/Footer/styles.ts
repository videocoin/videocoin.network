import styled from 'styled-components';
import BaseLogo from 'components/Logo';

export const Root = styled.footer`
  text-align: center;
  border-top: 1px solid rgba(255, 255, 255, 0.24);
  margin-top: 56px;
  padding-bottom: 87px;
`;

export const Copyright = styled.div`
  line-height: 2;
  color: #5c4b74;
  margin-bottom: 12px;
  margin-top: 32px;
`;

export const FooterLogo = styled.div`
  margin-top: 150px;
`;

export const Links = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -9px;
  justify-content: center;
`;

export const Link = styled.a.attrs(() => ({
  rel: 'noopener noreferrer',
  target: '_blank',
}))`
  font-weight: 500;
  text-decoration: none;
  color: #fff;
  margin: 0 9px 9px;
`;
