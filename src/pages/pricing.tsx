import Layout from 'components/layout';
import SEO from 'components/seo';
import React from 'react';
import PricingHero from 'components/Pricing/Hero';
import Section from 'components/Section';
import { Typography } from 'ui-kit';
import GetStarted from 'components/Pricing/GetStarted';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const PricingPage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "price.png" }) {
        childImageSharp {
          fixed(width: 324, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO title="Pricing" />
      <PricingHero />
      <Section reverse light>
        <div>
          <Img fixed={data.file.childImageSharp.fixed} />
        </div>
        <div>
          <Typography theme="white" type="smallTitle">
            How is our price so low?
          </Typography>
          <Typography type="subtitleThin" opacity="drift">
            By tapping into resources that would otherwise have gone unused, we
            are able to keep costs as low as possible. We pass those savings on
            to you.
          </Typography>
        </div>
      </Section>
      <GetStarted />
    </Layout>
  );
};

export default PricingPage;
