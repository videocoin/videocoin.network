import React from 'react';
import FooterCards from 'components/FooterCards';
import WorkersCard from 'components/FooterCards/WorkersCard';
import StakersCard from 'components/FooterCards/StakersCard';
import { Typography } from 'ui-kit';
import styled from 'styled-components';

const Text = styled(Typography)`
  max-width: 760px;
  margin: 0 auto;
  padding: 0 24px;
`;

const Root = styled.div`
  padding-top: 152px;
  ${FooterCards} {
    background: transparent;
  }
`;

const BottomCards = () => {
  return (
    <Root>
      <Typography type="display3" align="center">
        Get Started
      </Typography>
      <FooterCards>
        <WorkersCard />
        <StakersCard />
      </FooterCards>
      <Text type="smallBodyThin" align="center" opacity="drift">
        The terms, conditions, and delivery dates of the VideoCoin Network
        Staking Program (“Program”) are subject to change without notice and
        will be detailed following the “Everest” roadmap release when commercial
        operations of the Network are expected to commence. Participation in the
        Program will be subject to agreement of these terms and conditions.
      </Text>
    </Root>
  );
};

export default BottomCards;
