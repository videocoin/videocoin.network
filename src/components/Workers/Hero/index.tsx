import React from 'react';
import { Root, Inner, Left, Right, Bg } from './styles';
import Container from 'styles/Container';
import bgImg from './assets/bg.svg';
import bgImgMd from './assets/bg_md.svg';
import View from 'components/View';
import workers from 'icons/worker.svg';
import Text from 'components/UI/Text';
import Button from 'components/UI/Button';
import { useBreakpoint } from 'components/BrealpointProvider';

const WorkersHero = () => {
  const { mobile } = useBreakpoint();
  return (
    <Root>
      <Bg>
        <img src={bgImg} alt="" />
      </Bg>
      <Container>
        <Inner>
          <Left>
            <img src={bgImgMd} alt="" />
          </Left>
          <Right>
            <View row column={mobile} centerV marginB={7}>
              <View marginR={mobile ? 0 : 14}>
                <img src={workers} width={36} height={36} alt="" />
              </View>
              <Text variant="subtitle" withGradient uppercase>
                WORK ON VIDEOCOIN NETWORK
              </Text>
            </View>
            <Text variant="display2" marginB={36} paddingR={mobile ? 0 : 28}>
              Dedicate your unused compute power and earn cash
            </Text>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://console.videocoin.network/sign-up?role=miner"
            >
              <Button>Get Started</Button>
            </a>
          </Right>
        </Inner>
      </Container>
    </Root>
  );
};

export default WorkersHero;
