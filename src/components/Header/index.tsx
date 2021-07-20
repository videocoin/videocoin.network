import React, { useState } from 'react';
import Headroom from 'react-headroom';
import Logo from 'components/Logo';
import SignBlock from 'components/Header/SignBlock';
import Navbar from './Navbar';
import { Root, Logo as LogoLink, MenuBtn } from './styles';
import burgerIcon from 'icons/burger.svg';
import { useLockBodyScroll, useToggle } from 'react-use';
const Header = () => {
  const [isOpen, toggleOpen] = useToggle(false);
  useLockBodyScroll(isOpen);
  return (
    <Headroom
      // disable={isOpen}
      style={{
        zIndex: 1000,
        background: '#fff',
      }}
    >
      <Root isOpen={isOpen}>
        <LogoLink to="/">
          <Logo />
        </LogoLink>
        <Navbar open={isOpen} />
        <SignBlock />
        <MenuBtn $active={isOpen} onClick={toggleOpen}>
          <img src={burgerIcon} alt="" />
        </MenuBtn>
      </Root>
    </Headroom>
  );
};

export default Header;
