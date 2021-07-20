import styled from 'styled-components';
import { device } from '../../queries';
import Colors from 'styles/Colors';
export const Wrapper = styled.div`
  padding-bottom: 105px;
  padding-top: 19px;
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
  a {
    text-align: center;
    padding: 0 37px;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-self: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    @media ${device.mobile} {
      width: 100%;
      padding: 0;
      min-height: auto;
    }
    &:first-of-type {
      &::after {
        content: '';
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 1px;
        height: 447px;
        background: ${Colors.violet90};
        @media (max-width: 768px) {
          display: none;
        }
      }
    }
  }
`;

export const Inner = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const Section = styled.div`
  padding: 24px 0;
`;
