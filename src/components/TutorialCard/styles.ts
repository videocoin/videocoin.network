import styled from 'styled-components';

export const Card = styled.div<{ $color: string }>`
  border-radius: 36px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 44px 40px;
  height: 100%;
  grid-column: span 4;
  background-color: ${({ $color }) => $color};
  box-shadow: 0 8px 20px 0 rgba(12, 4, 23, 0.67);
`;

export const Link = styled.a.attrs(() => ({
  rel: 'noopener noreferrer',
  target: '_blank',
}))`
  margin-top: 24px;
  display: flex;
  align-items: center;
  text-decoration: none;
  svg {
    margin-left: 8px;
  }
`;
