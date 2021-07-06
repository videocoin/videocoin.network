import styled from 'styled-components';
import { device } from '../../../../queries';

export const Root = styled.div`
  padding: 133px 0 100px;
  @media (max-width: 1024px) {
    padding: 72px 0;
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
export const Inner = styled.div`
  display: flex;
  justify-content: center;
  @media ${device.tablet} {
    flex-direction: column;
    text-align: center;
  }
`;
export const Left = styled.div`
  max-width: 631px;
  margin-right: 162px;
  @media ${device.tablet} {
    text-align: center;
    max-width: 100%;
    margin-right: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
export const Right = styled.div`
  @media ${device.tablet} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
