import styled from 'styled-components';
import { device } from '../../../queries';

export const Root = styled.div`
  padding: 133px 0 131px;
  overflow: hidden;
  position: relative;
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
  @media ${device.tablet} {
    padding-top: 92px;
    padding-bottom: 92px;
  }
  @media ${device.mobile} {
    padding-top: 52px;
    padding-bottom: 72px;
  }
`;
export const Inner = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  @media ${device.tablet} {
    align-items: center;
    flex-direction: column-reverse;
    justify-content: center;
  }
`;
export const Left = styled.div`
  display: none;
  @media (max-width: 1024px) {
    display: flex;
    justify-content: center;
    margin-top: 87px;
  }
  @media (max-width: 768px) {
    margin-top: 53px;
    img {
      max-width: 300px;
    }
  }
`;
export const Right = styled.div`
  max-width: 670px;
  margin-right: 72px;
  @media ${device.tablet} {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Bg = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  @media ${device.tablet} {
    display: none;
  }
  img {
    width: 2400px;
    height: 785px;
  }
`;
