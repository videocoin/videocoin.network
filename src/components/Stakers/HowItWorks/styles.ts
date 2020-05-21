import styled from 'styled-components';

export const Root = styled.div`
  padding: 100px 0;
`;

export const List = styled.ul`
  display: flex;
  margin-top: 64px;
  justify-content: center;
`;

export const StepItem = styled.li`
  display: flex;
  flex: 1;
  max-width: 400px;
  &:not(:last-child) {
    margin-right: 48px;
  }
  & > div:last-child {
    div:first-child {
      margin-bottom: 12px;
    }
  }
  a {
    color: #fd9369;
  }
`;

export const StepN = styled.div`
  width: 48px;
  height: 48px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin-right: 48px;
  background-color: #3f2a5d;
  border: 1px solid #c5a4e7;
`;
