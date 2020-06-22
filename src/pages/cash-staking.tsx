import Layout from 'components/layout';
import SEO from 'components/seo';
import React from 'react';
import StakersHero from 'components/Stakers/CashStaking/Hero';
import Section from 'components/Section';
import { MarketingButton, Typography } from 'ui-kit';
import TutorialsList from 'components/Stakers/Tutorials';
import Community from 'components/Community';
import FooterCards from 'components/FooterCards';
import DevelopersCard from 'components/FooterCards/DevelopersCard';
import WorkersCard from 'components/FooterCards/WorkersCard';
import HowItWorks from 'components/Stakers/CashStaking/HowItWorks';
import { graphql, useStaticQuery, Link } from 'gatsby';
import Img from 'gatsby-image';

const CashStaking = () => {
  const data = useStaticQuery(graphql`
    query {
      cash: file(relativePath: { eq: "stakersCashRewards.png" }) {
        childImageSharp {
          fluid(maxWidth: 416, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      real: file(relativePath: { eq: "realRewards.png" }) {
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
      <Section light reverse>
        <Img fluid={data.cash.childImageSharp.fluid} />
        <div>
          <Typography type="display4" theme="white">
            20% In Cash Rewards
          </Typography>
          <Typography type="subtitleThin" opacity="drift">
            Delegates receive a minimum 20% of worker's cash earned for a job
            completed.
          </Typography>
          <Link to="/rewards">
            <MarketingButton theme="link" size="xs">
              See Reward Breakdown
            </MarketingButton>
          </Link>
        </div>
      </Section>
      <Section>
        <Img fluid={data.real.childImageSharp.fluid} />
        <div>
          <Typography type="display4" theme="white">
            No Inflation Means Real Rewards
          </Typography>
          <Typography type="subtitleThin" opacity="drift">
            VideoCoin Network rewards workers and delegators from the price paid
            by publishers in cash rather than from the minting of new tokens to
            pay rewards.
          </Typography>
        </div>
      </Section>
      <HowItWorks />
      <TutorialsList />
      <Community />
      <FooterCards>
        <DevelopersCard />
        <WorkersCard />
      </FooterCards>
    </Layout>
  );
};

export default CashStaking;
