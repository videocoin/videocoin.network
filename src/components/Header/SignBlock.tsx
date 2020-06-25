import React from 'react';
import { Button, Typography } from 'ui-kit';
import { SignWrapper } from './styles';
import { globalHistory as history } from '@reach/router';
import { useBreakpoint } from 'components/BrealpointProvider';

const SignBlock = () => {
  const { location } = history;
  const isGenesisPage = location.pathname.includes('/genesis-staking');
  const { laptop } = useBreakpoint();
  const renderLoginBtn = () => {
    if (isGenesisPage || laptop) return null;
    return (
      <a
        href="https://console.videocoin.network/sign-in"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Typography type="smallBodyThin">Login</Typography>
      </a>
    );
  };
  const renderCreateBtn = () => {
    if (isGenesisPage) {
      return (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://staking.videocoin.network"
        >
          <Button size={laptop ? 'sm' : 'md'}>Connect wallet</Button>
        </a>
      );
    }
    return (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://console.videocoin.network/sign-up?role=publisher"
      >
        <Button size={laptop ? 'sm' : 'md'}>Create Account</Button>
      </a>
    );
  };
  return (
    <SignWrapper>
      {renderLoginBtn()}
      {renderCreateBtn()}
    </SignWrapper>
  );
};

export default SignBlock;
