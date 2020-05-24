import React from 'react';
import TutorialCard, { ICard } from 'components/TutorialCard';
import { List } from './styles';

const cards: ICard[] = [
  {
    title: 'Setup a Livestream From the VideoCoin Console',
    link: 'https://docs.videocoin.network/getting-started-1',
    color: '#7234C8',
    light: true,
  },
  {
    title: 'File Transcoding via VideoCoin Console',
    link: 'https://docs.videocoin.network/file-transcoding-with-videocoin',
    color: '#290F4D',
    light: true,
  },
  {
    title: 'File Transcoding via API',
    link: 'https://docs.videocoin.network/developers/vod-stream',
    color: '#EEE3FF',
    light: false,
  },
  {
    title: 'How to Livestream with a GoPro Hero 7',
    link: 'https://medium.com/videocoin/how-to-livestream-with-a-gopro-hero7-on-the-videocoin-network-ab4c3631ad76',
    color: '#EEE3FF',
    light: false,
  },
  {
    title: 'Livestream using OBS',
    link: 'https://docs.videocoin.network/vid-obs',
    color: '#7234C8',
    light: true,
  },
  {
    title: 'Streaming with the Wyze2 Camera',
    link: 'https://docs.videocoin.network/vid-wyze2',
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
