import React, { useEffect, useRef } from 'react';
import Section from 'components/Section';
import { Title } from './styles';
import { Typography } from 'ui-kit';
import lottie from 'lottie-web';
import { animationData } from './animationData';
import { useTranslation } from 'react-i18next';

const Inflation = () => {
  const { t } = useTranslation('rewards');
  const animationEl = useRef(null);
  const animation = useRef(null);
  useEffect(() => {
    if (animationEl.current && !animation.current) {
      animation.current = lottie.loadAnimation({
        container: animationEl.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData,
      });
    }
  }, [animationEl]);
  return (
    <Section>
      <div>
        <div ref={animationEl} />
      </div>
      <div>
        <Title>{t('No Inflation Means Real Rewards')}</Title>
        <Typography type="bodyThin">
          {t(
            'VideoCoin Network rewards workers and delegators up to 80% of the price paid by publishers in cash rather than from the minting of new tokens to pay rewards'
          )}
          <br />
          <br />
          {t(
            'Other projects inflation-based reward systems continually add supply in to the market assuming demand will continuously increase at the same rate in order to keep the value of the token stable'
          )}
          {t(
            'However if supply is added while demand remains static their token value falls'
          )}
        </Typography>
      </div>
    </Section>
  );
};

export default Inflation;
