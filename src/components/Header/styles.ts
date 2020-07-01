import styled from 'styled-components';
import { Link } from 'gatsby';
import { device } from '../../queries';

export const Root = styled.header`
  padding: 22px 64px;
  display: flex;
  align-items: center;
  position: relative;
  z-index: 2;
  @media ${device.tablet} {
    padding: 15px 24px;
  }
  &::before {
    content: '';
    display: block;
    height: 152px;
    left: 0;
    z-index: -1;
    top: 0;
    width: 100%;
    position: absolute;
    pointer-events: none;
    background: linear-gradient(180deg, #1a0c2d 0%, rgba(25, 12, 43, 0) 100%);
    @media ${device.tablet} {
      height: 120px;
    }
  }
`;

export const NavRoot = styled.nav<{ $open: boolean }>`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  @media (max-width: 1510px) {
    position: static;
    margin-left: 36px;
    transform: none;
  }
  @media ${device.tablet} {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    opacity: 0;
    visibility: hidden;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    flex-direction: column;
    z-index: 1000;
    backdrop-filter: blur(5px);
    background-image: radial-gradient(circle at 100% 100%, #572577, #4b3aa6);
    padding-top: 85px;
    padding-left: 29px;
    margin-left: 0;
    z-index: 1001;
    ${({ $open }) => $open && `visibility: visible; opacity: 1`};
  }
`;
export const SubPopup = styled.ul`
  position: absolute;
  background-color: #eee3ff;
  border-radius: 8px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  opacity: 0;
  visibility: hidden;
  transition: 0.15s ease-in-out;
  li {
    &:not(:last-child) {
      margin-bottom: 12px;
    }
  }
  a {
    color: #0c0417;
    opacity: 0.86;
    &::before {
      display: none !important;
    }
    &:hover {
      opacity: 1;
    }
  }
`;

export const NavList = styled.ul`
  display: flex;
  white-space: nowrap;
  & > li {
    position: relative;
    &:not(:last-child) {
      margin-right: 32px;
    }
    &:hover {
      opacity: 1;
      ${SubPopup} {
        opacity: 1;
        visibility: visible;
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
  img {
    @media ${device.tablet} {
      width: 172px;
    }
  }
`;

export const NavLink = styled(Link)`
  font-weight: 500;
  opacity: 0.48;
  line-height: 1.5;
  color: #fff;
  text-decoration: none;
  position: relative;
  transition: 0.15s ease-in-out;

  &.active {
    opacity: 1;
    &::before {
      display: block;
    }
  }
  &::before {
    content: '';
    display: none;
    position: absolute;
    width: 100%;
    height: 4px;
    background-color: #d3b7fb;
    border-radius: 2px;
    top: -24px;
    left: 0;
    @media ${device.tablet} {
      display: none !important;
    }
  }
  @media ${device.tablet} {
    font-size: 34px;
    letter-spacing: 0.8px;
    line-height: 2;
    font-weight: 300;
  }
`;

export const SignWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 35px;
  a {
    text-decoration: none;
    &:not(:last-child) {
      margin-right: 32px;
    }
  }
  @media ${device.tablet} {
    display: none;
  }
`;

export const MenuBtn = styled.button<{ $active: boolean }>`
  width: 51px;
  height: 41px;
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  position: relative;
  z-index: 1001;
  margin-left: auto;
  display: none;
  &:before {
    content: '';
    width: 23px;
    height: 23px;
    border: 2px solid #fff;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    transition: 0.15s ease-in-out;
    background: ${({ $active }) => $active && '#fff'};
  }
  @media ${device.tablet} {
    display: block;
  }
`;
