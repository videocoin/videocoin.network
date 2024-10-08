import styled from 'styled-components';
import { Link } from 'gatsby';
import { device } from '../../queries';
import Colors from 'styles/Colors';

export const Root = styled.header<{ isCollapsed: boolean }>`
  position: sticky;
  top: 0;
  z-index: 1000;
  background: #fff;
  width: 100%;
  transition: padding 0.3s ease-in-out;
  padding: ${({ isCollapsed }) => (isCollapsed ? '8px 40px' : '23px 40px')};
  & > div {
    margin: 0 auto;
    max-width: 1376px;
    display: flex;
    align-items: center;
  }
  @media ${device.tablet} {
    padding: 23px 28px;
    padding: ${({ isCollapsed }) => (isCollapsed ? '2px 28px' : '23px 28px')};
  }
`;

export const SubPopup = styled.ul`
  position: absolute;
  background-color: #eee3ff;
  border-radius: 8px;
  padding: 20px 16px;
  display: flex;
  flex-direction: column;
  opacity: 0;
  visibility: hidden;
  transition: 0.15s ease-in-out;
  top: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%);
  li {
    text-align: center;
    &:not(:last-child) {
      margin-bottom: 16px;
    }
  }
  a {
    color: ${Colors.grey30};
    &::before {
      display: none !important;
    }
    &:hover {
      opacity: 1;
    }
  }
  @media (max-width: 1024px) {
    display: none;
  }
`;

export const NavList = styled.ul`
  display: flex;
  white-space: nowrap;
  & > li {
    position: relative;
    margin: 0 12px;
    &:hover {
      opacity: 1;
      ${SubPopup} {
        opacity: 1;
        visibility: visible;
      }
    }
    & > a {
      &:hover {
        opacity: 1;
      }
    }
  }
  @media ${device.tablet} {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Logo = styled(Link)`
  position: relative;
  z-index: 1002;
  @media (max-width: 768px) {
    img {
      width: 170px;
    }
  }
`;

export const NavLink = styled(Link)`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  text-decoration: none;
  position: relative;
  transition: 0.15s ease-in-out;

  &.active {
    color: ${Colors.violet50};
    &::before {
      display: block;
    }
  }
  @media ${device.tablet} {
    font-size: 34px;
    letter-spacing: 0.8px;
    line-height: 2;
    font-weight: 300;
  }
`;
export const NavRoot = styled.nav<{ $open: boolean }>`
  margin-left: 23px;
  margin-right: auto;
  @media (max-width: 1510px) {
    position: static;
    transform: none;
  }
  @media ${device.tablet} {
    position: fixed;
    opacity: 0;
    visibility: hidden;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    flex-direction: column;
    backdrop-filter: blur(10px);
    background: ${Colors.white20}cc;
    padding-top: 125px;
    padding-left: 29px;
    margin-left: 0;
    z-index: 1001;
    ${({ $open }) => $open && `visibility: visible; opacity: 1`};
  }
`;
export const SignWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 32px;
  a {
    text-decoration: none;
    &:not(:last-child) {
      margin-right: 32px;
    }
  }
  @media ${device.tablet} {
    margin-left: auto;
  }
  @media ${device.mobile} {
    display: none;
  }
`;

export const MenuBtn = styled.button<{ $active: boolean }>`
  width: 51px;
  height: 51px;
  padding-top: 10px;
  border: none;
  position: relative;
  z-index: 1001;
  margin-left: 24px;
  display: none;
  background: transparent;
  @media ${device.tablet} {
    display: block;
  }
  @media ${device.mobile} {
    margin-left: auto;
  }
`;
