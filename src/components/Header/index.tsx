import React from 'react';
import Headroom from 'react-headroom';
import Logo from 'components/Logo';
import SignBlock from 'components/Header/SignBlock';
import Navbar from './Navbar';
import { Root, Logo as LogoLink } from './styles';
import { useBreakpoint } from 'components/BrealpointProvider';
import IconLogo from 'components/Logo/IconLogo';

const Header = () => {
  const { laptop, tablet } = useBreakpoint();
  return (
    <Headroom wrapperStyle={{ marginBottom: -92 }}>
      <Root>
        <LogoLink to="/">
          {laptop && !tablet ? <IconLogo width={36} /> : <Logo />}
        </LogoLink>
        <Navbar />
        <SignBlock />
      </Root>
    </Headroom>
  );
};

export default Header;
