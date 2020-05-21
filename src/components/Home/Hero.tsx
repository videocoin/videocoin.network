import React from 'react';
import bg from './assets/bg.svg';
import IconLogo from 'components/Logo/IconLogo';
import { Button, Typography } from 'ui-kit';
import Container from 'styles/Container';
import { Title, Bg, Wrapper, Btns, Footer } from './styles';

const Hero = () => {
  return (
    <>
      <Bg>
        <img src={bg} alt="" />
      </Bg>
      <Container>
        <Wrapper>
          <IconLogo />
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
            <Button>Create Account</Button>
            <Button theme="minimal">Learn more</Button>
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
