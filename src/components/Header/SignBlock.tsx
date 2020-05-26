import React from 'react';
import { Button, Typography } from 'ui-kit';
import { SignWrapper } from './styles';
import { globalHistory as history } from '@reach/router';
import { useBreakpoint } from 'components/BrealpointProvider';

const SignBlock = () => {
  const { location } = history;
  const isSignupPage = location.pathname.includes('/signup');
  const { laptop } = useBreakpoint();
  return (
    <SignWrapper>
      {!laptop && (
        <a
          href="https://console.videocoin.network/sign-in"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Typography type="smallBodyThin">Login</Typography>
        </a>
      )}
      {!isSignupPage && (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://console.videocoin.network/sign-up?role=publisher"
        >
          <Button size={laptop ? 'sm' : 'md'}>Create Account</Button>
        </a>
      )}
    </SignWrapper>
  );
};

export default SignBlock;
