import styled from 'styled-components';

export const SocialList = styled.div`
  display: flex;
  padding: 40px 10px 0;
  justify-content: center;
`;

export const SocialLink = styled.a.attrs(() => ({
  rel: 'noopener noreferrer',
  target: '_blank',
}))`
  text-transform: capitalize;
  display: flex;
  flex-direction: column;
  text-align: center;
  text-decoration: none;
  opacity: 0.5;
  margin: 15px;
  color: #7f6d99;
  font-size: 14px;
  letter-spacing: 0.62px;
  span {
    font-size: 1.8em;
    margin-bottom: 10px;
  }
`;
