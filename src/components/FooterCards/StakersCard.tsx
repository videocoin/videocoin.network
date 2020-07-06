import React from 'react';
import FooterCard from './FooterCard';
import img from './assets/staker.svg';

const StakersCard = () => {
  return (
    <FooterCard
      path="/stakers"
      img={img}
      title="Want to Stake your Tokens"
      desc="Learn more about our groundbreaking staking model and begin staking your tokens"
      buttonText="For Stakers"
    />
  );
};

export default StakersCard;
