import React from 'react';
import Layout from 'components/layout';
import SEO from 'components/seo';
import Hero from 'components/Landing/Hero';

const Index = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
    </Layout>
  );
};

export default Index;
