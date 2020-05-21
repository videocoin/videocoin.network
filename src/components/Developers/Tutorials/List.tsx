import React from 'react';
import TutorialCard, { ICard } from 'components/TutorialCard';
import { List } from './styles';

const cards: ICard[] = [
  {
    title: 'Setup a Livestream From the VideoCoin Studio',
    link: '#',
    color: '#7234C8',
    light: true,
  },
  {
    title: 'File Transcoding via VideoCoin Studio',
    link: '#',
    color: '#290F4D',
    light: true,
  },
  {
    title: 'File Transcoding via API',
    link: '#',
    color: '#EEE3FF',
    light: false,
  },
  {
    title: 'How to Livestream with a GoPro Hero 7',
    link: '#',
    color: '#EEE3FF',
    light: false,
  },
  {
    title: 'Livestream using OBS',
    link: '#',
    color: '#7234C8',
    light: true,
  },
  {
    title: 'Streaming with the Wyze2 Camera',
    link: '#',
    color: '#281741',
    light: true,
  },
];

const TutorialsList = () => {
  const renderCards = (card: ICard, idx: number) => (
    <TutorialCard key={idx} card={card} />
  );
  return <List>{cards.map(renderCards)}</List>;
};

export default TutorialsList;
