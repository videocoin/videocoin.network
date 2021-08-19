import React, { useRef, useState } from 'react';
import Logo from 'components/Logo';
import SignBlock from 'components/Header/SignBlock';
import Navbar from './Navbar';
import { Root, Logo as LogoLink, MenuBtn } from './styles';
import burgerIcon from 'icons/burger.svg';
import { useLockBodyScroll, useMount, useToggle } from 'react-use';
import debounce from 'lodash.debounce';

const Header = () => {
  const [isOpen, toggleOpen] = useToggle(false);
  const [isCollapsed, setCollapsed] = useState(false);
  useLockBodyScroll(isOpen);
  const scheduledAnimationFrame = useRef(false);

  const readAndUpdatePage = () => {
    setCollapsed(window.scrollY > 300);
    scheduledAnimationFrame.current = false;
  };

  const onScroll = debounce(() => {
    if (scheduledAnimationFrame.current) {
      return;
    }
    scheduledAnimationFrame.current = true;
    requestAnimationFrame(readAndUpdatePage);
  }, 100);

  useMount(() => {
    window.addEventListener('scroll', onScroll);
  });
  console.log(isCollapsed);
  return (
    <Root isCollapsed={isCollapsed}>
      <div>
        <LogoLink to="/">
          <Logo />
        </LogoLink>
        <Navbar open={isOpen} />
        <SignBlock />
        <MenuBtn $active={isOpen} onClick={toggleOpen}>
          <img src={burgerIcon} alt="" />
        </MenuBtn>
      </div>
    </Root>
  );
};

export default Header;
