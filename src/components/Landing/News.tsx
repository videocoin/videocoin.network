import React from 'react';
import * as S from './styles';
const News = () => {
  return (
    <S.News>
      <S.NewsLabel>News</S.NewsLabel>
      <div>
        <S.NewsLink
          target="_blank"
          href="https://medium.com/p/ba75c30010e3"
          rel="noopener noreferrer"
        >
          The VideoCoin Network commences integration with Filecoin to power the
          Video NFT market.
        </S.NewsLink>
      </div>
    </S.News>
  );
};

export default News;
