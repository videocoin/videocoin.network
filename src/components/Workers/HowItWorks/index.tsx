import React, { ReactNode, useMemo } from 'react';
import { Typography } from 'ui-kit';
import { Root, StepItem, StepN, List } from './styles';
import { useTranslation, Trans } from 'react-i18next';

interface Step {
  id: number;
  title: string;
  desc: ReactNode;
}

const HowItWorks = () => {
  const { t } = useTranslation('workers');
  const steps: Step[] = useMemo(
    () => [
      {
        id: 1,
        title: t('Get Started'),
        desc: (
          <Typography type="smallBodyThin">
            <Trans
              t={t}
              i18nKey="Our quickstart guide will get you setup and running our latest worker software in minutes"
            >
              Our{' '}
              <a
                href="https://forum.videocoin.network/t/quick-guide-setting-up-a-worker-on-videocoin-network-console"
                target="_blank"
                rel="noopener noreferrer"
              >
                quickstart guide
              </a>{' '}
              will get you setup and running our latest worker software in
              minutes
            </Trans>
          </Typography>
        ),
      },
      {
        id: 2,
        title: t('Begin Working'),
        desc: (
          <Typography type="smallBodyThin">
            {t(
              'Once your worker node is set up it will receive portions of video files to transcode Once completed it will be submitted for review'
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
              i18nKey="Upon completion of work validation you will be paid for the work completed in cash Cash payments will be handled via Public Mint"
              t={t}
            >
              Upon completion of work validation you will be paid for the work
              completed in cash Cash payments will be handled via{' '}
              <a
                href="https://publicmint.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Public Mint
              </a>
            </Trans>
          </Typography>
        ),
      },
    ],
    []
  );
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
