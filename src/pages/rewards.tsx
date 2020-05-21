import Layout from 'components/layout';
import SEO from 'components/seo';
import React from 'react';
import FooterCards from 'components/FooterCards';
import WorkersCard from 'components/FooterCards/WorkersCard';
import StakersCard from 'components/FooterCards/StakersCard';
import RewardsHero from 'components/Rewards/Hero';
import WorkersRewards from 'components/Rewards/WorkersRewards';
import DelegatesRewards from 'components/Rewards/DelegatesRewards';
import Minimums from 'components/Rewards/Minimums';
import Inflation from 'components/Rewards/Inflation';
import CashRewards from 'components/Rewards/CashRewards';

const RewardsPage = () => (
  <Layout>
    <SEO title="Rewards" />
    <RewardsHero />
    <WorkersRewards />
    <DelegatesRewards />
    <Minimums />
    <Inflation />
    <CashRewards />
    <FooterCards>
      <WorkersCard />
      <StakersCard />
    </FooterCards>
  </Layout>
);

export default RewardsPage;
