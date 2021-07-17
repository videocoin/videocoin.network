import React from 'react';
import { SignWrapper } from './styles';
import { globalHistory as history } from '@reach/router';
import { useBreakpoint } from 'components/BrealpointProvider';
import Text from 'components/UI/Text';
import Button from 'components/UI/Button';

const SignBlock = () => {
  const { location } = history;
  const isStakingPage = [
    '/stakers',
    '/genesis-staking',
    '/cash-staking',
  ].includes(location.pathname);
  const { tablet } = useBreakpoint();
  const renderLoginBtn = () => {
    if (isStakingPage || tablet) return null;
    return (
      <a
        href="https://console.videocoin.network/sign-in"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Text variant="smallBody">Login</Text>
      </a>
    );
  };
  const handleClick = () => {
    typeof window !== 'undefined' &&
      // @ts-ignore
      window.gtag('event', 'click', {
        send_to: 'AW-766963740/vD8-CLi05tUBEJzg2-0C',
      });
  };
  const renderCreateBtn = () => {
    if (isStakingPage) {
      return (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://staking.videocoin.network"
        >
          <Button hideArrow>Connect wallet</Button>
        </a>
      );
    }
    return (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://console.videocoin.network/sign-up?role=publisher"
        onClick={handleClick}
      >
        <Button hideArrow>Create Account</Button>
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
