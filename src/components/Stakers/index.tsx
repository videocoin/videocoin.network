import React from 'react';
import GenesisPool from './Genesis';
import CashBased from './Cash';
import { Wrapper, Inner } from './styles';
import Container from 'styles/Container';

const Stakers = () => {
  return (
    <Wrapper>
      <Container>
        <Inner>
          <CashBased />
          <GenesisPool />
        </Inner>
      </Container>
    </Wrapper>
  );
};

export default Stakers;
