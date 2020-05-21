import React, { ReactNode } from 'react';
import { Typography } from 'ui-kit';
import { Root, StepItem, StepN, List } from './styles';
import Container from 'styles/Container';

interface Step {
  id: number;
  title: string;
  desc: ReactNode;
}

const steps: Step[] = [
  {
    id: 1,
    title: 'Find A Worker',
    desc: (
      <Typography type="smallBodyThin">
        First, you’ll need to either setup your own worker node or find a worker
        node to stake your tokens.
      </Typography>
    ),
  },
  {
    id: 2,
    title: 'Basic Setup',
    desc: (
      <Typography type="smallBodyThin">
        Follow our <a href="#">Staking Quickstart Guide</a> to learn how to use
        our CLI tooling to begin staking your VideoCoin tokens.
      </Typography>
    ),
  },
  {
    id: 3,
    title: 'Get Paid',
    desc: (
      <Typography type="smallBodyThin">
        VideoCoin Network currently does NOT manage payment to delegated
        stakers. It is up to worker nodes to setup staking pools with our open
        source smart contract to distribute payment via{' '}
        <a href="#">Public Mint</a>.
      </Typography>
    ),
  },
];

const HowItWorks = () => {
  const renderStep = (step: Step) => (
    <StepItem key={step.id}>
      <StepN>
        <Typography type="smallTitle" theme="white">
          {step.id}
        </Typography>
      </StepN>
      <div>
        <Typography type="smallTitle">{step.title}</Typography>
        {step.desc}
      </div>
    </StepItem>
  );
  return (
    <Root>
      <Typography align="center" type="display3">
        How it works
      </Typography>
      <List>{steps.map(renderStep)}</List>
    </Root>
  );
};

export default HowItWorks;
