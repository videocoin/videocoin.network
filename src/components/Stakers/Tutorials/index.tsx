import TutorialCard, { ICard } from 'components/TutorialCard';
import { List, Root } from './styles';
import React from 'react';
import { Typography } from 'ui-kit';

const cards: ICard[] = [
  {
    title: 'Stakers Quickstart Guide',
    link: 'https://forum.videocoin.network/t/videocoin-network-staking-guide/72',
    color: '#7234C8',
    light: true,
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
