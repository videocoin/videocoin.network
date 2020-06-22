import React from 'react';
import GenesisPool from './Genesis';
import CashBased from './Cash';
import { Wrapper } from './styles';

const Stakers = () => {
  return (
    <Wrapper>
      <CashBased />
      <GenesisPool />
    </Wrapper>
  );
};

export default Stakers;
