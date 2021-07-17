import styled from 'styled-components';
import { device } from '../../queries';

export const MainNews = styled.div`
  display: flex;
  margin-top: 48px;
  margin-bottom: 24px;
  align-items: center;
  @media ${device.tablet} {
    flex-direction: column;
  }
  & > div:first-of-type {
    max-width: 630px;
    border-radius: 28px;
    margin-right: 36px;
    border: 20px solid #e6e1ec;
    background-color: #e6e1ec;
    @media ${device.tablet} {
      margin-right: 0;
      margin-bottom: 37px;
    }
    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 20px;
    }
  }
  & > div:last-of-type {
    @media ${device.tablet} {
      padding: 0 24px;
    }
  }
`;

export const NewsCard = styled.div`
  @media ${device.tablet} {
    display: flex;
    align-items: center;
    margin-bottom: 48px;
  }
  @media ${device.mobile} {
    flex-direction: column;
    align-items: flex-start;
  }
  & > div:first-of-type {
    height: 224px;
    border-radius: 28px;
    border: 20px solid #e6e1ec;
    background-color: #e6e1ec;
    margin-bottom: 37px;
    @media ${device.tablet} {
      max-width: 318px;
      height: 179px;
      margin-right: 56px;
    }
    @media ${device.mobile} {
      margin-right: 0;
      margin-bottom: 37px;
    }
    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 20px;
      object-position: left center;
    }
  }
  & > div:last-of-type {
    padding: 0 24px;
  }
`;

export const NewsList = styled.div`
  padding: 24px 0;
  margin-bottom: 24px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 36px;
  row-gap: 48px;
  @media ${device.tablet} {
    display: block;
  }
`;
