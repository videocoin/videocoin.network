import React from 'react';
import {
  Root,
  Inner,
  PriceCard,
  PriceCardValue,
  PriceCardFeatures,
  Right,
  Text,
} from './styles';
import { MarketingButton, Typography } from 'ui-kit';
import Container from 'styles/Container';
import { useTranslation } from 'react-i18next';

const PricingHero = () => {
  const { t } = useTranslation('pricing');
  const handleClick = () => {
    typeof window !== 'undefined' &&
      window.gtag('event', 'click', {
        send_to: 'AW-766963740/vD8-CLi05tUBEJzg2-0C',
      });
  };
  return (
    <Root>
      <Container>
        <Inner>
          <PriceCard>
            <PriceCardValue>
              <Typography type="display4" theme="dark">
                $0.025
              </Typography>
              <Typography type="smallTitle" theme="dark" opacity="medium">
                {t('per minute')}
              </Typography>
            </PriceCardValue>
            <PriceCardFeatures>
              <li>{t('Video Transcoding')}</li>
              <li>{t('Livestreaming')}</li>
              <li>{t('per profile')}</li>
            </PriceCardFeatures>
            <Typography type="caption" align="center">
              * {t('Pricing subject to change')}
            </Typography>
          </PriceCard>
          <Right>
            <Text>
              <Typography type="display2" theme="white">
                {t('Start Today')}
              </Typography>
              <Typography type="subtitleThin" opacity="drift">
                {t(
                  'Pay one low price whether you are transcoding video or streaming live video'
                )}
              </Typography>
            </Text>
            <div>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://console.videocoin.network/sign-up?role=publisher"
                onClick={handleClick}
              >
                <MarketingButton>{t('Sign up for free')}</MarketingButton>
              </a>
              <a href="mailto:support@videocoin.network">
                <MarketingButton theme="link-secondary">
                  {t('Have Custom Requirements')}
                </MarketingButton>
              </a>
            </div>
          </Right>
        </Inner>
      </Container>
    </Root>
  );
};

export default PricingHero;
