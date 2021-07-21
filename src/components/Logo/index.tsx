import React from 'react';
import logoDark from './logo_dark.svg';
import logo from './logo.svg';

const Logo = ({
  light,
  width = 185,
  height = 63,
}: {
  light?: boolean;
  width?: number;
  height?: number;
}) => (
  <img
    width={width}
    height={height}
    src={light ? logo : logoDark}
    alt="Videocoin"
  />
);

export default Logo;
