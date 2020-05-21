import styled from 'styled-components';

export const Root = styled.div`
  padding: 92px 0;
  background-color: #281741;
`;

export const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 48px;
  align-items: center;
  & > div:first-child {
    flex: 416px;
    flex-grow: 0;
    flex-shrink: 0;
    margin-right: 30px;
    display: flex;
    justify-content: center;
  }
  & > div:last-child {
    flex: 528px;
    flex-grow: 0;
  }
`;
