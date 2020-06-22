import React, { ReactNode } from 'react';
import { Typography } from 'ui-kit/*';
import { Root, StepItem, StepN, List } from './styles';

interface Step {
  id: number;
  title: string;
  desc: ReactNode;
}

const steps: Step[] = [
  {
    id: 1,
    title: 'Connect your wallet',
    desc: (
      <Typography type="smallBodyThin">
        Connect a new or existing VideoCoin Wallet using MetaMask to our staking
        app.
      </Typography>
    ),
  },
  {
    id: 2,
    title: 'Stake on a Worker',
    desc: (
      <Typography type="smallBodyThin">
        Once your wallet is connected, you’ll be able to choose one of our
        Genesis workers to stake your VID tokens.
      </Typography>
    ),
  },
  {
    id: 3,
    title: 'Earn VID',
    desc: (
      <Typography type="smallBodyThin">
        Once staked, you’ll earn consistent VID Token rewards based on the
        amount of VID tokens you have staked.
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
