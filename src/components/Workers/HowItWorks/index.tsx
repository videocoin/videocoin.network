import React, { ReactNode } from 'react';
import { Typography } from 'ui-kit';
import { Root, StepItem, StepN, List } from './styles';

interface Step {
  id: number;
  title: string;
  desc: ReactNode;
}

const steps: Step[] = [
  {
    id: 1,
    title: 'Get Started',
    desc: (
      <Typography type="smallBodyThin">
        Our <a href="#">quickstart guide</a> will get you setup and running our
        latest worker software in minutes.
      </Typography>
    ),
  },
  {
    id: 2,
    title: 'Begin Working',
    desc: (
      <Typography type="smallBodyThin">
        Once your worker node is set up, it will receive portions of video files
        to transcode. Once completed, it will be submitted for review.
      </Typography>
    ),
  },
  {
    id: 3,
    title: 'Get Paid',
    desc: (
      <Typography type="smallBodyThin">
        Upon completion of work validation, you will be paid for the work
        completed in cash. Cash payments will be handled via{' '}
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
