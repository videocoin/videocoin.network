import Layout from 'components/layout';
import SEO from 'components/seo';
import React from 'react';
import Stakers from 'components/Stakers';
import Join from 'components/Join';

const StakersPage = () => {
  return (
    <Layout>
      <SEO title="Stakers" />
      <Stakers />
      <Join />
    </Layout>
  );
};

export default StakersPage;
