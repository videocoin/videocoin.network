import styled from 'styled-components';
import { Link } from 'gatsby';

export const Root = styled.header`
  padding: 22px 64px;
  display: flex;
  align-items: center;
  position: relative;
  z-index: 1;
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
  padding: 0 50px;
  margin-left: 30px;
  margin-right: auto;
`;

export const NavList = styled.ul`
  display: flex;
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
  a {
    margin-right: 32px;
    text-decoration: none;
  }
`;
