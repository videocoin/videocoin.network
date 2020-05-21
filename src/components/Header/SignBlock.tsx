import React from 'react';
import { Link } from 'gatsby';
import { Button, Typography } from 'ui-kit';
import { SignWrapper } from './styles';
import { withPrefix } from 'gatsby';
import { globalHistory as history } from '@reach/router';

const SignBlock = () => {
  const { location } = history;
  const isSignupPage = location.pathname === withPrefix('/signup');
  return (
    <SignWrapper>
      <a
        href="https://studio.videocoin.network/sign-in"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Typography type="smallBodyThin">Login</Typography>
      </a>
      {!isSignupPage && (
        <Link to="/signup?role=miner">
          <Button>Create Account</Button>
        </Link>
      )}
    </SignWrapper>
  );
};

export default SignBlock;
