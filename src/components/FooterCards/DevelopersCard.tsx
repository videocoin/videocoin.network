import React from 'react';
import FooterCard from './FooterCard';
import img from './assets/developers.svg';

const DevelopersCard = () => {
  return (
    <FooterCard
      path="/developers"
      img={img}
      title="Want to Develop with Video Network"
      desc="Learn how to start building next generation video streaming applications"
      buttonText="For Developers"
    />
  );
};

export default DevelopersCard;
