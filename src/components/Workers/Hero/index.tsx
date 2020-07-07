import React from 'react';
import { Root, Inner, Left, Right, Subtitle, Title, Bg } from './styles';
import { MarketingButton } from 'ui-kit';
import Container from 'styles/Container';
import bgImg from './assets/bg.svg';
import bgMd from './assets/bg_md.svg';
import bgSm from './assets/bg_md.svg';
import { useTranslation, Trans } from 'react-i18next';

const WorkersHero = () => {
  const { t } = useTranslation('workers');
  return (
    <Root>
      <Bg>
        <picture>
          <source media="(max-width: 767px)" srcSet={bgSm} />
          <source media="(max-width: 1024px)" srcSet={bgMd} />
          <img src={bgImg} alt="" />
        </picture>
      </Bg>
      <Container>
        <Inner>
          <Left />
          <Right>
            <Subtitle type="subtitleCaps">
              <Trans t={t} i18nKey="Work on VideoCoin Network">
                <span>Work</span> on VideoCoin Network
              </Trans>
            </Subtitle>
            <Title type="display3" theme="white">
              <Trans
                t={t}
                i18nKey="Dedicate your unused compute power and earn cash"
              >
                Dedicate your unused compute power and <span>earn cash</span>
              </Trans>
            </Title>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://console.videocoin.network/sign-up?role=miner"
            >
              <MarketingButton>{t('Get Started')}</MarketingButton>
            </a>
          </Right>
        </Inner>
      </Container>
    </Root>
  );
};

export default WorkersHero;
