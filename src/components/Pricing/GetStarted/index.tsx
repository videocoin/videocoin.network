import React from 'react';
import { Root, Btns } from './styles';
import { MarketingButton, Typography } from 'ui-kit';

const GetStarted = () => {
  const handleClick = () => {
    typeof window !== 'undefined' &&
      window.gtag('event', 'click', {
        send_to: 'AW-766963740/vD8-CLi05tUBEJzg2-0C',
      });
  };
  return (
    <Root>
      <Typography type="display3">Get Started</Typography>
      <Typography type="subtitleThin" opacity="drift">
        Create an account and we’ll start you off with a $10 credit to get
        started.
      </Typography>
      <Btns>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://console.videocoin.network/sign-up?role=publisher"
          onClick={handleClick}
        >
          <MarketingButton>Sign up for free</MarketingButton>
        </a>
        <a href="mailto:support@videocoin.network">
          <MarketingButton theme="secondary">Talk to us</MarketingButton>
        </a>
      </Btns>
    </Root>
  );
};

export default GetStarted;
