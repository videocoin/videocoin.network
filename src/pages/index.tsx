import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from 'components/Home/Hero';
import Section from 'components/Section';
import { Typography } from 'ui-kit';
import Api from 'components/Home/API';
import GreenSolution from 'components/Home/GreenSolution';
import Demo from 'components/Home/Demo';
import DevelopersCard from 'components/FooterCards/DevelopersCard';
import StakersCard from 'components/FooterCards/StakersCard';
import FooterCards from 'components/FooterCards';
import WorkersCard from 'components/FooterCards/WorkersCard';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      cheap: file(relativePath: { eq: "cheap.png" }) {
        childImageSharp {
          fixed(width: 416, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      time: file(relativePath: { eq: "time.png" }) {
        childImageSharp {
          fixed(width: 416, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      scalable: file(relativePath: { eq: "scalable.png" }) {
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
      <SEO title="Home" />
      <Hero />
      <Section light>
        <div>
          <Img fixed={data.cheap.childImageSharp.fixed} />
        </div>
        <div>
          <Typography type="display4">Lower Cost</Typography>
          <Typography type="subtitleThin" opacity="drift">
            By harnessing unused data centers that would otherwise go to waste,
            VideoCoin Network passes the savings onto you.
          </Typography>
        </div>
      </Section>
      <Section reverse>
        <div>
          <Img fixed={data.time.childImageSharp.fixed} />
        </div>
        <div>
          <Typography type="display4">Start Now</Typography>
          <Typography type="subtitleThin" opacity="drift">
            We’ve removed all of the complexity of video infrastructure so
            resources can be focused on your application.
          </Typography>
        </div>
      </Section>
      <Section light>
        <div>
          <Img fixed={data.scalable.childImageSharp.fixed} />
        </div>
        <div>
          <Typography type="display4">Infinitely Scalable</Typography>
          <Typography type="subtitleThin" opacity="drift">
            This is the next generation of cloud computing. The VideoCoin
            Network platform instantly scales with you.
          </Typography>
        </div>
      </Section>
      <Api />
      <Demo />
      <GreenSolution />
      <FooterCards>
        <DevelopersCard />
        <WorkersCard />
        <StakersCard />
      </FooterCards>
    </Layout>
  );
};

export default IndexPage;
