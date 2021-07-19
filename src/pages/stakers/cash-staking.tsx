import Layout from 'components/layout';
import SEO from 'components/seo';
import React from 'react';
import StakersHero from 'components/Stakers/CashStaking/Hero';
import Tutorials from 'components/Tutorials';
import FooterCards from 'components/FooterCards';
import DevelopersCard from 'components/FooterCards/DevelopersCard';
import WorkersCard from 'components/FooterCards/WorkersCard';
import HowItWorks from 'components/HowItWorks';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import MainBlock from 'components/MainBlock';
import Text from 'components/UI/Text';
import Button from 'components/UI/Button';
import Join from 'components/Join';
import Container from 'styles/Container';
import styled from 'styled-components';

export const Section = styled.div`
  padding: 24px 0;
`;

const Sections = () => {
  const data = useStaticQuery(graphql`
    {
      cash: file(relativePath: { eq: "stakersCashRewards.png" }) {
        childImageSharp {
          gatsbyImageData(width: 520, quality: 100, layout: CONSTRAINED)
        }
      }
      real: file(relativePath: { eq: "realRewards.png" }) {
        childImageSharp {
          gatsbyImageData(width: 391, quality: 100, layout: CONSTRAINED)
        }
      }
    }
  `);
  return (
    <>
      <MainBlock
        background="white10"
        left={
          <Section>
            <GatsbyImage
              alt=""
              image={data.cash.childImageSharp.gatsbyImageData}
            />
          </Section>
        }
        right={
          <>
            <Text variant="title">20% In Cash Rewards</Text>
            <Text color="grey70_72" marginB={48}>
              Delegates receive a minimum 20% of Worker's cash earned for a job
              completed.
            </Text>
            <Link to="/rewards">
              <Button>See Reward Breakdown</Button>
            </Link>
          </>
        }
      />
      <MainBlock
        background="white20"
        reverse
        left={
          <Section>
            <GatsbyImage
              alt=""
              image={data.real.childImageSharp.gatsbyImageData}
            />
          </Section>
        }
        right={
          <>
            <Text variant="title" marginB={16}>
              No Inflation Means Real Rewards
            </Text>
            <Text color="grey70_72">
              VideoCoin Network rewards Workers and Delegators from the price
              paid by publishers in cash, rather than from the minting of new
              tokens to pay rewards.
            </Text>
          </>
        }
      />
    </>
  );
};

const howItWorks = [
  {
    id: 1,
    title: 'Connect your wallet',
    desc: 'Connect a new or existing VideoCoin Wallet to our staking app using MetaMask.',
  },
  {
    id: 2,
    title: 'Stake on a Worker',
    desc: "Once your wallet is connected, you'll be able to choose a Worker to stake your VID.",
  },
  {
    id: 3,
    title: 'Get Paid',
    desc: (
      <>
        VideoCoin Network currently does NOT manage payment to delegated
        Stakers. It is up to Worker nodes to set up staking pools with our open
        source smart contract to distribute payment via{' '}
        <a
          href="https://publicmint.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Public Mint
        </a>
        .
      </>
    ),
  },
];

const tutorials = [
  {
    title: "Staker's Quickstart Guide",
    link: 'https://forum.videocoin.network/t/videocoin-network-staking-guide/72',
    color: 'white0',
    light: false,
    textColor: 'violet50',
  },
];

const CashStaking = () => {
  return (
    <Layout>
      <SEO title="Stakers" />
      <StakersHero />
      <Sections />
      <HowItWorks steps={howItWorks} />
      <Tutorials
        header={
          <>
            <Text variant="title2" align="center" color="violet50">
              Tutorials
            </Text>
            <Text variant="display1" align="center">
              Learn How To Get Started
            </Text>
          </>
        }
        cards={tutorials}
      />
      <Join />
      <FooterCards>
        <Container>
          <div>
            <DevelopersCard />
            <WorkersCard />
          </div>
        </Container>
      </FooterCards>
    </Layout>
  );
};

export default CashStaking;
