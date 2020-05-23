import Layout from 'components/layout';
import SEO from 'components/seo';
import React from 'react';
import PricingHero from 'components/Pricing/Hero';
import GetStarted from 'components/Pricing/GetStarted';
import LowPrice from 'components/Pricing/LowPrice';

const PricingPage = () => {
  return (
    <Layout>
      <SEO title="Pricing" />
      <PricingHero />
      <LowPrice />
      <GetStarted />
    </Layout>
  );
};

export default PricingPage;
