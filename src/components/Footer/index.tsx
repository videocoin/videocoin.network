import React from 'react';
import { Root, Copyright, Link, Links, Inner } from './styles';
import { Link as RouteLink } from 'gatsby';
import Social from 'components/Social';
import Logo from 'components/Logo';
import Menu from 'components/Footer/Menu';

const Footer = () => {
  return (
    <Root>
      <Inner>
        <Logo isOpen={false} />
        <Menu title="Connect">
          <Social />
        </Menu>
        <Menu title="Resources">
          <Links>
            <Link href="https://forum.videocoin.network/">Community Forum</Link>
            <Link href="mailto:support@videocoin.network">Contact Support</Link>
            <RouteLink to="/download-hub">Downloads</RouteLink>
            <Link href="https://github.com/videocoin">Githun</Link>
            <Link href="https://videocoin.io">Token</Link>
            <Link href="https://liveplanet.net">About Live Planet</Link>
          </Links>
        </Menu>
        <Menu title="Legal">
          <Links>
            <Link href="https://storage.googleapis.com/videocoin-network-policies/VideoCoinNetworkPrivacyPolicy.html">
              Privacy Policy
            </Link>
            <Link href="https://storage.googleapis.com/videocoin-network-policies/VideoCoinNetworkTermsofService.html">
              Terms of Service
            </Link>
            <Link href="https://storage.googleapis.com/videocoin-network-policies/VideoCoinNetworkWebsiteTermsofUse.html">
              Website Terms of Use
            </Link>
            <Link href="https://storage.googleapis.com/videocoin-network-policies/VideoCoinNetworkWorkerTermsofService.html">
              Worker Terms of Service
            </Link>
            <Link href="https://storage.googleapis.com/videocoin-network-policies/VideoCoinNetworkDelegatorTermsofService.html">
              Delegator Terms of Service
            </Link>
          </Links>
        </Menu>
      </Inner>
      <Copyright>© 2020 Live Planet Inc.</Copyright>
    </Root>
  );
};

export default Footer;
