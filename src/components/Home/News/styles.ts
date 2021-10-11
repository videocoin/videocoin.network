import styled from 'styled-components';
import Colors from 'styles/Colors';
import Text from 'components/UI/Text';

export const NewsItem = styled.a`
  display: flex;
  align-items: center;
  & > div:first-of-type {
    margin-right: 24px;
    width: 192px;
    flex-shrink: 0;
    @media (max-width: 768px) {
      width: 127px;
    }
    img {
      object-fit: cover;
      border-radius: 6px;
      @media (max-width: 768px) {
        width: 100%;
        height: 63px;
      }
    }
  }
  & > div:last-of-type {
    overflow: hidden;
    div:nth-of-type(2) {
      opacity: 0.8;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }
  .gatsby-image-wrapper {
    @media (max-width: 768px) {
      max-width: 100%;
      width: 100%;
    }
  }
`;
export const Root = styled.div`
  max-width: 1376px;
  margin: 0 auto;
`;
export const Inner = styled.div`
  border-radius: 28px 28px 0 0;
  background-color: #ffffff80;
  padding: 20px 20px 0;

  .swiper {
    padding: 20px 20px 40px;
    border-radius: 28px 28px 0 0;
    background-color: #fff;
  }
  .swiper-pagination {
    display: flex;
    justify-content: space-between;
    padding: 0 16px;
    bottom: 20px;
  }
  .swiper-pagination-bullet {
    flex: 1;
    border-radius: 4px;
    background-color: ${Colors.grey30};
    height: 4px;
    margin: 0;
    width: 100%;
    &:not(:last-of-type) {
      margin-right: 12px;
    }
  }
  .no-wrap {
    white-space: nowrap;
  }
`;

export const Controls = styled.div`
  display: flex;
  align-items: center;
  padding-left: 40px;
  margin-bottom: 8px;
  button {
    border: none;
    width: 28px;
    height: 28px;
    background-color: ${Colors.white0};
    border-radius: 8px;
    padding-top: 2px;
    &:disabled {
      svg {
        opacity: 0.5;
      }
    }
    &:nth-child(2) {
      margin-right: 12px;
      svg {
        transform: rotate(180deg);
      }
    }
  }
`;

export const SourceTitle = styled(Text)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex-shrink: 1;
`;

export const Date = styled(Text)`
  white-space: nowrap;
  flex-shrink: 0;
`;
