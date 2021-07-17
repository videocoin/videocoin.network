import styled from 'styled-components';
import { device } from '../../../queries';

export const Root = styled.div`
  padding: 94px 0;
  @media (max-width: 768px) {
    padding-top: 75px;
    padding-bottom: 22px;
  }
  & > div > div {
    justify-content: center;
    align-items: center;
    display: flex;
    & > div {
      &:first-of-type {
        flex-shrink: 0;
        min-width: 519px;
        text-align: center;
        @media ${device.tablet} {
          min-width: auto;
        }
      }
      &:last-child {
        margin-left: 36px;
        @media (max-width: 1024px) {
          margin-left: 0;
          margin-bottom: 54px;
        }
        max-width: 630px;
      }
    }
    @media ${device.tablet} {
      flex-direction: column-reverse;
      text-align: center;
    }
  }
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
`;

export const Btns = styled.div`
  margin-top: 36px;
  display: flex;
  & > *:last-of-type {
    margin-left: 20px;
    @media (max-width: 767px) {
      margin-left: 0;
    }
  }
  @media ${device.tablet} {
    justify-content: center;
  }
  @media ${device.mobile} {
    margin-top: 32px;
    flex-direction: column;
    align-items: center;
    & > a:not(:last-child) {
      margin-bottom: 28px;
    }
  }
`;
