import React from 'react';
import NewsCard from 'components/News/NewsCard';
import news from '../../news';
import * as S from './styles';
import Container from 'styles/Container';

const NewsList = () => {
  const renderItem = (item) => {
    return <NewsCard item={item} key={item.id} />;
  };
  return (
    <Container>
      <S.NewsList>{news.map(renderItem)}</S.NewsList>
    </Container>
  );
};

export default NewsList;
