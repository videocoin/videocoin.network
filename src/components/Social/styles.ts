import styled from 'styled-components';
import { device } from '../../queries';

export const SocialList = styled.div``;

export const SocialLink = styled.a.attrs(() => ({
  rel: 'noopener noreferrer',
  target: '_blank',
}))`
  text-transform: capitalize;
  display: flex;
  align-items: center;
  text-decoration: none;
  margin-bottom: 18px;
  color: #ffffffb8;
  font-size: 14px;
  letter-spacing: 0.62px;
  font-weight: 500;
  transition: color 0.15s ease-in-out;
  img {
    margin-right: 24px;
  }
  &:hover {
    color: #fff;
  }
`;
