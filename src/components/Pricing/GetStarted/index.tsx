import React from 'react';
import { Root, Btns } from './styles';
import { MarketingButton, Typography } from 'ui-kit';

const GetStarted = () => {
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
