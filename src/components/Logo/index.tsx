import React from 'react';
import logoDark from './logo_dark.svg';
import logo from './logo.svg';

const Logo = ({ light, width = 185 }: { light?: boolean; width?: number }) => (
  <img width={width} src={light ? logo : logoDark} alt="Videocoin" />
);

export default Logo;
