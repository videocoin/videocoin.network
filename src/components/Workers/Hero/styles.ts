import styled from 'styled-components';
import { Typography } from 'ui-kit';

export const Root = styled.div`
  padding: 250px 0 230px;
  overflow: hidden;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    display: block;
    left: 0;
    bottom: 0;
    height: 190px;
    width: 100%;
    background-image: linear-gradient(
      180deg,
      rgba(28, 9, 55, 0) 0%,
      #1c0937 100%
    );
  }
`;
export const Inner = styled.div`
  display: flex;
  justify-content: flex-end;
`;
export const Left = styled.div``;
export const Right = styled.div`
  max-width: 670px;
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

export const Bg = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  img {
    width: 2300px;
    height: 100%;
  }
`;
