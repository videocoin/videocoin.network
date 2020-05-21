import styled from 'styled-components';
import { Typography } from 'ui-kit';

export const Root = styled.div`
  display: flex;
  padding-top: 240px;
  padding-bottom: 140px;
  justify-content: center;
  align-items: center;
  & > div {
    margin-left: 50px;
    max-width: 752px;
  }
`;

export const Btns = styled.div`
  margin-top: 64px;
`;

export const Subtitle = styled(Typography)`
  margin-bottom: 12px;
  span {
    color: #fd9369;
  }
`;
