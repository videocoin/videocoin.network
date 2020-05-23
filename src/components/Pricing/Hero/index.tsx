import React from 'react';
import {
  Root,
  Inner,
  PriceCard,
  PriceCardValue,
  PriceCardFeatures,
  Right,
  Text,
} from './styles';
import { MarketingButton, Typography } from 'ui-kit';
import Container from 'styles/Container';
const PricingHero = () => {
  return (
    <Root>
      <Container>
        <Inner>
          <PriceCard>
            <PriceCardValue>
              <Typography type="display4" theme="dark">
                $0.025
              </Typography>
              <Typography type="smallTitle" theme="dark" opacity="medium">
                per minute
              </Typography>
            </PriceCardValue>
            <PriceCardFeatures>
              <li>Video Transcoding</li>
              <li>Livestreaming</li>
              <li>per profile</li>
            </PriceCardFeatures>
            <Typography type="caption" align="center">
              * Pricing subject to change
            </Typography>
          </PriceCard>
          <Right>
            <Text>
              <Typography type="display2" theme="white">
                Start Today
              </Typography>
              <Typography type="subtitleThin" opacity="drift">
                Pay one low price whether you are transcoding video or streaming
                live video
              </Typography>
            </Text>
            <div>
              <MarketingButton>Sign up for Free</MarketingButton>
              <MarketingButton theme="link-secondary">
                Have Custom Requirements?
              </MarketingButton>
            </div>
          </Right>
        </Inner>
      </Container>
    </Root>
  );
};

export default PricingHero;
