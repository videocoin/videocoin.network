import styled from 'styled-components';
import Colors, { TColors } from 'styles/Colors';
import { device } from '../../queries';
import BaseText from 'components/UI/Text';

export const Root = styled.div<{ background?: TColors }>`
  background-color: ${({ background = 'white0' }) => Colors[background]};
  padding-top: 48px;
`;
export const NftRoot = styled.div<{ background?: TColors }>`
  background: linear-gradient(
    90deg,
    rgb(228, 226, 231) 0%,
    rgb(205, 200, 214) 50%
  );
  padding-top: 48px;
`;

export const Features = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 36px;
  padding: 32px 0;
  & > div {
    max-width: 406px;
    grid-column: span 2;
    height: auto;
    &:last-child:nth-child(3n - 1) {
      grid-column-end: -2;
      @media (max-width: 768px) {
        grid-column-end: auto;
      }
    }
    &:nth-last-child(2):nth-child(3n + 1) {
      grid-column-end: 4;
      @media (max-width: 768px) {
        grid-column-end: auto;
      }
    }
    &:last-child:nth-child(3n - 2) {
      grid-column-end: 5;
      @media (max-width: 768px) {
        grid-column-end: auto;
      }
    }
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Roadmap = styled.div`
  background-color: ${Colors.white0};
  padding: 58px 0 33px;
  & > div:last-of-type {
    & > div > div {
      @media (max-width: 1024px) {
        flex-direction: column-reverse;
      }
      & > div:nth-child(2) {
        @media (max-width: 1024px) {
          margin-bottom: 20px;
        }
      }
    }
  }
`;
export const Team = styled.div`
  padding-top: 68px;
  background-color: ${Colors.white10};
`;

export const Portrait = styled.div`
  background-color: ${Colors.white0};
  padding: 8px;
  border: 2px solid ${Colors.grey70};
  border-radius: 24px;
  flex-shrink: 0;
  img {
    border-radius: 16px;
  }
`;

export const Halsey = styled.div`
  display: flex;
  padding: 0 111px;
  align-items: center;
  padding-top: 24px;
  padding-bottom: 36px;
  & > div:first-of-type {
    width: 228px;
    height: 228px;
    margin-right: 56px;
    @media (max-width: 768px) {
      margin-right: 0;
      margin-bottom: 36px;
    }
  }
  @media (max-width: 768px) {
    padding: 0;
    flex-direction: column;
    text-align: center;
    margin-bottom: 36px;
  }
`;
export const TeamMembers = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 12px -26px -24px;
`;
export const TeamCard = styled.div`
  padding: 24px 30px;
  margin-bottom: 36px;
  max-width: 337px;
  text-align: center;
  @media (max-width: 768px) {
    width: 45%;
    padding: 16px 10px;
  }
`;

export const Partners = styled.div`
  padding-top: 68px;
  padding-bottom: 71px;
  background-color: ${Colors.white20};
  overflow: hidden;
  & > div > div {
    position: relative;
    z-index: 1;
    max-width: 1073px;
    margin: 0 auto;
  }
`;

export const PartnersList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
  margin-bottom: -25px;
  @media (max-width: 768px) {
    margin-bottom: -20px;
  }
  & > * {
    margin: 0 25px 35px;
    @media (max-width: 768px) {
      margin: 0 16px 22px;
      max-width: 35%;
    }
  }
`;

export const Decoration = styled.div`
  position: absolute;
  left: -44%;
  top: 18%;
  z-index: -1;
`;

export const Title = styled(BaseText)`
  font-size: 62px;
  letter-spacing: -0.5px;
`;

export const Hero = styled.div`
  @media (max-width: 768px) {
    padding-top: 75px;
  }
  & > div:first-of-type > div {
    justify-content: flex-end;
    align-items: center;
    display: flex;
    @media (max-width: 768px) {
      justify-content: center;
    }
    & > div {
      &:first-of-type {
        flex-shrink: 0;
        @media (max-width: 768px) {
          margin-bottom: 24px;
        }
      }
      &:last-child {
        margin-left: 36px;
        min-width: 694px;
        @media (max-width: 1024px) {
          margin-left: 0;
          margin-bottom: 48px;
          min-width: auto;
          align-items: center;
        }
      }
    }
    @media ${device.tablet} {
      flex-direction: column;
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

export const Text = styled.div`
  opacity: 0.8;
`;

export const PartnersCard = styled.div`
  border-radius: 36px;
  padding: 36px;
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    padding: 20px;
    margin: 0 -18px;
  }
  .content {
    background-color: ${Colors.grey90};
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: 1;
    height: 100%;
    border-radius: 27px;
    padding: 24px 10px;
    display: flex;
    flex-direction: column;
    flex: 1;
    @media (max-width: 768px) {
      padding: 16px;
    }
  }
  .top-border {
    border-radius: 36px;
    display: block;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    position: absolute;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.73) 0%,
      rgba(255, 255, 255, 0) 100%
    );
  }
  .middle-border {
    border-radius: 36px;
    display: block;
    width: calc(100% - 2px);
    height: calc(100% - 2px);
    background: #cec5da80;
    position: absolute;
    left: 1px;
    top: 1px;
    z-index: 1;
  }
`;

export const Position = styled(BaseText)`
  white-space: pre-wrap;
`;

export const Plus = styled.div`
  display: inline-block;
  transform: translateY(-5px);
  color: #5d2bb6;
`;

export const InlinePlus = styled.strong`
  sup {
    position: relative;
    top: 6px;
    color: #5d2bb6;
  }
`;

export const HeroText = styled(BaseText)`
  max-width: 89%;
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;
