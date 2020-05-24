import React from 'react';
import { Root, Btns } from './styles';
import { MarketingButton, Typography } from 'ui-kit';
import { Link } from 'gatsby';

const GetStarted = () => {
  return (
    <Root>
      <Typography type="display3">Get Started</Typography>
      <Typography type="subtitleThin" opacity="drift">
        Create an account and we’ll start you off with a $10 credit to get
        started.
      </Typography>
      <Btns>
        <Link to="/signup?role=publisher">
          <MarketingButton>Sign up for free</MarketingButton>
        </Link>
        <MarketingButton theme="secondary">Talk to us</MarketingButton>
      </Btns>
    </Root>
  );
};

export default GetStarted;
