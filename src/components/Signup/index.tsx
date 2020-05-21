import React from 'react';
import SignupForm from 'components/Signup/Form';
import { Root, Inner, Left } from './styles';
import Container from 'styles/Container';
import { Typography } from 'ui-kit';
import { globalHistory as history } from '@reach/router';

const Signup = () => {
  const { location } = history;
  const urlParams = new URLSearchParams(location.search);
  const role = urlParams.get('role');
  const isMiner = role === 'miner';

  return (
    <Root>
      <Container>
        <Inner>
          <Left>
            <img src="http://placehold.it/180x180" alt="" />
            <Typography type="display3">
              Video is Hard,
              <br />
              We Make It Easy
            </Typography>
            <Typography type="bodyThin" opacity="medium">
              The VideoCoin Network is an API first, decentralized video
              infrastructure designed for engineers to create cost effective
              video streaming, livestreaming, VOD applications.
            </Typography>
          </Left>
          <SignupForm />
        </Inner>
      </Container>
    </Root>
  );
};

export default Signup;
