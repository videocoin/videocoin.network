import React, { useState } from 'react';
import Headroom from 'react-headroom';
import Logo from 'components/Logo';
import SignBlock from 'components/Header/SignBlock';
import Navbar from './Navbar';
import { Root, Logo as LogoLink, MenuBtn } from './styles';
import burgerIcon from 'icons/burger.svg';

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const toggleMenu = () => setOpen(!isOpen);
  return (
    <Headroom
      disable={isOpen}
      style={{
        zIndex: 1000,
        transform: isOpen ? 'none' : 'translate3d(0px, 0px, 0px)',
        background: '#fff',
      }}
    >
      <Root>
        <LogoLink to="/">
          <Logo />
        </LogoLink>
        <Navbar open={isOpen} />
        <SignBlock />
        <MenuBtn $active={isOpen} onClick={toggleMenu}>
          <img src={burgerIcon} alt="" />
        </MenuBtn>
      </Root>
    </Headroom>
  );
};

export default Header;
