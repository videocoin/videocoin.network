import React from 'react';
import { Root, Inner, Left, Right, Subtitle, Title, Bg } from './styles';
import { MarketingButton } from 'ui-kit';
import Container from 'styles/Container';
import bgImg from './assets/bg.svg';
import bgMd from './assets/bg_md.svg';
import bgSm from './assets/bg_md.svg';

const WorkersHero = () => {
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
              <span>Work</span> on videocoin network
            </Subtitle>
            <Title type="display3" theme="white">
              Dedicate your unused compute power and <span>earn cash</span>
            </Title>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://studio.videocoin.network/sign-up?role=miner"
            >
              <MarketingButton>Get Started</MarketingButton>
            </a>
          </Right>
        </Inner>
      </Container>
    </Root>
  );
};

export default WorkersHero;
