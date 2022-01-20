import React from 'react';
import { Root, Disclaimer, Video } from './styles';
import token from 'icons/token.svg';
import View from 'components/View';
import Text from 'components/UI/Text';
import Container from 'styles/Container';
import { useBreakpoint } from 'components/BrealpointProvider';
import coinSpinVideo from '../assets/coinSpinVideo.mp4';

const TokenHero = () => {
  const { mobile, tablet } = useBreakpoint();
  return (
    <Root>
      <Container>
        <div>
          <div>
            <Video>
              <video src={coinSpinVideo} autoPlay muted loop playsInline />
            </Video>
          </div>
          <div>
            <View row column={mobile} centerV centerH={tablet} marginB={10}>
              <View marginR={mobile ? 0 : 16}>
                <img src={token} width={36} height={36} alt="" />
              </View>
              <Text variant="subtitle" withGradient uppercase>
                VID Tokenomics
              </Text>
            </View>
            <Text variant="display2">
              The VIVID platform is powered by the VID token.
            </Text>
            <Text variant="subtitle" color="violet80" marginB={38}>
              VID tokens enable network functionality and ensure its stability
              and efficiency.
            </Text>
            <Disclaimer>
              <Text variant="caption">
                <span>
                  *Issued by the VideoCoin Development Association Ltd. (VDA),
                  VID tokens were initially offered to early project
                  contributors in a presale beginning in 2017. Contributors
                  seeking the terms and conditions of the VDA presale may access
                  them{' '}
                </span>
                <a
                  href="https://storage.googleapis.com/videocoin-network-policies/VideoCoinTCupdated103018.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  here
                </a>
                .
              </Text>
            </Disclaimer>
          </div>
        </div>
      </Container>
    </Root>
  );
};

export default TokenHero;
