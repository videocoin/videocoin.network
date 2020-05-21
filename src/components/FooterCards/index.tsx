import styled from 'styled-components';

const FooterCards = styled.div`
  display: flex;
  margin: 0 auto;
  padding: 170px 64px 101px;
  justify-content: center;
  background-color: #281741;
  & > div {
    flex: 1;
    &:not(:last-child) {
      margin-right: 75px;
    }
  }
`;

export default FooterCards;
