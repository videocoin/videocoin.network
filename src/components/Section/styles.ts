import styled from 'styled-components';

export const Wrapper = styled.div<{ $light?: boolean }>`
  background-color: ${({ $light = false }) => $light && '#2817417a'};
  padding: 64px 0;
`;

export const Inner = styled.div<{ $reverse?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: ${({ $reverse }) => ($reverse ? 'row-reverse' : 'row')};
  & > div {
    div:first-child:not(:last-child) {
      margin-bottom: 16px;
    }
    *:nth-child(3) {
      margin-top: 48px;
    }
  }
  & > div:first-child {
    margin-right: 30px;
    flex: 416px;
    flex-grow: 0;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & > div:last-child {
    flex: 528px;
    flex-grow: 0;
  }
  a {
    margin-top: 48px;
  }
  img {
    max-width: 100%;
  }
`;
