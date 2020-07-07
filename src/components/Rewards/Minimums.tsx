import React from 'react';
import Section from 'components/Section';
import { Title, MinimumsCard } from 'components/Rewards/styles';
import { Typography } from 'ui-kit/*';
import { useTranslation } from 'react-i18next';

const Card = () => {
  const { t } = useTranslation('rewards');
  return (
    <MinimumsCard>
      <ul>
        <li>
          <div>{t('Worker Node')}</div>
          <div>{t('50000 VID minimum stake')}</div>
          <div>*{t('minimum will be re-evaluated every month')}</div>
        </li>
        <li>
          <div>{t('Delegate')}</div>
          <div>{t('1 VID token minimum to stake')}</div>
        </li>
      </ul>
    </MinimumsCard>
  );
};

const Minimums = () => {
  const { t } = useTranslation('rewards');
  return (
    <Section light reverse>
      <div>
        <div>
          <Card />
        </div>
      </div>
      <div>
        <Title>{t('Secure but Attainable Minimums')}</Title>
        <Typography type="bodyThin">
          {t(
            'Worker Node minimums are far lower than the $86M USD average minimum stake on similar projects'
          )}
        </Typography>
      </div>
    </Section>
  );
};

export default Minimums;
