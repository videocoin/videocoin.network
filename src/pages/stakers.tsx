import Layout from 'components/layout';
import SEO from 'components/seo';
import React from 'react';
import Stakers from 'components/Stakers';
import Join from 'components/Join';
import FooterCards from 'components/FooterCards';
import Container from 'styles/Container';
import DevelopersCard from 'components/FooterCards/DevelopersCard';
import WorkersCard from 'components/FooterCards/WorkersCard';

const StakersPage = () => {
  return (
    <Layout>
      <SEO title="Stakers" />
      <Stakers />
      <Join />
      <FooterCards>
        <Container>
          <div>
            <DevelopersCard />
            <WorkersCard />
          </div>
        </Container>
      </FooterCards>
    </Layout>
  );
};

export default StakersPage;
