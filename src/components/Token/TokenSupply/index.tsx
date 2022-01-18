import React from 'react';
import v1 from './assets/v1.png';
import v2 from './assets/v2.png';
import decoration from './assets/decoration.svg';
import * as S from './styles';
import Text from 'components/UI/Text';
import Container from 'styles/Container';

const TokenSupply = () => {
  return (
    <Container>
      <Text variant="title2" color="violet50" align="center" marginT={72}>
        Vivid Labs
      </Text>
      <Text variant="display1" align="center">
        Token Supply
      </Text>
      <S.Images>
        <img src={v2} width={439} height={366} alt="" />
        <img src={v1} width={749} height={310} alt="" />
        <S.Card>
          <div />
          <div>
            <Text variant="subtitle" align="center" color="grey90" marginB={12}>
              Token Supply
              <Text align='center' variant="caption" color="grey20" marginT={-4}>
                as of 01/12/2022
              </Text>
            </Text>
            <table>
              <tbody>
                <tr>
                  <td>
                    <Text variant="smallBody">Current Circulation</Text>
                  </td>
                  <td>
                    <Text variant="smallBodyAlt" color="violet50">
                      159.05 Million
                    </Text>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Text variant="smallBody">2022 Lock Up</Text>
                  </td>
                  <td>
                    <Text variant="smallBodyAlt" color="violet50">
                      80 Million
                    </Text>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Text variant="smallBody">Lifetime Token Supply</Text>
                  </td>
                  <td>
                    <Text variant="smallBodyAlt" color="violet50">
                      265 Million
                    </Text>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </S.Card>
        <img src={decoration} alt="" />
      </S.Images>
    </Container>
  );
};

export default TokenSupply;
