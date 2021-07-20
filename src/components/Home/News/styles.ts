import styled from 'styled-components';
import Colors from 'styles/Colors';

export const NewsItem = styled.a`
  display: flex;
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
    div:last-of-type {
      opacity: 0.8;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }
`;
export const Root = styled.div`
  max-width: 1376px;
  margin: 0 auto;
  margin-top: 65px;
`;
export const Inner = styled.div`
  border-radius: 28px 28px 0 0;
  background-color: #ffffff80;
  padding: 20px 20px 0;

  .swiper-container {
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
