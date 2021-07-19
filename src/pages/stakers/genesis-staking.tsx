import Layout from 'components/layout';
import SEO from 'components/seo';
import React, { useEffect, useRef } from 'react';
import StakersHero from 'components/Stakers/GenesisStaking/Hero';
import FooterCards from 'components/FooterCards';
import DevelopersCard from 'components/FooterCards/DevelopersCard';
import WorkersCard from 'components/FooterCards/WorkersCard';
import HowItWorks from 'components/HowItWorks';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import lottie from 'lottie-web';
import { animationData } from 'components/Stakers/animationData.js';
import Join from 'components/Join';
import MainBlock from 'components/MainBlock';
import Text from 'components/UI/Text';
import styled from 'styled-components';
import Card from 'components/Card';
import Container from 'styles/Container';

export const Section = styled.div`
  padding: 24px 0;
`;

const howItWorks = [
  {
    id: 1,
    title: 'Connect your wallet',
    desc: 'Connect a new or existing VideoCoin Wallet to our staking app using MetaMask.',
  },
  {
    id: 2,
    title: 'Stake on a Worker',
    desc: 'Once your wallet is connected, you’ll be able to choose one of our Genesis Workers to stake your VID tokens.',
  },
  {
    id: 3,
    title: 'Earn VID',
    desc: 'Once staked, you’ll earn consistent VID Token rewards based on the amount of VID tokens you have staked.',
  },
];

const Animation = styled.div`
  max-width: 460px;
`;

const GenesisStaking = () => {
  const animationEl = useRef<any>(null);
  const animation = useRef<any>(null);
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
  const data = useStaticQuery(graphql`
    {
      token: file(relativePath: { eq: "genesisTokenRewards.png" }) {
        childImageSharp {
          gatsbyImageData(width: 416, quality: 100, layout: CONSTRAINED)
        }
      }
      pool: file(relativePath: { eq: "stakingPool.png" }) {
        childImageSharp {
          gatsbyImageData(width: 416, quality: 100, layout: CONSTRAINED)
        }
      }
    }
  `);
  return (
    <Layout>
      <SEO title="Stakers" />
      <StakersHero />
      <MainBlock
        reverse
        background="white10"
        left={
          <Section>
            <GatsbyImage
              alt=""
              image={data.token.childImageSharp.gatsbyImageData}
            />
          </Section>
        }
        right={
          <>
            <Text variant="title">VID Token Rewards</Text>
            <Text>
              The Genesis Staking Program is built to allow users to easily
              delegate tokens into a VideoCoin Network pool to help enable
              certain basic network functionalities and earn VID rewards in
              return.
            </Text>
          </>
        }
      />
      <MainBlock
        background="white20"
        left={
          <Section>
            <GatsbyImage
              alt=""
              image={data.pool.childImageSharp.gatsbyImageData}
            />
          </Section>
        }
        right={
          <>
            <Text variant="title">Introductory Staking Pool</Text>
            <Text>
              Other VideoCoin Network Workers will take time to come online, and
              we want to kick-start this by setting up a Worker pool to enable
              certain basic functionalities on the network.
            </Text>
          </>
        }
      />
      <MainBlock
        reverse
        background="white10"
        left={
          <Section>
            <Animation>
              <Card color="violet90">
                <div ref={animationEl} />
              </Card>
            </Animation>
          </Section>
        }
        right={
          <div>
            <Text variant="title">No Inflation Means Real Rewards</Text>
            <Text>
              The Genesis pool rewards existing VID tokens rather than minting
              new tokens to pay rewards.
            </Text>
          </div>
        }
      />
      <HowItWorks color="white20" steps={howItWorks} />
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

export default GenesisStaking;
