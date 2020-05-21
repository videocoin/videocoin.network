import Layout from 'components/layout';
import SEO from 'components/seo';
import React from 'react';
import WorkersHero from 'components/Workers/Hero';
import Section from 'components/Section';
import { MarketingButton, Typography } from 'ui-kit';
import TutorialsList from 'components/Workers/Tutorials';
import Community from 'components/Community';
import FooterCards from 'components/FooterCards';
import StakersCard from 'components/FooterCards/StakersCard';
import DevelopersCard from 'components/FooterCards/DevelopersCard';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const WorkersPage = () => {
  const data = useStaticQuery(graphql`
    query {
      setup: file(relativePath: { eq: "setup.png" }) {
        childImageSharp {
          fixed(width: 475, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      feature: file(relativePath: { eq: "feature.png" }) {
        childImageSharp {
          fixed(width: 475, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      getPaid: file(relativePath: { eq: "getPaid.png" }) {
        childImageSharp {
          fixed(width: 416, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  return (
    <Layout>
      <SEO title="Workers" />
      <WorkersHero />
      <Section light reverse>
        <div>
          <Img fixed={data.setup.childImageSharp.fixed} />
        </div>
        <div>
          <Typography type="display4" theme="white">
            Simple Setup
          </Typography>
          <Typography type="subtitleThin" opacity="drift">
            Our software is so powerful, use any hardware that works with Docker
            to begin working in minutes.
          </Typography>
          <MarketingButton theme="link" size="xs">
            Learn How
          </MarketingButton>
        </div>
      </Section>
      <Section>
        <div>
          <Img fixed={data.getPaid.childImageSharp.fixed} />
        </div>
        <div>
          <Typography type="display4" theme="white">
            Get Paid in Cash
          </Typography>
          <Typography type="subtitleThin" opacity="drift">
            Unlike other projects which deliver inflating tokens as reward, we
            pay our workers in cash.
          </Typography>
          <MarketingButton theme="link" size="xs">
            See Reward Breakdown
          </MarketingButton>
        </div>
      </Section>
      <Section light reverse>
        <div>
          <Img fixed={data.feature.childImageSharp.fixed} />
        </div>
        <div>
          <Typography type="display4" theme="white">
            The Future of Video
          </Typography>
          <Typography type="subtitleThin" opacity="drift">
            Be a part of our innovative team by working with us on some of the
            most cutting edge video projects.
          </Typography>
        </div>
      </Section>
      <TutorialsList />
      <Community />
      <FooterCards>
        <DevelopersCard />
        <StakersCard />
      </FooterCards>
    </Layout>
  );
};
export default WorkersPage;
