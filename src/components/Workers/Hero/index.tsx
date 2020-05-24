import React from 'react';
import { Root, Inner, Left, Right, Subtitle, Title, Bg } from './styles';
import { MarketingButton } from 'ui-kit';
import Container from 'styles/Container';
import bgImg from './bg.svg';
import { Link } from 'gatsby';

const WorkersHero = () => {
  return (
    <Root>
      <Bg>
        <img src={bgImg} alt="" />
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
            <Link to="/signup?role=miner">
              <MarketingButton>Get Started</MarketingButton>
            </Link>
          </Right>
        </Inner>
      </Container>
    </Root>
  );
};

export default WorkersHero;
