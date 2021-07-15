import TutorialCard, { ICard } from './Card';
import { List, Root } from './styles';
import React, { ReactNode } from 'react';
import Container from 'styles/Container';

const renderCards = (card: ICard, idx: number) => (
  <TutorialCard key={idx} card={card} />
);

const Tutorials = ({ header, cards }: { cards: any[]; header: ReactNode }) => {
  return (
    <Root>
      <Container>
        {header}
        <List>{cards.map(renderCards)}</List>
      </Container>
    </Root>
  );
};

export default Tutorials;
