import React from 'react';
import bg from './assets/bg.svg';
import bgMd from './assets/bg_md.svg';
import bgSm from './assets/bg_sm.svg';
import IconLogo from 'components/Logo/IconLogo';
import { Button, MarketingButton, Typography } from 'ui-kit';
import Container from 'styles/Container';
import { Title, Bg, Wrapper, Btns, Footer, SLogo } from './styles';
import { Link } from 'gatsby';
import { useTranslation, Trans } from 'react-i18next';

const Hero = () => {
  const handleClick = () => {
    typeof window !== 'undefined' &&
      window.gtag('event', 'click', {
        send_to: 'AW-766963740/vD8-CLi05tUBEJzg2-0C',
      });
  };
  const { t } = useTranslation();
  return (
    <>
      <Bg>
        <picture>
          <source media="(max-width: 767px)" srcSet={bgSm} />
          <source media="(max-width: 1024px)" srcSet={bgMd} />
          <img src={bg} alt="" />
        </picture>
      </Bg>
      <Container>
        <Wrapper>
          <SLogo>
            <IconLogo width={72} />
          </SLogo>
          <Title type="display2" theme="white" align="center">
            {t('Innovate')} <br />
            {t('Video Infrastructure')}
          </Title>
          <Typography type="subtitleThin">
            {t(
              'The VideoCoin Network is a powerful API-first, decentralized video platform that utilizes untapped computing resources to save you money'
            )}
          </Typography>
          <Btns>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://console.videocoin.network/sign-up?role=publisher"
              onClick={handleClick}
            >
              <Button>{t('Create Account')}</Button>
            </a>
            <Link to="/developers">
              <MarketingButton theme="link-secondary">
                {t('Learn More')}
              </MarketingButton>
            </Link>
          </Btns>
          <Footer type="caption">
            <Trans
              t={t}
              i18nKey="Sign up now and get $10 in free credit to try VideoCoin Network"
            >
              Sign up now and <strong>get $10 in free credit</strong> to try
              VideoCoin Network.
            </Trans>
          </Footer>
        </Wrapper>
      </Container>
    </>
  );
};

export default Hero;
