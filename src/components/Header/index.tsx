import React, { useState } from 'react';
import Headroom from 'react-headroom';
import Logo from 'components/Logo';
import SignBlock from 'components/Header/SignBlock';
import Navbar from './Navbar';
import { Root, Logo as LogoLink, MenuBtn } from './styles';
import { useBreakpoint } from 'components/BrealpointProvider';
import IconLogo from 'components/Logo/IconLogo';
import LanguageSwitch from 'components/LanguageSwitch';

const Header = ({ light }: { light?: boolean }) => {
  const [isOpen, setOpen] = useState(false);
  const { laptop, tablet, mobile } = useBreakpoint();
  const toggleMenu = () => setOpen(!isOpen);
  return (
    <Headroom
      disable={isOpen}
      style={{
        zIndex: 2,
        transform: isOpen ? 'none' : 'translate3d(0px, 0px, 0px)',
        background: light ? '#fff' : 'transparent',
      }}
    >
      <Root $light={light}>
        <LogoLink to="/">
          {(laptop && !tablet) || mobile ? (
            <IconLogo width={36} light={light} isOpen={isOpen} />
          ) : (
            <Logo light={light} isOpen={isOpen} />
          )}
        </LogoLink>
        <Navbar light={light} open={isOpen} />
        <LanguageSwitch />
        <SignBlock light={light} />
        <MenuBtn $light={light} $active={isOpen} onClick={toggleMenu} />
      </Root>
    </Headroom>
  );
};

export default Header;
