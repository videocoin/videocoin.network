import TutorialCard, { ICard } from 'components/TutorialCard';
import { List, Root } from './styles';
import React from 'react';
import { Typography } from 'ui-kit';
import { useTranslation } from 'react-i18next';

const TutorialsList = () => {
  const { t } = useTranslation('workers');
  const cards: ICard[] = [
    {
      title: t('Worker Quickstart Guide'),
      link:
        'https://forum.videocoin.network/t/quick-guide-setting-up-a-worker-on-videocoin-network-console/38',
      color: '#7234C8',
      light: true,
    },
    {
      title: t('Setting up a Worker on RaspberryPi'),
      link:
        'https://forum.videocoin.network/t/setting-up-a-videocoin-worker-on-raspberrypi',
      color: '#351661',
      light: true,
    },
    {
      title: t('Setting up a Worker on Jetson Nano'),
      link:
        'https://forum.videocoin.network/t/setting-up-a-videocoin-worker-on-jetson-nano',
      color: '#EEE3FF',
      light: false,
    },
  ];
  const renderCards = (card: ICard, idx: number) => (
    <TutorialCard key={idx} card={card} />
  );
  return (
    <Root>
      <Typography type="display3" align="center">
        {t('Learn How Get Started')}
      </Typography>
      <List>{cards.map(renderCards)}</List>
    </Root>
  );
};

export default TutorialsList;
