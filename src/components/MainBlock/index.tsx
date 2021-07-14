import React, { ReactNode } from 'react';
import Container from 'styles/Container';
import * as S from './styles';
import { TColors } from 'styles/Colors';
import View from 'components/View';
import decoration from './assets/decoration.svg';

const MainBlock = ({
  background,
  left,
  right,
  reverse = false,
}: {
  background?: TColors;
  left: ReactNode;
  right: ReactNode;
  reverse?: boolean;
}) => {
  return (
    <S.Root background={background}>
      <Container>
        <S.Inner reverse={reverse}>
          <div>{left}</div>
          <View paddingV={6} column left>
            <div>{right}</div>
          </View>
          <S.Decoration>
            <img src={decoration} width={569} alt="" />
          </S.Decoration>
        </S.Inner>
      </Container>
    </S.Root>
  );
};

export default MainBlock;
