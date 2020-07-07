import styled from 'styled-components';
import { Typography } from 'ui-kit';
import { device } from '../../queries';

export const HeroRoot = styled.div`
  margin-top: -92px;
`;

export const Bg = styled.div`
  text-align: center;
  margin-bottom: -250px;
  padding-right: 100px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  @media ${device.tablet} {
    margin-bottom: 0;
    padding-right: 0;
    img {
      margin-right: -30px;
    }
  }
  @media ${device.tablet} {
    img {
      margin-right: 0;
    }
  }
`;

export const Wrapper = styled.div`
  max-width: 680px;
  margin: 0 auto;
  text-align: center;
  padding-bottom: 50px;
`;

export const SLogo = styled.div`
  @media ${device.tablet} {
    display: none;
  }
`;

export const Title = styled(Typography)`
  margin-bottom: 16px;
  margin-top: 62px;
`;

export const Btns = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 48px;
  margin-bottom: 32px;
  @media ${device.mobile} {
    flex-direction: column;
    & > *:first-child {
      margin-bottom: 36px;
    }
  }
`;

export const Footer = styled(Typography)`
  max-width: 230px;
  margin: 0 auto;
  opacity: 0.76;
  strong {
    font-weight: 500;
  }
`;

export const ApiRoot = styled.div`
  padding-top: 92px;
  padding-bottom: 46px;
`;

export const ApiDesc = styled.div`
  max-width: 638px;
  margin: 0 auto 56px;
  text-align: center;
  & > div:first-child {
    margin-bottom: 20px;
  }
`;

export const ApiCards = styled.div`
  display: flex;
  @media ${device.tablet} {
    flex-direction: column;
    align-items: center;
  }
`;
export const ApiCard = styled.div`
  background-color: #290f4d;
  border-radius: 16px;
  border: 2px solid #4e238e;
  padding: 36px;
  flex: 1;
  position: relative;
  @media ${device.tablet} {
    flex: none;
    max-width: 508px;
    margin: 0 auto;
  }
  @media ${device.mobile} {
    padding: 36px 24px;
    margin: 0 -14px;
    width: calc(100% + 28px);
  }
  & > div:first-child {
    margin-bottom: 8px;
    padding-left: 72px;
    @media ${device.mobile} {
      padding-left: 0;
    }
  }
  & > div:nth-child(2) {
    margin-bottom: 28px;
    padding-left: 72px;
    @media ${device.mobile} {
      padding-left: 0;
    }
  }
  & > a:nth-child(3) {
    margin-left: 38px;
    @media ${device.mobile} {
      margin-left: -30px;
      margin-right: -20px;
    }
  }
  &:first-child {
    margin-right: 34px;
    @media ${device.tablet} {
      margin-bottom: 40px;
      margin-right: auto;
    }
    @media ${device.mobile} {
      margin: 0 -14px;
      margin-bottom: 40px;
    }
  }
`;

export const ApiIcon = styled.div`
  position: absolute;
  left: 36px;
  top: 36px;
  @media ${device.mobile} {
    display: none;
  }
`;

export const GreenSolutionRoot = styled.div`
  padding: 92px 0;
  background-color: #281741;
`;

export const GreenSolutionInner = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 48px;
  align-items: center;
  @media ${device.mobile} {
    flex-direction: column;
    text-align: center;
  }
  & > div:first-child {
    flex: 416px;
    flex-grow: 0;
    margin-right: 30px;
    @media ${device.tablet} {
      flex: 1;
    }
    @media ${device.mobile} {
      flex: none;
      width: 100%;
      margin-bottom: 32px;
      margin-right: auto;
    }
  }
  & > div:last-child {
    flex: 528px;
    flex-grow: 0;
    @media ${device.tablet} {
      flex: 1;
    }
    @media ${device.mobile} {
      flex: none;
    }
  }
`;

export const DemoSectionTitle = styled(Typography)`
  margin-bottom: 36px;
  margin-top: 4px;
  @media ${device.tablet} {
    margin-bottom: 0;
  }
  @media ${device.mobile} {
    display: none;
  }
`;

export const DemoSection = styled.div<{ $disabled?: boolean }>`
  display: flex;
  margin-bottom: 100px;
  opacity: ${({ $disabled }) => ($disabled ? 0.48 : 1)};
  @media ${device.tablet} {
    flex-direction: column;
    margin-bottom: 56px;
  }
  &:last-child {
    ${DemoSectionTitle} {
      @media ${device.mobile} {
        display: block;
        font-size: 16px;
        color: #ccb1f2;
        font-weight: 500;
      }
    }
  }
`;

export const DemoSectionLeft = styled.div`
  flex: 445px;
  flex-grow: 0;
  padding-right: 25px;
  @media ${device.tablet} {
    flex: none;
    padding-right: 0;
    margin-bottom: 28px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  @media ${device.mobile} {
    margin-bottom: 0;
  }
`;
export const DemoSectionRight = styled.div`
  flex: 1;
`;

export const CodeSection = styled.div`
  white-space: pre;
  background-color: #290f4d;
  border-radius: 16px;
  padding: 28px 42px;
  margin-top: 18px;
  @media ${device.mobile} {
    display: none;
  }
`;
export const DemoRoot = styled.div`
  padding-top: 140px;
`;

export const DemoSectionParams = styled.div`
  @media ${device.mobile} {
    display: none;
  }
`;

export const DemoStreamStatus = styled.div<{ $ready: boolean }>`
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  color: #ccb1f27a;
  margin-top: 56px;
  &::before {
    content: '';
    border-radius: 50%;
    width: 30px;
    margin-right: 13px;
    height: 30px;
    background-color: ${({ $ready }) => ($ready ? '#2CC383' : '#0c0417')};
    border: 1px solid #2d1153;
  }
  @media ${device.mobile} {
    margin-top: 32px;
  }
`;
export const PlayerWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
  margin-top: 22px;
  & > div {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
`;
export const Player = styled.div`
  width: 100%;
  margin-top: 22px;
  border-radius: 4px;
  overflow: hidden;
`;

export const OfflinePlayer = styled.div`
  background-color: #0c0417;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Request = styled(Typography)`
  @media ${device.tablet} {
    display: none;
  }
`;
