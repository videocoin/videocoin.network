import React from 'react';
import { Root, Inner, Left, Right, Bg } from './styles';
import Container from 'styles/Container';
import bgImg from './assets/bg.svg';
import bgImgMd from './assets/bg_md.svg';
import View from 'components/View';
import developers from 'icons/developers.svg';
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
            <View row column={mobile} centerV marginB={10}>
              <View marginR={mobile ? 0 : 16}>
                <img src={developers} width={36} height={36} alt="" />
              </View>
              <Text variant="subtitle" withGradient uppercase>
                Develop on VideoCoin Network
              </Text>
            </View>
            <Text variant="display2" marginB={36}>
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
