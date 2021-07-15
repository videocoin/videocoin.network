import React from 'react';
import Container from 'styles/Container';
import Text from 'components/UI/Text';
import Button from 'components/UI/Button';
import View from 'components/View';
import styled from 'styled-components';
import Colors from 'styles/Colors';
import { useBreakpoint } from 'components/BrealpointProvider';

export const Root = styled.div`
  background: ${Colors.white10};
  padding-top: 48px;
  padding-bottom: 56px;
`;

export const Inner = styled.div`
  position: relative;
  padding: 20px;
  & > div {
    padding: 10px 20px;
    border-radius: 20px;
    background: ${Colors.grey90};
    justify-content: center;
    display: flex;
    align-items: center;
    width: 100%;
    position: relative;
    z-index: 1;
    @media (max-width: 1024px) {
      padding: 20px;
      flex-direction: column;
      text-align: center;
    }
  }
  & > span {
    border-radius: 32px;
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    background: rgba(206, 197, 218, 0.5);
    width: 100%;
    height: 100%;
  }
`;

const Join = () => {
  const { tablet } = useBreakpoint();
  return (
    <Root>
      <Container>
        <Inner>
          <div>
            <Text variant="subtitle" withGradient>
              Check our Community forum to chat with others if you need help
            </Text>
            <View marginT={tablet ? 20 : 0} marginL={tablet ? 0 : 33}>
              <a
                href="https://forum.videocoin.network"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button simple>Join Community</Button>
              </a>
            </View>
          </div>
          <span />
        </Inner>
      </Container>
    </Root>
  );
};

export default Join;
