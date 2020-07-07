import React from 'react';
import FooterCard from './FooterCard';
import img from './assets/worker.svg';

const WorkersCard = () => {
  return (
    <FooterCard
      path="/workers"
      img={img}
      title="Want To Run a Worker Node"
      desc="Get started earning cash by enlisting your servers or PC to work on the VideoCoin Network"
      buttonText="For Workers"
    />
  );
};

export default WorkersCard;
