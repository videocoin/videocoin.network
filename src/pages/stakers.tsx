import Layout from 'components/layout';
import SEO from 'components/seo';
import React from 'react';
import Stakers from 'components/Stakers';

const StakersPage = () => {
  return (
    <Layout hideFooter>
      <SEO title="Stakers" />
      <Stakers />
    </Layout>
  );
};

export default StakersPage;
