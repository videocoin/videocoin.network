import React from 'react';
import logo from './iconLogo.svg';
import logoDark from './iconLogo_dark.svg';

const IconLogo = ({
  width,
  light,
  isOpen,
}: {
  width: number;
  light?: boolean;
  isOpen: boolean;
}) => (
  <img
    src={isOpen ? logo : light ? logoDark : logo}
    alt="Videocoin"
    width={width}
    height={width}
  />
);

export default IconLogo;
