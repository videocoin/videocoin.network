import React, { ReactNode } from 'react';
import Container from 'styles/Container';
import { Wrapper, Inner } from './styles';

const Section = ({
  light = false,
  reverse = false,
  children,
  mobileReverse = false,
}: {
  light?: boolean;
  reverse?: boolean;
  children: ReactNode;
  mobileReverse?: boolean;
}) => {
  return (
    <Wrapper $light={light}>
      <Container>
        <Inner $reverse={reverse} $mobileReverse={mobileReverse}>
          {children}
        </Inner>
      </Container>
    </Wrapper>
  );
};

export default Section;
