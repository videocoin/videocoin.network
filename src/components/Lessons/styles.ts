import styled from 'styled-components';
import { device } from '../../queries';

export const Header = styled.div`
  display: flex;
  margin-bottom: 48px;
  & > div {
    &:first-child {
      margin-right: 48px;
    }
  }
  a {
    display: inline-block;
    margin-top: 24px;
  }
  @media ${device.smTablet} {
    flex-direction: column;
    img {
      max-width: 100%;
      display: block;
      margin-top: 24px;
    }
  }
`;

export const LessonsList = styled.div`
  margin-top: 32px;
  a {
    display: inline-block;
    margin-top: auto;
  }
`;

export const LessonCard = styled.div`
  display: flex;
  margin-bottom: 48px;

  & > div {
    &:first-child {
      margin-right: 48px;
      @media ${device.smTablet} {
        margin-right: 0;
      }
    }
    &:last-child {
      display: flex;
      flex-direction: column;
    }
  }
  .gatsby-image-wrapper {
    width: 400px;
  }
  @media ${device.smTablet} {
    flex-direction: column;
    .gatsby-image-wrapper {
      width: 100%;
      margin-bottom: 12px;
    }
    a {
      margin-top: 12px;
    }
  }
`;
