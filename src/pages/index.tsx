import React from 'react';
import Layout from 'components/layout';
import SEO from 'components/seo';
import HowWeDoIt from 'components/Landing/HowWeDoIt';
import Features from 'components/Landing/Features';
import Hero from 'components/Landing/Hero';

const Index = () => {
  return (
    <Layout light>
      <SEO title="Home" />
      <Hero />
      <Features />
      <HowWeDoIt />
    </Layout>
  );
};

export default Index;
