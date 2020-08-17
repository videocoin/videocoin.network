import Layout from 'components/layout';
import SEO from 'components/seo';
import React, { useEffect, useRef } from 'react';
import StakersHero from 'components/Stakers/GenesisStaking/Hero';
import Section from 'components/Section';
import { Typography } from 'ui-kit';
import Community from 'components/Community';
import FooterCards from 'components/FooterCards';
import DevelopersCard from 'components/FooterCards/DevelopersCard';
import WorkersCard from 'components/FooterCards/WorkersCard';
import HowItWorks from 'components/Stakers/GenesisStaking/HowItWorks';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import lottie from 'lottie-web';
import { animationData } from 'components/Stakers/animationData.js';

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
    query {
      token: file(relativePath: { eq: "genesisTokenRewards.png" }) {
        childImageSharp {
          fluid(maxWidth: 416, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      pool: file(relativePath: { eq: "stakingPool.png" }) {
        childImageSharp {
          fluid(maxWidth: 416, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <Layout>
      <SEO title="Stakers" />
      <StakersHero />
      <Section light>
        <Img fluid={data.token.childImageSharp.fluid} />
        <div>
          <Typography type="display4" theme="white">
            VID Token Rewards
          </Typography>
          <Typography type="subtitleThin" opacity="drift">
            The Genesis Staking Program is built to allow users to easily
            delegate tokens into a VideoCoin Network pool to help enable certain
            basic network functionalities and earn VID rewards in return.
          </Typography>
        </div>
      </Section>
      <Section reverse>
        <Img fluid={data.pool.childImageSharp.fluid} />
        <div>
          <Typography type="display4" theme="white">
            Introductory Staking Pool
          </Typography>
          <Typography type="subtitleThin" opacity="drift">
            Other VideoCoin Network workers will take time to come online and we
            want to kick start this by setting up a worker pool to enable
            certain basic functionalities on the network. Our present plan is to
            keep this pool running for a year.
          </Typography>
        </div>
      </Section>
      <Section light>
        <div>
          <div ref={animationEl} />
        </div>
        <div>
          <Typography type="display4" theme="white">
            No Inflation Means Real Rewards
          </Typography>
          <Typography type="subtitleThin" opacity="drift">
            The Genesis pool rewards existing VID tokens rather than minting new
            tokens to pay rewards.
          </Typography>
        </div>
      </Section>
      <HowItWorks />
      <Community />
      <FooterCards>
        <DevelopersCard />
        <WorkersCard />
      </FooterCards>
    </Layout>
  );
};

export default GenesisStaking;
