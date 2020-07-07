import TutorialCard, { ICard } from 'components/TutorialCard';
import { List, Root } from './styles';
import React from 'react';
import { Typography } from 'ui-kit';
import { useTranslation } from 'react-i18next';

const TutorialsList = () => {
  const { t } = useTranslation('staking');
  const cards: ICard[] = [
    {
      title: t('Stakers Quickstart Guide'),
      link:
        'https://forum.videocoin.network/t/videocoin-network-staking-guide/72',
      color: '#7234C8',
      light: true,
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
