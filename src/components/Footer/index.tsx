import React from 'react';
import { Root, Copyright, Link, Links, Inner } from './styles';
import { Link as RouteLink } from 'gatsby';
import Social from 'components/Social';
import Logo from 'components/Logo';
import Menu from 'components/Footer/Menu';
import Container from 'styles/Container';
import Text from 'components/UI/Text';

const Footer = () => {
  return (
    <Root>
      <Container>
        <Inner>
          <Logo light width={248} />
          <Menu title="Connect">
            <Social />
          </Menu>
          <Menu title="Resources">
            <Links>
              <Link href="https://forum.videocoin.network/">
                Community Forum
              </Link>
              <Link href="mailto:support@videocoin.network">
                Contact Support
              </Link>
              <RouteLink to="/download-hub">Downloads</RouteLink>
              <Link href="https://github.com/videocoin">Github</Link>
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
      </Container>
      <Copyright>
        <Text variant="body">
          © 2021 Live Planet, Inc. All rights reserved.
        </Text>
        <Text variant="caption">
          This site and its services are operated under agreement with the
          VideoCoin Development Association Ltd., issuer of the VID token.
        </Text>
      </Copyright>
    </Root>
  );
};

export default Footer;
