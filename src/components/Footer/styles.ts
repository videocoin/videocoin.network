import styled from 'styled-components';
import { device } from '../../queries';
import Colors from 'styles/Colors';

export const Root = styled.footer`
  background: #1c0937;
`;

export const Inner = styled.div`
  display: flex;
  padding: 40px 105px 45px;
  align-items: flex-start;
  @media (max-width: 1024px) {
    padding-left: 40px;
    padding-right: 40px;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    padding-top: 48px;
    padding-left: 26px;
    padding-right: 26px;
  }
  & > img {
    margin-right: 86px;
    margin-top: -8px;
    @media (max-width: 1024px) {
      width: 148px;
      margin-right: 32px;
    }
    @media (max-width: 768px) {
      width: 222px;
      margin-right: 0;
      margin-bottom: 16px;
    }
  }
  & > div {
    &:not(:last-child) {
      margin-right: 104px;
      @media (max-width: 1024px) {
        min-width: 138px;
        margin-right: 45px;
      }
    }
    &:nth-child(3) {
      margin-right: 66px;
    }
  }
`;

export const Copyright = styled.div`
  color: ${Colors.white40};
  opacity: 0.72;
  text-align: center;
  padding: 16px 0 20px;
  background: ${Colors.violet80};
  line-height: 32px;
  & > div:last-of-type {
    opacity: 0.5;
  }
`;

export const Links = styled.div`
  display: flex;
  flex-direction: column;
  white-space: nowrap;
  @media (max-width: 1024px) {
    white-space: normal;
  }
  a {
    font-weight: 500;
    text-decoration: none;
    color: ${Colors.violet10};
    margin-bottom: 8px;
    font-size: 16px;
    line-height: 2;
    transition: 0.15s ease-in-out;
    @media ${device.mobile} {
      font-size: 12px;
    }
    &:hover {
      color: #fff;
    }
  }
`;

export const Link = styled.a.attrs(() => ({
  rel: 'noopener noreferrer',
  target: '_blank',
}))`
  letter-spacing: 0.28px;
  font-weight: 500;
  text-decoration: none;
  color: #ffffffb8;
  line-height: 24px;
  font-size: 14px;
  margin-bottom: 12px;
  @media ${device.mobile} {
    font-size: 12px;
  }
`;

export const Title = styled.div<{ $isOpen: boolean }>`
  font-size: 24px;
  font-weight: 600;
  color: ${Colors.violet10};
  line-height: 40px;
  margin-bottom: 17px;
  position: relative;
  &::before {
    display: none;
    position: absolute;
    left: -44px;
    top: 12px;
    content: '';
    background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTBweCIgaGVpZ2h0PSI3cHgiIHZpZXdCb3g9IjAgMCAxMCA3IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPHRpdGxlPmRyb3Bkb3duX2Fycm93X2NvbG9yPC90aXRsZT4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJNb2JpbGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00NC4wMDAwMDAsIC0zMTIxLjAwMDAwMCkiIGZpbGw9IiNFRUUzRkYiPgogICAgICAgICAgICA8ZyBpZD0iRm9vdGVyLUNvcHkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yLjAwMDAwMCwgMjk4Ni4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJJY29ucy9BcnJvd0Rvd24vMTZweCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDMuMDAwMDAwLCAxMzEuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTcuNDE2NjUwOTEsNC44MTY2ODg3MyBDNy43Mzg4MjU3MSw0LjM2NTY0NCA4LjI1NDgyNDc2LDQuMzU2NzU0NjYgOC41ODMzNDkwOSw0LjgxNjY4ODczIEwxMi40MTY2NTA5LDEwLjE4MzMxMTMgQzEyLjczODgyNTcsMTAuNjM0MzU2IDEyLjU0NDMzNTYsMTEgMTIuMDA0NjAyNCwxMSBMMy45OTUzOTc1NywxMSBDMy40NDU2NTQ2NywxMSAzLjI1NDgyNDc2LDEwLjY0MzI0NTMgMy41ODMzNDkwOSwxMC4xODMzMTEzIEw3LjQxNjY1MDkxLDQuODE2Njg4NzMgWiIgaWQ9ImRyb3Bkb3duX2Fycm93X2NvbG9yIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4LjAwMDAwMCwgNy41MDAwMDApIHJvdGF0ZSgxODAuMDAwMDAwKSB0cmFuc2xhdGUoLTguMDAwMDAwLCAtNy41MDAwMDApICI+PC9wYXRoPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=');
    width: 10px;
    height: 7px;
    transform: rotate(${({ $isOpen }) => ($isOpen ? 180 : 0)}deg);
    @media (max-width: 768px) {
      display: block;
    }
  }
`;
