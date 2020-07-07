import React, { ReactNode } from 'react';
import { Typography } from 'ui-kit/*';
import { Root, StepItem, StepN, List } from './styles';
import { useTranslation, Trans } from 'react-i18next';

interface Step {
  id: number;
  title: string;
  desc: ReactNode;
}

const HowItWorks = () => {
  const { t } = useTranslation('staking');
  const steps: Step[] = [
    {
      id: 1,
      title: t('Find A Worker'),
      desc: (
        <Typography type="smallBodyThin">
          {t(
            'First youll need to either setup your own worker node or find a worker node to stake your tokens'
          )}
        </Typography>
      ),
    },
    {
      id: 2,
      title: t('Basic Setup'),
      desc: (
        <Typography type="smallBodyThin">
          <Trans
            t={t}
            i18nKey="Follow our Staking Quickstart Guide to learn how to use our CLI tooling to begin staking your VideoCoin tokens"
          >
            Follow our{' '}
            <a
              href="https://forum.videocoin.network/t/videocoin-network-staking-guide/72"
              target="_blank"
              rel="noopener noreferrer"
            >
              Staking Quickstart Guide
            </a>{' '}
            to learn how to use our CLI tooling to begin staking your VideoCoin
            tokens
          </Trans>
        </Typography>
      ),
    },
    {
      id: 3,
      title: t('Get Paid'),
      desc: (
        <Typography type="smallBodyThin">
          <Trans
            t={t}
            i18nKey="VideoCoin Network currently does NOT manage payment to delegated stakers It is up to worker nodes to setup staking pools with our open source smart contract to distribute payment via Public Mint"
          >
            VideoCoin Network currently does NOT manage payment to delegated
            stakers. It is up to worker nodes to setup staking pools with our
            open source smart contract to distribute payment via{' '}
            <a
              href="https://publicmint.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Public Mint
            </a>
            .
          </Trans>
        </Typography>
      ),
    },
  ];
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
        {t('How it works')}
      </Typography>
      <List>{steps.map(renderStep)}</List>
    </Root>
  );
};

export default HowItWorks;
