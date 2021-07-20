import React from 'react';
import {
  Root,
  Inner,
  PriceCard,
  PriceCardValue,
  PriceCardFeatures,
  Right,
} from './styles';
import Container from 'styles/Container';
import Text from 'components/UI/Text';
import Button from 'components/UI/Button';
import View from 'components/View';
import Card from 'components/Card';
import { useBreakpoint } from 'components/BrealpointProvider';

const PricingHero = () => {
  const { tablet } = useBreakpoint();
  const handleClick = () => {
    typeof window !== 'undefined' &&
      window.gtag('event', 'click', {
        send_to: 'AW-766963740/vD8-CLi05tUBEJzg2-0C',
      });
  };
  return (
    <Root>
      <Container>
        <Inner>
          <PriceCard>
            <Card>
              <PriceCardValue>
                <Text variant="title">$0.025</Text>
                <Text variant="subtitle">per minute</Text>
              </PriceCardValue>
              <PriceCardFeatures>
                <li>Video Transcoding</li>
                <li>Livestreaming</li>
                <li>per profile</li>
              </PriceCardFeatures>
              <Text variant="caption" align="center">
                * Pricing subject to change
              </Text>
            </Card>
          </PriceCard>
          <Right>
            <Text variant="display2">Start Today</Text>
            <Text marginB={24}>
              Pay one low price whether you are transcoding video or streaming
              live video
            </Text>

            <View row>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://console.videocoin.network/sign-up?role=publisher"
                onClick={handleClick}
              >
                <Button>Sign up for free</Button>
              </a>
              <View marginL={tablet ? 0 : 24} marginV={tablet ? 12 : 0}>
                <a href="mailto:support@videocoin.network">
                  <Button btnTheme="secondary">Have Custom Requirements</Button>
                </a>
              </View>
            </View>
          </Right>
        </Inner>
      </Container>
    </Root>
  );
};

export default PricingHero;
