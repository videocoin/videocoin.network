import React from 'react';
import logo from './logo.svg';
import logoDark from './logo_dark.svg';

const Logo = ({ light, isOpen }: { light?: boolean; isOpen: boolean }) => (
  <img src={isOpen ? logo : light ? logoDark : logo} alt="Videocoin" />
);

export default Logo;
