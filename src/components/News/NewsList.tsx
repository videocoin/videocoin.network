import React from 'react';
import NewsCard from 'components/News/NewsCard';
import news from '../../news';
import * as S from './styles';
import Container from 'styles/Container';

const sort = [1, 2, 3, 4, 5, 6, 7];
const sortedNews = sort.map((id) => news[id]);

const NewsList = () => {
  const renderItem = (item) => {
    return <NewsCard item={item} key={item.id} />;
  };
  return (
    <Container>
      <S.NewsList>{sortedNews.map(renderItem)}</S.NewsList>
    </Container>
  );
};

export default NewsList;
