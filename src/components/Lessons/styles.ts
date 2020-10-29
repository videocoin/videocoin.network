import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  margin-bottom: 48px;
  & > div {
    &:first-child {
      margin-right: 48px;
    }
  }
  a {
    display: inline-block;
    margin-top: 24px;
  }
`;

export const LessonsList = styled.div`
  margin-top: 32px;
  a {
    display: inline-block;
    margin-top: auto;
  }
`;

export const LessonCard = styled.div`
  display: flex;
  margin-bottom: 48px;

  & > div {
    &:first-child {
      margin-right: 48px;
    }
    &:last-child {
      display: flex;
      flex-direction: column;
    }
  }
`;
