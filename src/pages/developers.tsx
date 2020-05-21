import Layout from 'components/layout';
import SEO from 'components/seo';
import React from 'react';
import DevelopersHero from 'components/Developers/Hero';
import DemoApplication from 'components/Developers/Demo';
import Tutorials from 'components/Developers/Tutorials';
import Community from 'components/Community';
import FooterCards from 'components/FooterCards';
import WorkersCard from 'components/FooterCards/WorkersCard';
import StakersCard from 'components/FooterCards/StakersCard';

const DevelopersPage = () => (
  <Layout>
    <SEO title="Developers" />
    <DevelopersHero />
    <DemoApplication />
    <Tutorials />
    <Community />
    <FooterCards>
      <WorkersCard />
      <StakersCard />
    </FooterCards>
  </Layout>
);

export default DevelopersPage;
