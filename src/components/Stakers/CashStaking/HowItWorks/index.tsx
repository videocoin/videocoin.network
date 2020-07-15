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
      title: t('Connect your wallet'),
      desc: (
        <Typography type="smallBodyThin">
          {t(
            'Connect a new or existing VideoCoin Wallet using MetaMask to our staking app'
          )}
        </Typography>
      ),
    },
    {
      id: 2,
      title: t('Stake on a Worker'),
      desc: (
        <Typography type="smallBodyThin">
          {t(
            'Once your wallet is connected youll be able to choose a worker to stake your VID'
          )}
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
