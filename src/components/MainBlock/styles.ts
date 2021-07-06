import styled from 'styled-components';
import Colors, { TColors } from 'styles/Colors';
import { device } from '../../queries';

export const Root = styled.div<{ background?: TColors }>`
  background: ${({ background }) => background && Colors[background]};
  padding: 80px 0;
  overflow: hidden;
  @media (max-width: 768px) {
    padding: 40px 0;
  }
`;

export const Decoration = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
`;

export const Inner = styled.div<{ reverse: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  z-index: 1;
  flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
  & > div:first-of-type {
    flex-shrink: 0;
    margin-right: ${({ reverse }) => (reverse ? '0px' : '56px')};
    @media (max-width: 1024px) {
      margin-bottom: 50px;
      margin-right: 0;
    }
  }
  & > div:nth-child(2) {
    max-width: 630px;
    margin-right: ${({ reverse }) => (reverse ? '56px' : '0px')};
    @media (max-width: 1024px) {
      margin-right: 0;
      align-items: center;
    }
  }
  @media ${device.tablet} {
    flex-direction: column;
    text-align: center;
  }
  ${Decoration} {
    left: ${({ reverse }) => (reverse ? '77.8%' : '-21.5%')};
  }
`;
