import React from 'react';
import { Button, Typography } from 'ui-kit';
import VioletBtn from 'components/UI/Button';
import { SignWrapper } from './styles';
import { globalHistory as history } from '@reach/router';
import { useBreakpoint } from 'components/BrealpointProvider';
import { useTranslation } from 'react-i18next';

const SignBlock = ({ light }: { light?: boolean }) => {
  const { t } = useTranslation();
  const { location } = history;
  const isStakingPage = [
    '/stakers',
    '/genesis-staking',
    '/worker-staking',
  ].includes(location.pathname);
  const { laptop } = useBreakpoint();
  const renderLoginBtn = () => {
    if (isStakingPage || laptop) return null;
    return (
      <a
        href="https://console.videocoin.network/sign-in"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Typography
          theme={light ? 'dark' : 'light'}
          weight="600"
          type="smallBodyThin"
        >
          {t('Login')}
        </Typography>
      </a>
    );
  };
  const handleClick = () => {
    typeof window !== 'undefined' &&
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
          <Button size={laptop ? 'sm' : 'md'}>Connect wallet</Button>
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
        {light ? (
          <VioletBtn>{t('Create Account')}</VioletBtn>
        ) : (
          <Button size={laptop ? 'sm' : 'md'}>{t('Create Account')}</Button>
        )}
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
