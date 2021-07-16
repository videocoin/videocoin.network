import React from 'react';
import FooterCards from 'components/FooterCards';
import WorkersCard from 'components/FooterCards/WorkersCard';
import StakersCard from 'components/FooterCards/StakersCard';
import styled from 'styled-components';
import Colors from 'styles/Colors';
import Text from 'components/UI/Text';
import Container from 'styles/Container';

const Disclaimer = styled(Text)`
  margin: 0 auto;
  padding: 0 24px;
  a {
    text-decoration: underline;
  }
`;

const Root = styled.div`
  padding-top: 92px;
  padding-bottom: 36px;
  background: ${Colors.white20};
  ${FooterCards} {
    background: transparent;
  }
`;

const BottomCards = () => {
  return (
    <Root>
      <Container>
        <Text variant="title" align="center">
          Get Started
        </Text>
        <FooterCards>
          <div>
            <div>
              <WorkersCard />
              <StakersCard />
            </div>
          </div>
        </FooterCards>
        <Disclaimer align="center">
          The terms, conditions, and delivery dates of the VideoCoin Network
          Staking Program (“Program”) are subject to change without notice.
          Participation in the Program is subject to agreement of the{' '}
          <a
            href="https://storage.googleapis.com/videocoin-network-policies/VideoCoinNetworkDelegatorTermsofService.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Delegator Terms of Service
          </a>
          .
        </Disclaimer>
      </Container>
    </Root>
  );
};

export default BottomCards;
