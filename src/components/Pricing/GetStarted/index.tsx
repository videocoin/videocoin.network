import React from 'react';
import { Root, Btns } from './styles';
import { MarketingButton, Typography } from 'ui-kit';
import { useTranslation } from 'react-i18next';

const GetStarted = () => {
  const { t } = useTranslation('pricing');
  const handleClick = () => {
    typeof window !== 'undefined' &&
      window.gtag('event', 'click', {
        send_to: 'AW-766963740/vD8-CLi05tUBEJzg2-0C',
      });
  };
  return (
    <Root>
      <Typography type="display3">{t('Get Started')}</Typography>
      <Typography type="subtitleThin" opacity="drift">
        {t(
          'Create an account and well start you off with a $10 credit to get started'
        )}
      </Typography>
      <Btns>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://console.videocoin.network/sign-up?role=publisher"
          onClick={handleClick}
        >
          <MarketingButton>{t('Sign up for free')}</MarketingButton>
        </a>
        <a href="mailto:support@videocoin.network">
          <MarketingButton theme="secondary">{t('Talk to us')}</MarketingButton>
        </a>
      </Btns>
    </Root>
  );
};

export default GetStarted;
