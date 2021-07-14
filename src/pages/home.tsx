import React from 'react';
import Layout from 'components/layout';
import SEO from 'components/seo';
import Developers from 'components/Home/Developers';
import Workers from 'components/Home/Workers';
import Stakers from 'components/Home/Stakers';
import Roadmap from 'components/Home/Roadmap';
import Team from 'components/Home/Team';
import Partners from 'components/Home/Partners';
import Hero from 'components/Home/Hero';

const Index = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <Developers />
      <Workers />
      <Stakers />
      <Roadmap />
      <Team />
      <Partners />
    </Layout>
  );
};

export default Index;
