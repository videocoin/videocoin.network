import React from 'react';
import logoDark from './logo_dark.svg';
import logo from './logo.svg';

const Logo = ({ light }) => (
  <img width={185} src={light ? logo : logoDark} alt="Videocoin" />
);

export default Logo;
