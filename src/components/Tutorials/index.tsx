import TutorialCard, { ICard } from './Card';
import { List, Root } from './styles';
import React from 'react';
import Container from 'styles/Container';
import Text from 'components/UI/Text';

const renderCards = (card: ICard, idx: number) => (
  <TutorialCard key={idx} card={card} />
);

const Tutorials = ({ cards }: { cards: any[] }) => {
  return (
    <Root>
      <Container>
        <Text variant="title2" align="center" color="violet50">
          Tutorials
        </Text>
        <Text variant="display1" align="center">
          Learn How Get Started
        </Text>
        <List>{cards.map(renderCards)}</List>
      </Container>
    </Root>
  );
};

export default Tutorials;
