import styled from 'styled-components';

export const Root = styled.div`
  padding: 64px 80px 120px;
  background-color: #281741;
`;

export const List = styled.div`
  max-width: 1440px;
  margin: 72px auto 0;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 32px;
  grid-row-gap: 72px;
  grid-auto-rows: 406px;
  @media (max-width: 1024px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
