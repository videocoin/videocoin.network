import styled from 'styled-components';
import { Link } from 'gatsby';
import { device } from '../../queries';

export const Root = styled.header`
  padding: 22px 64px;
  display: flex;
  align-items: center;
  position: relative;
  z-index: 1;
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
  }
`;

export const NavRoot = styled.nav`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  @media ${device.laptop} {
    position: static;
    margin-left: 36px;
    transform: none;
  }
  @media ${device.tablet} {
    display: none;
  }
`;

export const NavList = styled.ul`
  display: flex;
  white-space: nowrap;
`;

export const Logo = styled(Link)`
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
  &:not(:last-child) {
    margin-right: 32px;
  }
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
  }
`;

export const SignWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
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
