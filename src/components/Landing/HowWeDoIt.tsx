import React from 'react';
import View from 'components/View';
import Button from 'components/UI/Button';
import * as S from './styles';
import img from './assets/consoleGraphics.png';
import img2x from './assets/consoleGraphics@2x.png';
import img_md from './assets/consoleGraphics_md.png';
import img_md2x from './assets/consoleGraphics_md@2x.png';
import { useBreakpoint } from 'components/BrealpointProvider';

const HowWeDoIt = () => {
  const { tablet, mobile } = useBreakpoint();
  return (
    <S.Root>
      <S.Container>
        <S.H2>How We Do It</S.H2>
        <S.Text>
          The VideoCoin Network achieves these dramatic benefits for customers
          by harnessing and monetizing unused computing resources from around
          the world, transforming cloud-based video services into an efficient,
          decentralized market.
        </S.Text>
        <View
          row={!mobile}
          reverse={mobile}
          column={mobile}
          centerV
          marginB={60}
          centerH
          marginH={mobile ? 0 : tablet ? -40 : 0}
        >
          <S.FeaturesList>
            <li>Private and Secure</li>
            <li>Lowest Cost</li>
            <li>Lighting Fast</li>
          </S.FeaturesList>
          <picture>
            <source
              srcSet={`${img_md}, ${img_md2x} 2x`}
              media="(max-width: 1024px)"
            />
            <source srcSet={`${img}, ${img2x} 2x`} />
            <img srcSet={`${img}, ${img2x} 2x`} alt="" />
          </picture>
        </View>
        <View column centerV centerH>
          <S.AirbnbTitle>It's like Airbnb for video</S.AirbnbTitle>
          <a
            href="https://console.videocoin.network/sign-up?role=publisher"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="large">Get Started Today</Button>
          </a>
        </View>
      </S.Container>
    </S.Root>
  );
};

export default HowWeDoIt;
