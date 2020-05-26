import Layout from 'components/layout';
import SEO from 'components/seo';
import React from 'react';
import RewardsHero from 'components/Rewards/Hero';
import WorkersRewards from 'components/Rewards/WorkersRewards';
import DelegatesRewards from 'components/Rewards/DelegatesRewards';
import Minimums from 'components/Rewards/Minimums';
import Inflation from 'components/Rewards/Inflation';
import CashRewards from 'components/Rewards/CashRewards';
import BottomCards from 'components/Rewards/BottomCards';

const RewardsPage = () => (
  <Layout>
    <SEO title="Rewards" />
    <RewardsHero />
    <WorkersRewards />
    <DelegatesRewards />
    <Minimums />
    <Inflation />
    <CashRewards />
    <BottomCards />
  </Layout>
);

export default RewardsPage;
