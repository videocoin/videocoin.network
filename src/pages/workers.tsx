import Layout from 'components/layout';
import SEO from 'components/seo';
import React from 'react';
import WorkersHero from 'components/Workers/Hero';
import Tutorials from 'components/Tutorials';
import FooterCards from 'components/FooterCards';
import StakersCard from 'components/FooterCards/StakersCard';
import DevelopersCard from 'components/FooterCards/DevelopersCard';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import HowItWorks from 'components/HowItWorks';
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
      setup: file(relativePath: { eq: "setup.png" }) {
        childImageSharp {
          gatsbyImageData(width: 475, quality: 100, layout: CONSTRAINED)
        }
      }
      getPaid: file(relativePath: { eq: "getPaid.png" }) {
        childImageSharp {
          gatsbyImageData(width: 416, quality: 100, layout: CONSTRAINED)
        }
      }
    }
  `);
  return (
    <>
      <MainBlock
        reverse
        background="white10"
        left={
          <Section>
            <GatsbyImage
              alt=""
              image={data.setup.childImageSharp.gatsbyImageData}
            />
          </Section>
        }
        right={
          <>
            <Text variant="title" marginB={16}>
              Simple Setup
            </Text>
            <Text color="grey70_72" marginB={48}>
              Our software is so powerful, use any hardware that works with
              Docker to begin working in minutes.
            </Text>
            <a
              href="https://forum.videocoin.network/t/quick-guide-setting-up-a-worker-on-console"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>Learn how</Button>
            </a>
          </>
        }
      />
      <MainBlock
        background="white20"
        left={
          <Section>
            <GatsbyImage
              alt=""
              image={data.getPaid.childImageSharp.gatsbyImageData}
            />
          </Section>
        }
        right={
          <>
            <Text variant="title" marginB={16}>
              Get Paid in Cash
            </Text>
            <Text color="grey70_72" marginB={48}>
              Unlike other projects which deliver inflating tokens as reward we
              pay our workers in cash
            </Text>
            <Link to="/rewards">
              <Button>See Reward Breakdown</Button>
            </Link>
          </>
        }
      />
    </>
  );
};
const howItWorks = [
  {
    id: 1,
    title: 'Get Started',
    desc: (
      <>
        Our{' '}
        <a
          href="https://forum.videocoin.network/t/quick-guide-setting-up-a-worker-on-videocoin-network-console"
          target="_blank"
          rel="noopener noreferrer"
        >
          quickstart guide
        </a>{' '}
        will get you setup and running our latest worker software in minutes
      </>
    ),
  },
  {
    id: 2,
    title: 'Begin Working',
    desc: 'Once your worker node is set up it will receive portions of video files to transcode Once completed it will be submitted for review',
  },
  {
    id: 3,
    title: 'Get Paid',
    desc: (
      <>
        Upon completion of work validation you will be paid for the work
        completed in cash Cash payments will be handled via{' '}
        <a
          href="https://publicmint.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Public Mint
        </a>
      </>
    ),
  },
];

const tutorials = [
  {
    title: 'Worker Quickstart Guide',
    link: 'https://forum.videocoin.network/t/quick-guide-setting-up-a-worker-on-videocoin-network-console/38',
    color: 'white0',
    light: false,
  },
  {
    title: 'Setting up a Worker on RaspberryPi',
    link: 'https://forum.videocoin.network/t/setting-up-a-videocoin-worker-on-raspberrypi',
    color: 'violet50',
    light: true,
  },
  {
    title: 'Setting up a Worker on Jetson Nano',
    link: 'https://forum.videocoin.network/t/setting-up-a-videocoin-worker-on-jetson-nano',
    color: 'violet10',
    light: false,
  },
];
const WorkersPage = () => {
  return (
    <Layout>
      <SEO title="Workers" />
      <WorkersHero />
      <Sections />
      <HowItWorks steps={howItWorks} />
      <Tutorials cards={tutorials} />
      <Join />
      <FooterCards>
        <Container>
          <div>
            <DevelopersCard />
            <StakersCard />
          </div>
        </Container>
      </FooterCards>
    </Layout>
  );
};
export default WorkersPage;
