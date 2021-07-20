import React from 'react';
import SEO from 'components/seo';
import Layout from 'components/layout';
import TokenHero from 'components/Token/Hero';
import TokenSupply from 'components/Token/TokenSupply';
import Exchanges from 'components/Token/Exchanges';
import Allocation from 'components/Token/Allocation';
import Tokenomics from 'components/Token/Tokenomics';

const Token = () => {
  return (
    <Layout>
      <SEO title="Token" />
      <TokenHero />
      <TokenSupply />
      <Exchanges />
      <Allocation />
      <Tokenomics />
    </Layout>
  );
};

export default Token;
