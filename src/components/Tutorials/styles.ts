import styled from 'styled-components';
import { device } from '../../queries';
import Colors from 'styles/Colors';

export const Root = styled.div`
  padding: 80px 0;
  background-color: ${Colors.white20};
`;

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 36px;
  margin-top: 42px;
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${device.mobile} {
    display: flex;
    flex-direction: column;
  }
`;

export const Link = styled.a.attrs<{ light?: boolean }>(() => ({
  rel: 'noopener noreferrer',
  target: '_blank',
}))`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  cursor: pointer;
  height: 100%;
  justify-content: flex-end;
  .arrow {
    margin-left: 8px;
    width: 24px;
    height: 24px;
    background-image: url(${({ light }) =>
      light
        ? "\"data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8 4l9 8.296L8 20' stroke='%23FFFFFF' stroke-width='2' stroke-linejoin='bevel'/%3E%3C/svg%3E%0A\""
        : "\"data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8 4l9 8.296L8 20' stroke='%23290F4D' stroke-width='2' stroke-linejoin='bevel'/%3E%3C/svg%3E%0A\""});
  }
`;

export const CardItem = styled.div`
  min-height: 320px;
  @media (max-width: 768px) {
    min-height: auto;
  }
  & > div {
    .content {
      justify-content: flex-end;
    }
  }
`;
