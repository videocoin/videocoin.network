import styled from 'styled-components';

export const Root = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 133px 80px 120px;
`;

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(12, auto);
  grid-column-gap: 32px;
  grid-row-gap: 72px;
  grid-auto-rows: 406px;
  margin-top: 72px;
  @media (max-width: 1024px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
