import styled from 'styled-components';
import { device } from '../../queries';

const FooterCards = styled.div`
  display: flex;
  margin: 0 auto;
  padding: 170px 64px 101px;
  justify-content: center;
  background-color: #281741;
  @media ${device.tablet} {
    flex-direction: column;
  }
  @media ${device.mobile} {
    background-color: transparent;
    padding: 170px 0 100px;
  }
  & > div {
    flex: 1;
    @media ${device.tablet} {
      margin: 0 auto;
    }
    &:not(:last-child) {
      margin-right: 75px;
      @media ${device.tablet} {
        margin-right: auto;
        margin-bottom: 170px;
      }
    }
  }
`;

export default FooterCards;
