import TutorialCard, { ICard } from 'components/TutorialCard';
import { List, Root } from './styles';
import React from 'react';
import { Typography } from 'ui-kit';

const cards: ICard[] = [
  {
    title: 'Worker Quickstart Guide',
    link: 'https://forum.videocoin.network/t/quick-guide-setting-up-a-worker-on-console',
    color: '#7234C8',
    light: true,
  },
  {
    title: 'Setting up a Worker on RaspberryPi',
    link: 'https://forum.videocoin.network/t/setting-up-a-videocoin-worker-on-raspberrypi',
    color: '#351661',
    light: true,
  },
  {
    title: 'Setting up a Worker on Jetson Nano',
    link: 'https://forum.videocoin.network/t/setting-up-a-videocoin-worker-on-jetson-nano',
    color: '#EEE3FF',
    light: false,
  },
];

const TutorialsList = () => {
  const renderCards = (card: ICard, idx: number) => (
    <TutorialCard key={idx} card={card} />
  );
  return (
    <Root>
      <Typography type="display3" align="center">
        Learn How Get Started
      </Typography>
      <List>{cards.map(renderCards)}</List>
    </Root>
  );
};

export default TutorialsList;
