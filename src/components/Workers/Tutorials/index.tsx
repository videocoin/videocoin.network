import TutorialCard, { ICard } from 'components/TutorialCard';
import { List, Root } from './styles';
import React from 'react';
import { Typography } from 'ui-kit';

const cards: ICard[] = [
  {
    title: 'Worker Quickstart Guide',
    link: '#',
    color: '#7234C8',
    light: true,
  },
  {
    title: 'Setting up a Worker on RaspberryPi',
    link: '#',
    color: '#351661',
    light: true,
  },
  {
    title: 'Setting up a Worker on Jetson Nano',
    link: '#',
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
