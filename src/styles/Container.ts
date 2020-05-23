import styled from 'styled-components';
import { device } from '../queries';

const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 40px;
  @media ${device.mobile} {
    padding: 0 24px;
  }
`;

export default Container;
