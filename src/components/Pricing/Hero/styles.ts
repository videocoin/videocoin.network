import styled from 'styled-components';
import { device } from '../../../queries';

export const Root = styled.div`
  padding-top: 100px;
  padding-bottom: 95px;
  background: linear-gradient(
      180deg,
      #ffffff 11.51%,
      rgba(255, 255, 255, 0) 100%
    ),
    radial-gradient(
      27.6% 43.78% at 86.81% 100%,
      rgba(255, 74, 122, 0.15) 0%,
      rgba(245, 53, 104, 0) 100%
    ),
    radial-gradient(
      42.56% 79.71% at 56.94% 100%,
      rgba(114, 52, 200, 0.15) 0%,
      rgba(144, 86, 228, 0) 100%
    ),
    radial-gradient(
      36.18% 61.44% at 100% 0%,
      rgba(255, 138, 60, 0.05) 0%,
      rgba(255, 138, 60, 0) 100%
    ),
    linear-gradient(180deg, #ffffff 0%, #f2f0f4 100%);
  @media ${device.mobile} {
    padding: 50px 0;
  }
`;

export const Inner = styled.div`
  display: flex;
  @media ${device.mobile} {
    flex-direction: column-reverse;
  }
`;

export const Right = styled.div`
  padding-left: 120px;
  padding-top: 30px;
  @media ${device.tablet} {
    padding-left: 32px;
    padding-top: 0;
  }
  @media ${device.mobile} {
    padding-left: 0;
    text-align: center;
  }
  & > div:last-child {
    display: flex;
    @media ${device.tablet} {
      flex-direction: column;
    }
  }
`;

export const Text = styled.div`
  max-width: 530px;
  margin-bottom: 36px;
  & > div:first-child {
    margin-bottom: 8px;
  }
`;

export const PriceCard = styled.div`
  min-width: 324px;
  position: relative;
  @media ${device.tablet} {
    flex-shrink: 0;
  }
  @media ${device.mobile} {
    width: 100%;
    margin-bottom: 36px;
  }
`;

export const PriceCardValue = styled.div`
  padding-left: 36px;
  position: relative;
  margin-bottom: 31px;
  &::before {
    position: absolute;
    left: 0;
    content: '';
    height: 100%;
    width: 8px;
    border-radius: 4px;
    background: #4e238e;
  }
`;

export const PriceCardFeatures = styled.ul`
  font-weight: 500;
  line-height: 1.5;
  list-style: disc;
  margin-left: 53px;
  margin-bottom: 64px;
  li {
    &:not(:last-child) {
      margin-bottom: 4px;
    }
  }
`;
