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
import { useTranslation } from 'react-i18next';

const IndexPage = () => {
  const { t } = useTranslation();
  const data = useStaticQuery(graphql`
    query {
      cheap: file(relativePath: { eq: "cheap.png" }) {
        childImageSharp {
          fluid(maxWidth: 416, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      time: file(relativePath: { eq: "time.png" }) {
        childImageSharp {
          fluid(maxWidth: 416, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      scalable: file(relativePath: { eq: "scalable.png" }) {
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
      <SEO title="Home" />
      <Hero />
      <Section light>
        <Img fluid={data.cheap.childImageSharp.fluid} />
        <div>
          <Typography type="display4">{t('Lower Cost')}</Typography>
          <Typography type="subtitleThin" opacity="drift">
            {t(
              'By harnessing unused data centers that would otherwise go to waste VideoCoin Network passes the savings onto you'
            )}
          </Typography>
        </div>
      </Section>
      <Section reverse>
        <Img fluid={data.time.childImageSharp.fluid} />
        <div>
          <Typography type="display4">{t('Start Now')}</Typography>
          <Typography type="subtitleThin" opacity="drift">
            {t(
              'Weve removed all of the complexity of video infrastructure so resources can be focused on your application'
            )}
          </Typography>
        </div>
      </Section>
      <Section light>
        <Img fluid={data.scalable.childImageSharp.fluid} />
        <div>
          <Typography type="display4">{t('Infinitely Scalable')}</Typography>
          <Typography type="subtitleThin" opacity="drift">
            {t(
              'This is the next generation of cloud computing The VideoCoin Network platform instantly scales with you'
            )}
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
