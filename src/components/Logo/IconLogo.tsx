import React from 'react';
import logo from './iconLogo.svg';
import logoDark from './iconLogo_dark.svg';

const IconLogo = ({ width, isOpen }: { width: number; isOpen: boolean }) => (
  <img
    src={isOpen ? logo : logoDark}
    alt="Videocoin"
    width={width}
    height={width}
  />
);

export default IconLogo;
