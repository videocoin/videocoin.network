import React from 'react';
import logo from './iconLogo.svg';

const IconLogo = ({ width }: { width: number }) => (
  <img src={logo} alt="Videocoin" width={width} height={width} />
);

export default IconLogo;
