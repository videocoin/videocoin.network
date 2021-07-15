import styled from 'styled-components';
import { device } from '../../queries';
import Colors from 'styles/Colors';

export const SocialList = styled.div``;

export const SocialLink = styled.a.attrs(() => ({
  rel: 'noopener noreferrer',
  target: '_blank',
}))`
  text-transform: capitalize;
  display: flex;
  align-items: center;
  text-decoration: none;
  margin-bottom: 8px;
  color: ${Colors.violet10};
  font-size: 16px;
  line-height: 2;
  font-weight: 500;
  transition: color 0.15s ease-in-out;
  img {
    margin-right: 24px;
  }
  &:hover {
    color: #fff;
  }
`;
