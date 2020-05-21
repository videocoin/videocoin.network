import React from 'react';
import { Root, Copyright, Link, Links, FooterLogo } from './styles';
import Social from 'components/Social';
import Container from 'styles/Container';
import Logo from 'components/Logo';

const Footer = () => {
  return (
    <Container>
      <Root>
        <Social />
        <FooterLogo>
          <Logo />
        </FooterLogo>
        <Copyright>© 2020 Live Planet, Inc. All Rights Reserved.</Copyright>
        <Links>
          <Link href="https://www.videocoin.io/privacypolicy">
            VideoCoin Network Privacy Policy
          </Link>
          <Link href="https://www.videocoin.io/terms">
            VideoCoin Network Terms and Conditions
          </Link>
        </Links>
      </Root>
    </Container>
  );
};

export default Footer;
