import React from 'react';
import { Link } from 'gatsby';
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
          href="https://studio.videocoin.network/sign-in"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Typography type="smallBodyThin">Login</Typography>
        </a>
      )}
      {!isSignupPage && (
        <Link to="/signup?role=miner">
          <Button size={laptop ? 'sm' : 'md'}>Create Account</Button>
        </Link>
      )}
    </SignWrapper>
  );
};

export default SignBlock;
