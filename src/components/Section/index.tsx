import React, { ReactNode } from 'react';
import Container from 'styles/Container';
import { Wrapper, Inner } from './styles';

const Section = ({
  light = false,
  reverse = false,
  children,
}: {
  light?: boolean;
  reverse?: boolean;
  children: ReactNode;
}) => {
  return (
    <Wrapper $light={light}>
      <Container>
        <Inner $reverse={reverse}>{children}</Inner>
      </Container>
    </Wrapper>
  );
};

export default Section;
