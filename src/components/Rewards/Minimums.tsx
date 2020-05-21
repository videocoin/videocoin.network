import React from 'react';
import Section from 'components/Section';
import { Title, MinimumsCard } from 'components/Rewards/styles';
import { Typography } from 'ui-kit/*';

const Card = () => (
  <MinimumsCard>
    <ul>
      <li>
        <div>Worker Node</div>
        <div>333,333 VID minimum stake</div>
        <div>*minimum will be re-evaluated every month</div>
      </li>
      <li>
        <div>Delegate</div>
        <div>1 VID token minimum to stake</div>
      </li>
    </ul>
  </MinimumsCard>
);

const Minimums = () => {
  return (
    <Section light reverse>
      <div>
        <Card />
      </div>
      <div>
        <Title>Secure but Attainable Minimums</Title>
        <Typography type="bodyThin">
          Worker Node minimums are far lower than the $8.6M USD average minimum
          stake on similar projects.
        </Typography>
      </div>
    </Section>
  );
};

export default Minimums;
