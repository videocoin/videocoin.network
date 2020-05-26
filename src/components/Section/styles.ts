import styled from 'styled-components';
import { device } from '../../queries';

export const Wrapper = styled.div<{ $light?: boolean }>`
  background-color: ${({ $light = false }) => $light && '#2817417a'};
  padding: 64px 0;
  position: relative;
  @media ${device.mobile} {
    padding-top: 30px;
  }
`;

export const Inner = styled.div<{
  $reverse?: boolean;
  $mobileReverse?: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: ${({ $reverse }) => ($reverse ? 'row-reverse' : 'row')};
  @media ${device.mobile} {
    text-align: center;
    flex-direction: ${({ $mobileReverse }) =>
      $mobileReverse ? 'column-reverse' : 'column'};
  }
  & > div {
    & > div:first-child:not(:last-child) {
      margin-bottom: 16px;
    }
    & > *:nth-child(3) {
      margin-top: 48px;
    }
  }
  & > div:first-child {
    margin-right: ${({ $reverse }) => ($reverse ? 0 : 30)}px;
    flex: 416px;
    flex-grow: 0;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    img {
      object-fit: contain !important;
    }
    @media ${device.tablet} {
      flex: 1;
    }
    @media ${device.mobile} {
      flex: none;
      width: 100%;
      margin: 0 auto;
    }
  }
  & > div:nth-child(2) {
    flex: 528px;
    flex-grow: 0;
    margin-right: ${({ $reverse }) => ($reverse ? 30 : 0)}px;
    @media ${device.tablet} {
      flex: 1;
    }
    @media ${device.mobile} {
      flex: none;
      width: 100%;
      margin: 35px auto;
    }
  }
  a {
    margin-top: 48px;
  }
`;
