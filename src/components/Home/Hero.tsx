import React from 'react';
import bg from './assets/bg.svg';
import bgMd from './assets/bg_md.svg';
import bgSm from './assets/bg_sm.svg';
import IconLogo from 'components/Logo/IconLogo';
import { Button, MarketingButton, Typography } from 'ui-kit';
import Container from 'styles/Container';
import { Title, Bg, Wrapper, Btns, Footer, SLogo } from './styles';
import { Link } from 'gatsby';

const Hero = () => {
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
            <IconLogo />
          </SLogo>
          <Title type="display2" theme="white" align="center">
            Innovative <br />
            Video Infrastructure
          </Title>
          <Typography type="subtitleThin">
            The VideoCoin Network is a powerful API-first, decentralized video
            platform that utilizes untapped computing resources to save you
            money.
          </Typography>
          <Btns>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://console.videocoin.network/sign-up?role=publisher"
            >
              <Button>Create Account</Button>
            </a>
            <Link to="/developers">
              <MarketingButton theme="link-secondary">Learn more</MarketingButton>
            </Link>
          </Btns>
          <Footer type="caption">
            Sign up now and <strong>get $10 in free credit</strong> to try
            VideoCoin Network.
          </Footer>
        </Wrapper>
      </Container>
    </>
  );
};

export default Hero;
