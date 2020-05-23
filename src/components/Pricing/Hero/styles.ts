import styled from 'styled-components';
import { device } from '../../../queries';

export const Root = styled.div`
  padding-top: 201px;
  padding-bottom: 95px;
  @media ${device.mobile} {
    padding-top: 136px;
    padding-bottom: 50px;
  }
`;

export const Inner = styled.div`
  display: flex;
  @media ${device.mobile} {
    flex-direction: column;
  }
`;

export const Right = styled.div`
  padding-left: 143px;
  padding-top: 30px;
  @media ${device.tablet} {
    padding-left: 32px;
    padding-top: 0;
  }
  @media ${device.mobile} {
    padding-left: 0;
  }
  & > div:last-child {
    @media ${device.tablet} {
      display: flex;
      flex-direction: column;
      div:last-child {
        margin-top: 25px;
        button {
          padding-left: 0;
          padding-right: 0;
        }
      }
    }
    @media ${device.mobile} {
      align-items: center;
      div:last-child {
        margin-left: -9px;
      }
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
  background: #d6c4f1;
  border-radius: 25px;
  padding: 36px 36px 13px;
  width: 304px;
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
