import styled from 'styled-components';
import { device } from '../../queries';
import Colors from 'styles/Colors';

const FooterCards = styled.div`
  padding: 24px 0;
  background-color: ${Colors.white10};
  @media (max-width: 768px) {
    padding-bottom: 64px;
  }
  & > div > div {
    display: flex;
    @media (max-width: 768px) {
      flex-direction: column;
    }
    & > * {
      flex: 1;
    }
  }
  & > div {
    flex: 1;
    @media ${device.tablet} {
      margin: 0 auto;
    }
    &:not(:last-child) {
      margin-right: 32px;
      @media ${device.tablet} {
        margin-right: auto;
        margin-bottom: 170px;
      }
    }
  }
`;

export default FooterCards;
