import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import { animationData } from './animationData';
import MainBlock from 'components/MainBlock';
import Text from 'components/UI/Text';
import styled from 'styled-components';
import Card from 'components/Card';
import { Section } from './styles';

const Animation = styled.div`
  max-width: 460px;
`;

const Inflation = () => {
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
    <MainBlock
      background="white20"
      left={
        <Animation>
          <Card color="violet90">
            <div ref={animationEl} />
          </Card>
        </Animation>
      }
      right={
        <Section>
          <Text marginB={16} variant="title">
            No Inflation Means Real Rewards
          </Text>
          <Text>
            VideoCoin Network rewards workers and delegators up to 80% of the
            price paid by publishers in cash rather than from the minting of new
            tokens to pay rewards
            <br />
            <br />
            Other projects inflation-based reward systems continually add supply
            in to the market assuming demand will continuously increase at the
            same rate in order to keep the value of the token stable However if
            supply is added while demand remains static their token value falls
          </Text>
        </Section>
      }
    />
  );
};

export default Inflation;
