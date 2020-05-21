import styled from 'styled-components';
import { Typography } from 'ui-kit';

export const Bg = styled.div`
  text-align: center;
  margin-bottom: -250px;
  padding-right: 100px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  img {
  }
`;

export const Wrapper = styled.div`
  max-width: 680px;
  margin: 0 auto;
  text-align: center;
  padding-bottom: 50px;
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
`;
export const ApiCard = styled.div`
  background-color: #290f4d;
  border-radius: 16px;
  border: 2px solid #4e238e;
  padding: 36px;
  flex: 1;
  & > div:first-child {
    margin-bottom: 8px;
    padding-left: 72px;
  }
  & > div:nth-child(2) {
    margin-bottom: 28px;
    padding-left: 72px;
  }
  & > div:last-child {
    margin-left: 38px;
  }
  &:first-child {
    margin-right: 34px;
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
  & > img {
    flex: 416px;
    flex-grow: 0;
    margin-right: 30px;
  }
  & > div {
    flex: 528px;
    flex-grow: 0;
  }
`;

export const SFooterCards = styled.div`
  display: flex;
  max-width: 1440px;
  margin: 0 auto;
  padding: 170px 64px 101px;
  & > div {
    flex: 1;
    &:not(:last-child) {
      margin-right: 32px;
    }
  }
`;

export const DemoSection = styled.div<{ $disabled?: boolean }>`
  display: flex;
  margin-bottom: 100px;
  opacity: ${({ $disabled }) => ($disabled ? 0.48 : 1)};
`;

export const DemoSectionLeft = styled.div`
  flex: 445px;
  flex-grow: 0;
  padding-right: 25px;
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
`;
export const DemoRoot = styled.div`
  padding-top: 140px;
`;
export const DemoSectionTitle = styled(Typography)`
  margin-bottom: 36px;
  margin-top: 4px;
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
`;

export const Player = styled.div`
  width: 100%;
  height: 360px;
  margin-top: 22px;
  border-radius: 4px;
  overflow: hidden;
`;

export const OfflinePlayer = styled.div`
  width: 100%;
  height: 360px;
  margin-top: 22px;
  background-color: #0c0417;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
