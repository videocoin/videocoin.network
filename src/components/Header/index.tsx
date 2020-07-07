import React, { useState } from 'react';
import Headroom from 'react-headroom';
import Logo from 'components/Logo';
import SignBlock from 'components/Header/SignBlock';
import Navbar from './Navbar';
import { Root, Logo as LogoLink, MenuBtn } from './styles';
import { useBreakpoint } from 'components/BrealpointProvider';
import IconLogo from 'components/Logo/IconLogo';
import LanguageSwitch from 'components/LanguageSwitch';

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const { laptop, tablet, mobile } = useBreakpoint();
  const toggleMenu = () => setOpen(!isOpen);
  console.log((laptop || mobile) && !tablet);
  console.log(tablet);
  return (
    <Headroom
      disable={isOpen}
      // wrapperStyle={{ marginBottom: -92 }}
      style={{
        zIndex: 2,
        transform: isOpen ? 'none' : 'translate3d(0px, 0px, 0px)',
      }}
    >
      <Root>
        <LogoLink to="/">
          {(laptop && !tablet) || mobile ? <IconLogo width={36} /> : <Logo />}
        </LogoLink>
        <Navbar open={isOpen} />
        <LanguageSwitch />
        <SignBlock />
        <MenuBtn $active={isOpen} onClick={toggleMenu} />
      </Root>
    </Headroom>
  );
};

export default Header;
