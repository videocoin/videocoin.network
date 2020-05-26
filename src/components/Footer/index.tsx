import React from 'react';
import { BottomBar, Copyright, Link, Links, MiddleBar, TopBar } from './styles';
import Social from 'components/Social';
import Container from 'styles/Container';
import Logo from 'components/Logo';

const Footer = () => {
  return (
    <footer>
      <Container>
        <TopBar>
          <Social />
        </TopBar>
      </Container>
      <MiddleBar>
        <Logo />
        <div>
          <a href="mailto:support@videocoin.network">Contact Support</a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://videocoin.io"
          >
            VideoCoin Token
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://liveplanet.net"
          >
            Live Planet
          </a>
        </div>
      </MiddleBar>
      <Container>
        <BottomBar>
          <Copyright>© 2020 Live Planet, Inc. All Rights Reserved.</Copyright>
          <Links>
            <Link href="https://storage.googleapis.com/videocoin-network-policies/VideoCoinNetworkPrivacyPolicy.html">
              VideoCoin Network Privacy Policy
            </Link>
            <Link href="https://storage.googleapis.com/videocoin-network-policies/VideoCoinNetworkTermsofService.html">
              VideoCoin Network Terms of Use
            </Link>
            <Link href="https://storage.googleapis.com/videocoin-network-policies/VideoCoinNetworkWebsiteTermsofUse.html">
              VideoCoin Network Website Terms of use
            </Link>
            <Link href="https://storage.googleapis.com/videocoin-network-policies/VideoCoinNetworkWorkerTermsofService.html">
              VideoCoin Network Worker Terms of Service
            </Link>
            <Link href="https://storage.googleapis.com/videocoin-network-policies/VideoCoinNetworkDelegatorTermsofService.html">
              VideoCoin Network Delegator Terms of Service
            </Link>
          </Links>
        </BottomBar>
      </Container>
    </footer>
  );
};

export default Footer;
