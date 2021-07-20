import styled from 'styled-components';
import { device } from '../../queries';
import Colors, { TColors } from 'styles/Colors';

export const Root = styled.div<{ color?: TColors }>`
  padding: 36px 0;
  background: ${({ color = 'white10' }) => color && Colors[color]};
`;

export const List = styled.ul`
  display: flex;
  padding: 32px 0;
  align-items: flex-start;
  @media ${device.tablet} {
    flex-direction: column;
    max-width: 672px;
    margin: 0 auto;
  }
  @media ${device.mobile} {
    max-width: 100%;
  }
`;

export const StepItem = styled.li`
  display: flex;
  flex: 1;
  @media ${device.tablet} {
    max-width: 100%;
  }
  &:not(:last-child) {
    margin-right: 36px;
    @media ${device.tablet} {
      margin-right: 0;
      margin-bottom: 47px;
    }
  }
  a {
    color: ${Colors.violet50};
  }
`;

export const StepN = styled.div`
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  position: relative;
  img {
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
  }
`;
