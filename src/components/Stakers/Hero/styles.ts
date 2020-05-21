import styled from 'styled-components';
import { Typography } from 'ui-kit';

export const Root = styled.div`
  padding: 290px 0 100px;
  position: relative;
`;
export const Inner = styled.div`
  display: flex;
  justify-content: flex-end;
`;
export const Left = styled.div`
  margin-top: -250px;
`;
export const Right = styled.div`
  max-width: 670px;
  width: 670px;
  flex-shrink: 0;
  margin-left: 70px;
`;

export const Subtitle = styled(Typography)`
  margin-bottom: 12px;
  span {
    color: #fd9369;
  }
`;
export const Title = styled(Typography)`
  margin-bottom: 64px;
  span {
    color: #53eaaa;
  }
`;
